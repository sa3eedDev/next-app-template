import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function GET(params:any) {
    const records = await pb.collection('recipes').getFullList();
    return NextResponse.json(records)
}