# Code Citations

## License: unknown
https://github.com/essi2002/HexaCoffee/blob/526669266513be5ef60ea1dc55037b15508f9879/src/Components/Admin/Admin.jsx

```
Got it! Let me explain the **fetchAPI** functions first (these are helper functions to call your backend APIs from the frontend).

## **Frontend API Helper Functions (lib/fetchApi.ts)**

Here's what each function does:

1. **`fetchCategories()`** - Gets all product categories (Bedding, Kitchen, Bath, etc.)

2. **`fetchSubcategories(categoryId?)`** - Gets subcategories for a specific category, or all if no ID provided (e.g., Bedsheets, Pillows under Bedding)

3. **`fetchProducts(categoryId?, subCategoryId?, limit?, offset?)`** - Gets product list with optional filtering by category/subcategory and pagination (limit/offset)

4. **`fetchProductBySlug(slug)`** - Gets detailed info for a single product (including specs, images, reviews) by its URL slug

5. **`fetchAboutInfo()`** - Gets store information (name, contact, address, email)

---

## **Code for lib/fetchApi.ts**

```typescript
// Utility functions for making API calls to the server

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
  } catch (error)
```


## License: unknown
https://github.com/essi2002/HexaCoffee/blob/526669266513be5ef60ea1dc55037b15508f9879/src/Components/Admin/Admin.jsx

```
Got it! Let me explain the **fetchAPI** functions first (these are helper functions to call your backend APIs from the frontend).

## **Frontend API Helper Functions (lib/fetchApi.ts)**

Here's what each function does:

1. **`fetchCategories()`** - Gets all product categories (Bedding, Kitchen, Bath, etc.)

2. **`fetchSubcategories(categoryId?)`** - Gets subcategories for a specific category, or all if no ID provided (e.g., Bedsheets, Pillows under Bedding)

3. **`fetchProducts(categoryId?, subCategoryId?, limit?, offset?)`** - Gets product list with optional filtering by category/subcategory and pagination (limit/offset)

4. **`fetchProductBySlug(slug)`** - Gets detailed info for a single product (including specs, images, reviews) by its URL slug

5. **`fetchAboutInfo()`** - Gets store information (name, contact, address, email)

---

## **Code for lib/fetchApi.ts**

```typescript
// Utility functions for making API calls to the server

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
  } catch (error)
```


## License: unknown
https://github.com/essi2002/HexaCoffee/blob/526669266513be5ef60ea1dc55037b15508f9879/src/Components/Admin/Admin.jsx

```
Got it! Let me explain the **fetchAPI** functions first (these are helper functions to call your backend APIs from the frontend).

## **Frontend API Helper Functions (lib/fetchApi.ts)**

Here's what each function does:

1. **`fetchCategories()`** - Gets all product categories (Bedding, Kitchen, Bath, etc.)

2. **`fetchSubcategories(categoryId?)`** - Gets subcategories for a specific category, or all if no ID provided (e.g., Bedsheets, Pillows under Bedding)

3. **`fetchProducts(categoryId?, subCategoryId?, limit?, offset?)`** - Gets product list with optional filtering by category/subcategory and pagination (limit/offset)

4. **`fetchProductBySlug(slug)`** - Gets detailed info for a single product (including specs, images, reviews) by its URL slug

5. **`fetchAboutInfo()`** - Gets store information (name, contact, address, email)

---

## **Code for lib/fetchApi.ts**

```typescript
// Utility functions for making API calls to the server

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
  } catch (error)
```


## License: unknown
https://github.com/essi2002/HexaCoffee/blob/526669266513be5ef60ea1dc55037b15508f9879/src/Components/Admin/Admin.jsx

```
Got it! Let me explain the **fetchAPI** functions first (these are helper functions to call your backend APIs from the frontend).

## **Frontend API Helper Functions (lib/fetchApi.ts)**

Here's what each function does:

1. **`fetchCategories()`** - Gets all product categories (Bedding, Kitchen, Bath, etc.)

2. **`fetchSubcategories(categoryId?)`** - Gets subcategories for a specific category, or all if no ID provided (e.g., Bedsheets, Pillows under Bedding)

3. **`fetchProducts(categoryId?, subCategoryId?, limit?, offset?)`** - Gets product list with optional filtering by category/subcategory and pagination (limit/offset)

4. **`fetchProductBySlug(slug)`** - Gets detailed info for a single product (including specs, images, reviews) by its URL slug

5. **`fetchAboutInfo()`** - Gets store information (name, contact, address, email)

---

## **Code for lib/fetchApi.ts**

```typescript
// Utility functions for making API calls to the server

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
  } catch (error)
```


## License: unknown
https://github.com/GodfreyGodson/sokofront/blob/3058f97b1b0af337f9e0d10a71333be739601ea0/frontend/src/api.js

```
Got it! Let me explain the **fetchAPI** functions first (these are helper functions to call your backend APIs from the frontend).

## **Frontend API Helper Functions (lib/fetchApi.ts)**

Here's what each function does:

1. **`fetchCategories()`** - Gets all product categories (Bedding, Kitchen, Bath, etc.)

2. **`fetchSubcategories(categoryId?)`** - Gets subcategories for a specific category, or all if no ID provided (e.g., Bedsheets, Pillows under Bedding)

3. **`fetchProducts(categoryId?, subCategoryId?, limit?, offset?)`** - Gets product list with optional filtering by category/subcategory and pagination (limit/offset)

4. **`fetchProductBySlug(slug)`** - Gets detailed info for a single product (including specs, images, reviews) by its URL slug

5. **`fetchAboutInfo()`** - Gets store information (name, contact, address, email)

---

## **Code for lib/fetchApi.ts**

```typescript
// Utility functions for making API calls to the server

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

export async function fetchSubcategories(categoryId?: number) {
  try {
    const url = categoryId 
      ? `/api/subcategories?categoryId=${categoryId}` 
      : '/api/subcategories';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch subcategories');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    return [];
  }
}

export async function fetchProducts(
  categoryId?: number,
  subCategoryId?: number,
  limit?: number,
  offset?: number
) {
  try {
    const params = new URLSearchParams();

    if (categoryId) params.append('categoryId', categoryId.toString());
    if (subCategoryId) params.append('subCategoryId', subCategoryId.toString());
    if (limit) params.append('limit', limit.toString());
    if (offset) params.append('offset', offset.toString());

    const url = params.toString() 
      ? `/api/products?${params.toString()}` 
      : '/api/products';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductBySlug(slug: string) {
  try {
    const response = await fetch(`/api/products/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
}

export async function fetchAboutInfo() {
  try {
    const response
```


## License: unknown
https://github.com/GodfreyGodson/sokofront/blob/3058f97b1b0af337f9e0d10a71333be739601ea0/frontend/src/api.js

```
Got it! Let me explain the **fetchAPI** functions first (these are helper functions to call your backend APIs from the frontend).

## **Frontend API Helper Functions (lib/fetchApi.ts)**

Here's what each function does:

1. **`fetchCategories()`** - Gets all product categories (Bedding, Kitchen, Bath, etc.)

2. **`fetchSubcategories(categoryId?)`** - Gets subcategories for a specific category, or all if no ID provided (e.g., Bedsheets, Pillows under Bedding)

3. **`fetchProducts(categoryId?, subCategoryId?, limit?, offset?)`** - Gets product list with optional filtering by category/subcategory and pagination (limit/offset)

4. **`fetchProductBySlug(slug)`** - Gets detailed info for a single product (including specs, images, reviews) by its URL slug

5. **`fetchAboutInfo()`** - Gets store information (name, contact, address, email)

---

## **Code for lib/fetchApi.ts**

```typescript
// Utility functions for making API calls to the server

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

export async function fetchSubcategories(categoryId?: number) {
  try {
    const url = categoryId 
      ? `/api/subcategories?categoryId=${categoryId}` 
      : '/api/subcategories';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch subcategories');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    return [];
  }
}

export async function fetchProducts(
  categoryId?: number,
  subCategoryId?: number,
  limit?: number,
  offset?: number
) {
  try {
    const params = new URLSearchParams();

    if (categoryId) params.append('categoryId', categoryId.toString());
    if (subCategoryId) params.append('subCategoryId', subCategoryId.toString());
    if (limit) params.append('limit', limit.toString());
    if (offset) params.append('offset', offset.toString());

    const url = params.toString() 
      ? `/api/products?${params.toString()}` 
      : '/api/products';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductBySlug(slug: string) {
  try {
    const response = await fetch(`/api/products/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
}

export async function fetchAboutInfo() {
  try {
    const response
```


## License: unknown
https://github.com/GodfreyGodson/sokofront/blob/3058f97b1b0af337f9e0d10a71333be739601ea0/frontend/src/api.js

```
Got it! Let me explain the **fetchAPI** functions first (these are helper functions to call your backend APIs from the frontend).

## **Frontend API Helper Functions (lib/fetchApi.ts)**

Here's what each function does:

1. **`fetchCategories()`** - Gets all product categories (Bedding, Kitchen, Bath, etc.)

2. **`fetchSubcategories(categoryId?)`** - Gets subcategories for a specific category, or all if no ID provided (e.g., Bedsheets, Pillows under Bedding)

3. **`fetchProducts(categoryId?, subCategoryId?, limit?, offset?)`** - Gets product list with optional filtering by category/subcategory and pagination (limit/offset)

4. **`fetchProductBySlug(slug)`** - Gets detailed info for a single product (including specs, images, reviews) by its URL slug

5. **`fetchAboutInfo()`** - Gets store information (name, contact, address, email)

---

## **Code for lib/fetchApi.ts**

```typescript
// Utility functions for making API calls to the server

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

export async function fetchSubcategories(categoryId?: number) {
  try {
    const url = categoryId 
      ? `/api/subcategories?categoryId=${categoryId}` 
      : '/api/subcategories';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch subcategories');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    return [];
  }
}

export async function fetchProducts(
  categoryId?: number,
  subCategoryId?: number,
  limit?: number,
  offset?: number
) {
  try {
    const params = new URLSearchParams();

    if (categoryId) params.append('categoryId', categoryId.toString());
    if (subCategoryId) params.append('subCategoryId', subCategoryId.toString());
    if (limit) params.append('limit', limit.toString());
    if (offset) params.append('offset', offset.toString());

    const url = params.toString() 
      ? `/api/products?${params.toString()}` 
      : '/api/products';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductBySlug(slug: string) {
  try {
    const response = await fetch(`/api/products/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
}

export async function fetchAboutInfo() {
  try {
    const response
```

