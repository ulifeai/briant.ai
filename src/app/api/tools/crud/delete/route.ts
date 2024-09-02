import { CrudService } from '@/lib/connectors/sql/crud';
import { NextRequest, NextResponse } from 'next/server';

const crudService = new CrudService();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { tableName, id } = body;

  if (!tableName || !id) {
    return NextResponse.json({ success: false, error: 'Table name and id are required' });
  }

  try {
    const deletedCount = await crudService.delete(tableName, id);
    return NextResponse.json({ success: true, deletedCount });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
