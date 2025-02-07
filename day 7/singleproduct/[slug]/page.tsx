
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import SingleProductUI from "@/app/components/SingleProductUI"; // ✅ Client Component

interface Product {
  id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  description: string;
  imageUrl: string;
  inventory: number;
  category: { title: string } | null;
  slug: string; // ✅ Ensure slug is included
}

export default async function SingleProductPage({ params }: { params: { slug: string } }) {
  // ✅ Fetch product by slug from Sanity
  const query = `
    *[_type == "products" && slug.current == $slug][0] {
      _id, title, price, priceWithoutDiscount, badge, description, inventory, 
      "imageUrl": image.asset->url, category->{ title }, "slug": slug.current
    }
  `;

  const product: Product | null = await client.fetch(query, { slug: params.slug });

  if (!product) return notFound();

  // ✅ Fetch related products
  const relatedQuery = `
    *[_type == "products" && slug.current != $slug][0...4] {
      _id, title, price, "imageUrl": image.asset->url, "slug": slug.current
    }
  `;

  const relatedProducts = await client.fetch(relatedQuery, { slug: params.slug });

  return <SingleProductUI product={product} relatedProducts={relatedProducts} />;
}
