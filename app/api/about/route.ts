import {NextRequest, NextResponse} from 'next/server';
import db_config from '@/lib/api';

export async function GET(request : NextRequest){
    try{
        const connection = await db_config.getConnection();
        const [rows] = await connection.query('Select * from About');
        connection.release();
        return NextResponse.json({
            success : true,
            data : rows
        });
    }
    catch(error){
        console.error('Error fetching about information from database query : ', error);
        return NextResponse.json({
            success : false, 
            error : 'Failed to fetch about information'
        }, {status : 500});
    }

}