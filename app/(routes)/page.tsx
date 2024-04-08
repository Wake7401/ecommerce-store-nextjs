import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("55956b2e-9792-40e7-8322-ae864018aee9");

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
