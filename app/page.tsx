import Card from "@/components/Card/Card";
import Grid from "@/components/Grid/Grid";
import { getFeaturedProducts } from "@/services/productsServices";

const page = async () => {
  const featuredProducts = await getFeaturedProducts();
  return (
    <div>
      <h1>ECOMMERCE</h1>
      <Grid>
        {featuredProducts.map((featuredProduct, i) => (
          <Card key={i} product={featuredProduct} />
        ))}
      </Grid>
    </div>
  );
};

export default page;
