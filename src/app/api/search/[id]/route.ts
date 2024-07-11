// get single therapist via id to show to user
import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

export async function POST(req: Request, res: Response){
    const data = await req.json()
    let therapist;
    console.log('api search id:',data)

    const client = await db.connect();
    try {
        
        therapist = await client.sql`
        SELECT *
        FROM therapists
        WHERE id = ${data};
        `;

        return NextResponse.json( therapist.rows[0], { status: 201 })
        
    } catch (error) {
        console.error('Therapist not found:', error);
        return NextResponse.json({ message: 'Error' }, { status: 400 })
    } finally {
        await client.end();
    }

    
}


  