import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.PocketBase);

export async function GET(request: Request) {
    const records = await pb.collection('recipes').getFullList();
    return NextResponse.json(records)
}

export async function POST(request: Request) {
    const res = await request.json()

    const data = {
        title: res.title,
        tags: res.tags,
        description: res.description,
        waterAmount: res.waterAmount,
        coffeeAmount: res.coffeeAmount,
        measurement: res.measurement,
        prepTime: res.prepTime,
        steps: res.steps
    };
    
    const record = await pb.collection('recipes').create(data);
    return NextResponse.json({message:"Saved", record})
}