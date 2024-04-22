import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response){
    const data = await req.json()

    // for (var [key, value] of data.entries()) { 
    //     console.log(key, value);
    //    }
    console.log('POST ACCOUNT DATA',data)

    return NextResponse.json(data)
}