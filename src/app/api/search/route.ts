// REVISIT: handle redirect
import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
//change to get w query string
export async function POST(req: Request, res: Response){
    const data = await req.json()
    let searchedTherapists;
    console.log('api search requesrt:',data)
    buildSQL(data)

    const client = await db.connect();
    try {
        
        searchedTherapists = await client.sql`
        SELECT *
        FROM therapists
        WHERE price_min >= ${data.min_price} AND price_max <= ${data.max_price};
        `;

        return NextResponse.json( searchedTherapists.rows, { status: 201 })
        
    } catch (error) {
        console.error('Error getting data:', error);
        return NextResponse.json({ message: 'Error' }, { status: 400 })
    } finally {
        await client.end();
    }

    
}

//making sql query that will suit vars given by user search
const buildSQL = (prompts) => {
    let query = '';
    let queryMap = {
        max_price: "price_max <= ${data.max_price}",
        location:  "location",
        specialities: "specialities"
    }
    Object.entries(prompts).map(([key, value]) => (
        query += value ? queryMap[key] : ' '


    ))
    console.log('Q:',query)

}


  