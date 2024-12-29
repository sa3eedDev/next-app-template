import { NextResponse } from "next/server";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function GET(
    request: Request,
    {params}: {params: Promise<{ recipe: string}>}) {
    const recipeid = (await params).recipe
    const record = await pb.collection('recipes').getOne(recipeid)
    return NextResponse.json(record)
}