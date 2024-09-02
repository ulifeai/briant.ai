import { CrudService } from '@/lib/connectors/sql/crud';
import { NextRequest, NextResponse } from 'next/server';

const crudService = new CrudService();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { tableName, id, data } = body;

  if (!tableName || !id || !data) {
    return NextResponse.json({ success: false, error: 'Table name, id, and data are required' });
  }

  try {
    const updatedCount = await crudService.update(tableName, id, data);
    return NextResponse.json({ success: true, updatedCount });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
