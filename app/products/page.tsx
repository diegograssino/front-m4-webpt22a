import Card from "@/components/Card/Card";
import Grid from "@/components/Grid/Grid";
import { getProducts } from "@/services/productsServices";

const page = async () => {
  const products = await getProducts();
  return (
    <div>
      <Grid>
        {products.map((featuredProduct, i) => (
          <Card key={i} product={featuredProduct} />
        ))}
      </Grid>
    </div>
  );
};

export default page;
