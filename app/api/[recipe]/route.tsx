import { NextResponse } from "next/server";
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.PocketBase);

export async function GET(
    request: Request,
    {params}: {params: Promise<{ recipe: string}>}) {
    const recipeid = (await params).recipe
    const record = await pb.collection('recipes').getOne(recipeid)
    return NextResponse.json(record)
}