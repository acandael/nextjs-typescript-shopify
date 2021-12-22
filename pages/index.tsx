import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@framework/product';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
      revalidate: 4 * 60 * 60,
    },
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<GetStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream &amp; muffin"
        description="Wafer pie jelly tart jelly beans sweet soufflé. Lollipop liquorice lemon drops wafer muffin lemon drops gummies. Carrot cake tiramisu topping jelly cupcake marzipan jelly. Brownie cookie candy canes cake biscuit danish marshmallow candy. Apple pie gummi bears gummies powder danish jelly cake. Sugar plum tart croissant donut jelly-o caramels. Biscuit sugar plum chocolate bar pie chocolate bar danish carrot cake pastry. Chocolate bar lemon drops lemon drops pastry danish cake chocolate cake donut."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
