import { Client, Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL??""
});

const getTableColumns = async (tableName: string) => {
  const client = await pool.connect()

    const query = `
      SELECT column_name, data_type, is_nullable, character_maximum_length, numeric_precision, numeric_scale
      FROM information_schema.columns
      WHERE table_name = $1
    `;
    const res = await client.query(query, [tableName]);
    client.release()
    return res.rows;
  };
  
  const getTableRelationships = async (tableName: string) => {
    const client = await pool.connect()
    const query = `
      SELECT
        kcu.column_name,
        ccu.table_name AS foreign_table_name,
        ccu.column_name AS foreign_column_name
      FROM 
        information_schema.table_constraints AS tc 
        JOIN information_schema.key_column_usage AS kcu
          ON tc.constraint_name = kcu.constraint_name
          AND tc.table_schema = kcu.table_schema
        JOIN information_schema.constraint_column_usage AS ccu
          ON ccu.constraint_name = tc.constraint_name
      WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name=$1;
    `;
    const res = await client.query(query, [tableName]);
    client.release()
    return res.rows;
  };
  
  const mapPostgresTypeToTSType = (col: any): string => {
    switch (col.data_type) {
      case 'integer':
      case 'bigint':
      case 'smallint':
        return 'integer';
      case 'numeric':
        return `DECIMAL(${col.numeric_precision},${col.numeric_scale})`;
      case 'real':
      case 'double precision':
        return 'DOUBLE PRECISION';
      case 'boolean':
        return 'BOOLEAN';
      case 'character varying':
      case 'varchar':
        return `VARCHAR(${col.character_maximum_length})`;
      case 'text':
        return 'TEXT';
      case 'char':
        return `CHAR(${col.character_maximum_length})`;
      case 'timestamp':
      case 'timestamp without time zone':
        return 'TIMESTAMP';
      case 'timestamp with time zone':
        return 'TIMESTAMP WITH TIME ZONE';
      case 'date':
        return 'DATE';
      case 'uuid':
        return 'UUID';
      default:
        return col.data_type.toUpperCase();
    }
  };
  
  const generateJsonSchema = (tableName: string, columns: any[], relationships: any[]) => {
    const fields = columns.map(col => {
      const relationship = relationships.find(rel => rel.column_name === col.column_name);
      return {
        name: col.column_name,
        type: mapPostgresTypeToTSType(col),
        isNullable: col.is_nullable === 'YES',
        relationship: relationship ? relationship.foreign_table_name : null
      };
    });
  
    return {
      table: tableName,
      fields: fields
    };
  };
  
  export const extractSchema = async () => {
    const client = await pool.connect()
    // await client.connect();
    
    // Get list of tables
    const tablesRes = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
    `);
    const tables = tablesRes.rows.map(row => row.table_name);
  
    const schema = [];
  
    for (const table of tables) {
      const columns = await getTableColumns(table);
      const relationships = await getTableRelationships(table);
      const jsonSchema = generateJsonSchema(table, columns, relationships);
      schema.push(jsonSchema);
    }
  
    await client.release();
    // return schema;
    // Output the schema as JSON
    return JSON.stringify(schema, null, 2);
  };
