import { NextRequest, NextResponse } from "next/server";
import db_config from "@/lib/api";

export async function GET(
    request : NextRequest,
    {params} : {params : {slug: string}}
) {
    try {
        const slug = params.slug;
        const connection = await db_config.getConnection();

        const [productRows] = await connection.query(
            'Select * from Products where slug = ?',[slug]
        )as any[];

        if(productRows.length === 0){
            connection.release();
            return NextResponse.json({
                succes: false,
                error: 'Product not found'},
            {status : 404});
        }
const product = productRows[0];

const [specs] = await connection.query(
    'Select spec_label, spec_value  from Product_specs where product_id = ?',
    [product.product_id]
)as any[];

const [images] = await connection.query(
    'Select image_url, alt_text From Product_image where product_id = ?',
    [product.product_id]
)as any[];

const [feedback] = await connection.query(
    'Select customer_name, rating, feedback_note,created_at from Product_feedback where product_id = ?',
)as any[];

connection.release();

return NextResponse.json({
    success : true, 
    data : {
        ...product,
        specs : specs,
        images: images,
        feedback: feedback
    }
});
}
catch(error){
    console.error('Error fetching products details from database: ', error);
    return NextResponse.json({
        success: false, 
        error: 'Failed to fetch product details'
    }, {status: 500});
}
}