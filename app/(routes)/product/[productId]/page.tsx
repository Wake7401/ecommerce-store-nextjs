import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/gallery/info";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";
import type { Metadata } from "next";
import { cache } from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const getCategoryProduct = cache(getProduct)

export async function generateMetadata(
  { params }: ProductPageProps,
): Promise<Metadata> {
  const product = await getCategoryProduct(params.productId);

  return {
    title: product?.name,
    description: product?.description,
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getCategoryProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.image}/>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product}/>
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
