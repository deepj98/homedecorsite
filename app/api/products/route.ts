import { NextRequest, NextResponse} from 'next/server';
import db_config from '@/lib/api';

export async function GET(request : NextRequest){
    try{
        const connection = await db_config.getConnection();
        const category_id = request.nextUrl.searchParams.get('category_id');
        const sub_category_id = request.nextUrl.searchParams.get('sub_category_id');    

        let query = 'Select * from Product_detail where 1=1';
        let params : (string | number )[] = [];

        if(category_id){
            query += 'and category_id = ?';
            params.push(category_id);
        }

        if(sub_category_id){
            query += 'and sub_category_id = ?';
            params.push(sub_category_id);
        }

        query += 'order by created_at desc';
        const [rows] = await connection.query(query, params);
        connection.release();

        return NextResponse.json({
            success : true,
            data : rows
        });
    }
    catch(error) {
        console.error('Error fetching All products using Category and Subcategory from database query : ', error);
        return NextResponse.json({
            success : false, error : 'Failed to fetch products'
        }, {status : 500});
    }
}