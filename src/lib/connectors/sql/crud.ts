import { Knex, knex }  from 'knex';

interface CrudServiceOptions {
  tableName: string;
  primaryKey?: string; // Defaults to 'id'
}

const config: Knex.Config = {
    client: 'pg',
    connection: process.env.DATABASE_URL??""
  };

// const config: Knex.Config = {
//   client: 'better-sqlite3',
//   connection: {
//     filename: "./../../../sample.sqlite",
//   },
//   debug: true

//   };
  
const knexInstance = knex(config);
  

export class CrudService {
  private knex: Knex;
  private primaryKey: string;

  constructor(options?: CrudServiceOptions) {
    this.knex = knexInstance;
    this.primaryKey = options?.primaryKey || 'id';
  }

  async create(tableName: string, data: Record<string, any>): Promise<number[]> {
    const ids = await this.knex(tableName).insert(data).returning('id');
    return ids;
  }

  async read(tableName: string, id: number): Promise<Record<string, any> | undefined> {
    const record = await this.knex(tableName)
      .where(this.primaryKey, id)
      .first();
    return record;
  }

  async readAll(tableName: string): Promise<Record<string, any>[]> {
    const records = await this.knex(tableName).select();
    return records;
  }

  async update(tableName: string, id: number, data: Record<string, any>): Promise<number> {
    const updated = await this.knex(tableName)
      .where(this.primaryKey, id)
      .update(data);
    return updated;
  }

  async delete(tableName: string, id: number): Promise<number> {
    const deleted = await this.knex(tableName)
      .where(this.primaryKey, id)
      .del();
    return deleted;
  }
}
