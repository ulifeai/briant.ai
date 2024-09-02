import { CrudService } from '@/lib/connectors/sql/crud';
import { NextRequest, NextResponse } from 'next/server';

const crudService = new CrudService();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { tableName, data } = body;

  try {
    const ids = await crudService.create(tableName, data);
    return NextResponse.json({ success: true, ids });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
