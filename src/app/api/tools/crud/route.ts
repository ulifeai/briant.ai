import intelligence from "@/lib/ai/invoke";
import { extractSchema } from "@/lib/connectors/sql/postgres";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function GET (req: NextRequest){
    // const body = await req.json()
    // If using MySQL, import { createConnection } from 'mysql2/promise';

    const databaseData = await extractSchema();

    // const databaseData = await intelligence.generateDB(body.app_description??"")
    // const databaseData = `'[\n  {\n    "table": "companies",\n    "fields": [\n      {"name": "id", "type": "UUID"},\n      {"name": "name", "type": "VARCHAR(255)"},\n      {"name": "address", "type": "TEXT"},\n      {"name": "created_at", "type": "TIMESTAMP"},\n      {"name": "updated_at", "type": "TIMESTAMP"}\n    ]\n  },\n  {\n    "table": "shifts",\n    "fields": [\n      {"name": "id", "type": "UUID"},\n      {"name": "company_id", "type": "UUID", "relationship": "companies"},\n      {"name": "address", "type": "TEXT"},\n      {"name": "start_time", "type": "TIMESTAMP"},\n      {"name": "end_time", "type": "TIMESTAMP"},\n      {"name": "total_hours", "type": "DECIMAL(5,2)"},\n      {"name": "shift_date", "type": "DATE"},\n      {"name": "rate", "type": "DECIMAL(10,2)"},\n      {"name": "required_role", "type": "VARCHAR(255)"},\n      {"name": "is_recurrent", "type": "BOOLEAN"},\n      {"name": "created_at", "type": "TIMESTAMP"},\n      {"name": "updated_at", "type": "TIMESTAMP"}\n    ]\n  },\n  {\n    "table": "candidates",\n    "fields": [\n      {"name": "id", "type": "UUID"},\n      {"name": "first_name", "type": "VARCHAR(255)"},\n      {"name": "last_name", "type": "VARCHAR(255)"},\n      {"name": "email", "type": "VARCHAR(255)"},\n      {"name": "phone", "type": "VARCHAR(20)"},\n      {"name": "role", "type": "VARCHAR(255)"},\n      {"name": "created_at", "type": "TIMESTAMP"},\n      {"name": "updated_at", "type": "TIMESTAMP"}\n    ]\n  },\n  {\n    "table": "bookings",\n    "fields": [\n      {"name": "id", "type": "UUID"},\n      {"name": "shift_id", "type": "UUID", "relationship": "shifts"},\n      {"name": "candidate_id", "type": "UUID", "relationship": "candidates"},\n      {"name": "status", "type": "VARCHAR(50)"},\n      {"name": "created_at", "type": "TIMESTAMP"},\n      {"name": "updated_at", "type": "TIMESTAMP"}\n    ]\n  },\n  {\n    "table": "timesheets",\n    "fields": [\n      {"name": "id", "type": "UUID"},\n      {"name": "booking_id", "type": "UUID", "relationship": "bookings"},\n      {"name": "start_time", "type": "TIMESTAMP"},\n      {"name": "end_time", "type": "TIMESTAMP"},\n      {"name": "break_time", "type": "DECIMAL(5,2)"},\n      {"name": "total_hours", "type": "DECIMAL(5,2)"},\n      {"name": "earnings", "type": "DECIMAL(10,2)"},\n      {"name": "created_at", "type": "TIMESTAMP"},\n      {"name": "updated_at", "type": "TIMESTAMP"}\n    ]\n  },\n  {\n    "table": "invoices",\n    "fields": [\n      {"name": "id", "type": "UUID"},\n      {"name": "company_id", "type": "UUID", "relationship": "companies"},\n      {"name": "total_amount", "type": "DECIMAL(10,2)"},\n      {"name": "status", "type": "VARCHAR(50)"},\n      {"name": "created_at", "type": "TIMESTAMP"},\n      {"name": "updated_at", "type": "TIMESTAMP"}\n    ]\n  },\n  {\n    "table": "incidents",\n    "fields": [\n      {"name": "id", "type": "UUID"},\n      {"name": "shift_id", "type": "UUID", "relationship": "shifts"},\n      {"name": "description", "type": "TEXT"},\n      {"name": "reported_at", "type": "TIMESTAMP"},\n      {"name": "created_at", "type": "TIMESTAMP"},\n      {"name": "updated_at", "type": "TIMESTAMP"}\n    ]\n  }\n]'`
    return NextResponse.json({
        data: JSON.parse((await intelligence.generateMenu(databaseData.toString())).toString()),
        sampleData: JSON.parse((await intelligence.generateSampleData(databaseData.toString())).toString()),
        databaseData
        // model: await intelligence.generateModel(databaseData.toString())
    })

}