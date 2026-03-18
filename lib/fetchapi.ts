export async function fetchCategories() {
  try {
    const response = await fetch('/api/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchSubcategories(category_id?: number) {
    try{
        const url = category_id ? 
        `/api/subcategories?category_id=${category_id}` : '/api/subcategories';

        const response = await fetch(url, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
            },
        });
        if(!response.ok){
            throw new Error('Failed to fetch subcategories');
        }
        const data = await response.json();
        return data.data;
    }
    
    catch (error) {
        console.error('Error fetching subcategories from API: ', error);
        return [];
    }
}

export async function fetchProducts(
    category_id?: number,
    sub_category_id?: number,
    limit?: number,
    offset?: number
) {
    try {

        const params = new URLSearchParams();
        if(category_id) params.append('category_id',category_id.toString());
        if(sub_category_id) params.append('sub_category_id', sub_category_id.toString());
        if(limit) params.append('limit', limit.toString());
        if(offset) params.append('offset', offset.toString());

        const url = params.toString() ?
        `/api/products?${params.toString()}` : '/api/products';

        const response = await fetch(url, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
            },

        });
    if(!response.ok){
        throw new Error('Failed to fetch products from the API');
    }
    const data = await response.json();
    return data.data;

    }

    catch (error){
        console.error('Error fetching the products incorrect parameters :', error);
        return [];
    }
}


// export async function fetchProduct_details(
//     product_id : number, 
//     sub_category_id? : number,
//     category_id? : number,
// ){
//     try {
//         const params = new URLSearchParams();
//         if(product_id) params.append('product_id', product_id.toString());
//         if(sub_category_id) params.append('sub_category_id', sub_category_id.toString());
//         if(category_id) params.append('category_id', category_id.toString());

//         const url = params.toString() 
//         ? `/api/product_details?${params.toString()}` : '/api/product_details';

//         const response = await fetch(url, {
//             method : 'GET',
//             headers : {
//                 'Content-Type' : 'application/json',
//             },
//         });
//         if(!response.ok){
//             throw new Error('Failed to fetch the products Details from API');
//         }
//         const data = await response.json();
//         return data.data;
//     }

//     catch(error){
//         console.error('Error fetching product details from API: ', error);
//         return [];
//     }
// }

// export async function fetchProductbyslug(slug ?: string){
//     try {
//         const url 
//     }
// }

export async function fetchProductbyslug(slug? : string){
    try{
        const url = slug ? 
        `/api/product_details?slug=${slug}` : '/api/product_details';

        const response = await fetch(url,{
            method : 'GET',
            headers : {'Content-Type' : 'application/json',},
        });

        if(!response.ok){
            throw new Error('Failed to fetch products details from API');

        }
const data = await response.json();
return data.data;
    }

    catch(error){
console.error('Error fetching product details from the alug parameter from API :',error);
return null;
    }
}

export async function fetchAbout(){
    try{
        const response = await fetch('/api/about',{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
            },
        });

        if(!response.ok){
            throw new Error('Failed to fetch about information from API :')
        }

        const data = await response.json();
        return data.data;
    }

    catch(error){
        console.error('Failed to fetch about information :', error);
        return null;
    }
}