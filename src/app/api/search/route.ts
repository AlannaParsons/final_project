// REVISIT: handle redirect
import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
//change to get w query string
export async function POST(req: Request, res: Response){
    const data = await req.json()

    console.log('GET THERAPIST DATA API',data);
    let searchedTherapists;
    buildSQL(data)

    const client = await db.connect();
    try {
        
        searchedTherapists = await client.sql`
        SELECT *
        FROM therapists
        WHERE price_min >= ${data.min_price} AND price_max <= ${data.max_price};
        `;
        console.log('ESXDTFGCHVJBKNLM:<',searchedTherapists.rows)
        return NextResponse.json( searchedTherapists.rows, { status: 201 })
        
    } catch (error) {
        console.error('Error getting data:', error);
        return NextResponse.json({ message: 'Error' }, { status: 400 })
    } finally {
        await client.end();
    }

    
}

const buildSQL = (prompts) => {
    let query = '';
    switch(prompts) {
        case prompts.min_price:
            query += "price_min >= ${data.min_price}";
        case prompts.max_price:
            query += "price_max <= ${data.max_price};";
        case prompts.location:
            query += "location";
        default:
            query = "I have never heard of that one..";
    }
    console.log('Q:',query)

}


  