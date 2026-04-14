'use client';
import { useState, useEffect } from "react";
import { CategoryCard, type CategoryItem } from "./category-card";
import { fetchCategories, fetchSubcategories } from "@/lib/fetchapi";

interface Category{
  category_id : number;
  category_name : string;
  image_url? : string;
}
interface Subcategory{
  sub_category_id : number;
  category_id : number;
  sub_category_name : string;
  image_url? : string;

}

interface CategoryWithItems {
  id : string;
  title: string;
  href: string;
  items: CategoryItem[];
}

export function CategoriesSection() {
  const [categories, setCategories] = useState<CategoryWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() =>{
    const loadCategories = async () => {
      try{
        setLoading(true);
        const categoriesData: Category[] = await fetchCategories();

        // Fetch subcategories for each category
        const categoriesWithItems = await Promise.all(
        categoriesData.map(async (category)=>{
          const subcategories: Subcategory[] = await fetchSubcategories(category.category_id);

          const items: CategoryItem[] = subcategories.map((sub) => ({

            name: sub.sub_category_name,
            imageUrl: sub.image_url || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",  //fallback if image not found, default image
            alt : sub.sub_category_name
          }));

          return {
            id: `categories-${category.category_name.toLowerCase()}`,
              title: category.category_name.toUpperCase(),
              href: `/${category.category_name.toLowerCase()}`,
              items
            };
          })
        );

        setCategories(categoriesWithItems);
      }
      catch(err){
        console.error("Error loading categories: ", err);
        setError("Failed toload categories");
      }
      finally{
        setLoading(false);
      }
    };
  loadCategories();
  }, []);

  if (loading) {
    return (
      <section id="categories" className="bg-background-alt py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-text-primary mb-12 text-center">
            Categories
          </h1>
          <div className="text-center">Loading categories...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="categories" className="bg-background-alt py-16 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-text-primary mb-12 text-center">
            Categories
          </h1>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="categories" className="bg-background-alt py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-12 text-center">
          Categories
        </h1>
        <div className="space-y-16">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} id={cat.id} title={cat.title} href={cat.href} items={cat.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

