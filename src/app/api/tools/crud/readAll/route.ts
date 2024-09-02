import { CrudService } from '@/lib/connectors/sql/crud';
import { NextRequest, NextResponse } from 'next/server';

const crudService = new CrudService();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tableName = searchParams.get('tableName');

  if (!tableName) {
    return NextResponse.json({ success: false, error: 'Table name is required' });
  }

  try {
    const records = await crudService.readAll(tableName);
    return NextResponse.json({ success: true, records });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
