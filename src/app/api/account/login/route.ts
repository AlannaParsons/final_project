// ACCOUNT CREATION
import { NextResponse } from "next/server";
const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

export async function POST(req: Request, res: Response){
    const data = await req.json()
    let account;

    const client = await db.connect();
    try {
        
        account = await client.sql`
            SELECT * FROM accounts
            WHERE ${data.email} = email
            ;
        `;

        let valid = await bcrypt.compare(
                data.password, account.rows[0].password
            )

        if (valid) {
            delete account.rows[0].password
            return NextResponse.json( { data: account.rows[0] }, { status: 201 })
        } else {
            throw new Error
        }
            
    } catch (error) {
        console.error('Error finding existing account:', error);
        return NextResponse.json({ message: 'Error' }, { status: 401 })
    } finally {
        await client.end();
    }

}


  