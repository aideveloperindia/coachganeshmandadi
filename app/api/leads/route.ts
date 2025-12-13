import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, source, timestamp } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Check if MongoDB is available
    if (!clientPromise) {
      console.log('MongoDB not configured, skipping database save');
      return NextResponse.json(
        { success: true, message: 'Lead received (database not configured)' },
        { status: 200 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('coachgk');
    const collection = db.collection('leads');

    // Insert lead
    const result = await collection.insertOne({
      name,
      email: email || '',
      source: source || 'Website',
      timestamp: timestamp || new Date().toISOString(),
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving lead:', error);
    
    // Return success even if DB fails (so user still gets PDF)
    return NextResponse.json(
      { success: true, message: 'Lead received' },
      { status: 200 }
    );
  }
}

export async function GET() {
  try {
    // Check if MongoDB is available
    if (!clientPromise) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    const client = await clientPromise;
    const db = client.db('coachgk');
    const collection = db.collection('leads');

    const leads = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}









