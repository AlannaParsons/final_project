// get single therapist via id to show to user
import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

// get therapist w ID
export async function GET(req: Request, { params }, res: Response){
    const id = params.id
    let therapist;
    console.log('api search id:',id)

    const client = await db.connect();
    try {
        
        therapist = await client.sql`
        SELECT *
        FROM therapists
        WHERE id = ${id};
        `;

        return NextResponse.json( therapist.rows[0], { status: 201 })
        
    } catch (error) {
        console.error('Therapist not found:', error);
        return NextResponse.json({ message: 'Error' }, { status: 400 })
    } finally {
        await client.end();
    }
}

//add new therapist (under account)
export async function POST(req: Request, res: Response){
    // const id = await req.json()
    // let therapist;
    // console.log('api search id:',id)

    // const client = await db.connect();
    // try {
        
    //     therapist = await client.sql`
    //     SELECT *
    //     FROM therapists
    //     WHERE id = ${id};
    //     `;

    //     return NextResponse.json( therapist.rows[0], { status: 201 })
        
    // } catch (error) {
    //     console.error('Therapist not found:', error);
    //     return NextResponse.json({ message: 'Error' }, { status: 400 })
    // } finally {
    //     await client.end();
    // }
    
}

// get therapist w ID
export async function PATCH(req: Request, res: Response){
}


  