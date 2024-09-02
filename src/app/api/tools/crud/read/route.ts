import { CrudService } from '@/lib/connectors/sql/crud';
import { NextRequest, NextResponse } from 'next/server';

const crudService = new CrudService();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tableName = searchParams.get('tableName');
  const id = Number(searchParams.get('id'));

  if (!tableName || !id) {
    return NextResponse.json({ success: false, error: 'Table name and id are required' });
  }

  try {
    const record = await crudService.read(tableName, id);
    return NextResponse.json({ success: true, record });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
