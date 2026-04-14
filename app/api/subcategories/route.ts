import { NextResponse, NextRequest } from "next/server";
import db_config from "@/lib/api";

export async function GET(request : NextRequest){
    try{
        const category_id = request.nextUrl.searchParams.get('category_id');
        const connection = await db_config.getConnection();
        
        let query = 'Select * from Subcategories';
        let params : (string | number)[] = [];
        if(category_id){
            query += ' where category_id = ?';
            params.push(category_id);
        }
        
        query += 'order by sub_category_name';
        const [rows] = await connection.query(query, params);
        connection.release();
        return NextResponse.json({
            success : true,
            data : rows
        });
    }

    catch(error){
        console.error('Error fetching subcategories from database query : ',error);
        return NextResponse.json({
            success : false, error : 'Failed to fetch subcategories'
        }, {status : 500});
    }
}