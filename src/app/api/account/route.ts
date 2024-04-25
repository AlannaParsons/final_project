// REVISIT: handle redirect
import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

export async function POST(req: Request, res: Response){
    const data = await req.json()

    console.log('GET POST ACCOUNT DATA',data)
    const fullName = `${data.ln}, ${data.fn}`

// access returned id
    let createdId = null;
    const client = await db.connect();
    try {
        
        const hashedPassword = await bcrypt.hash(data.password, 10);
        createdId = await client.sql`
        INSERT INTO accounts (name, email, password, address, phone_number, website)
        VALUES (${fullName}, ${data.email}, ${hashedPassword},
            ${data.address}, ${data.phone_number}, ${data.website})
        RETURNING id;
        `;
        
    } catch (error) {
        console.error('Error inserting new account:', error);
        return NextResponse.json({ message: 'Creation Error' }, { status: 400 })
    } finally {
        await client.end();
    }

    return NextResponse.json({ message: 'Account Created' }, { status: 201 })
}

  