import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'STORE',
  description: 'Store created by Dang Anh Kiet',
}

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("8b42d8ff-c4dd-41cd-8ddd-9e7c709409e2");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px6 lg:px-8">
        <ProductList title="Featured Products" items={products}/>
      </div>
    </Container>
  );
};

export default HomePage;
