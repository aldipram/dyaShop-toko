import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/global/banner";
import ProductList from "@/components/global/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async ({ id } : { id: string }) => {

  const banner = await getBanner(id);
  const products = await getProducts({isFeatured: true});

  return (
    <Container>
        <div className="space-y-10 pb-10">
            <Banner data={banner}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList title="Produk Unggulan" items={products} />
            </div>
        </div>
    </Container>
  )
}

export default HomePage