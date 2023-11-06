import Head from "next/head";
import { useRouter } from "next/router";
import CardsGrid from "~/components/CardsGrid";
import Layout from "~/components/Layout";
import produse from "../../data";

export default function Category() {
  const router = useRouter();
  const filtered = produse.filter(
    (category) => category.link === router.asPath,
  );
  const subcategories = filtered[0]?.subcategories;
  console.log(subcategories);

  return (
    <>
      <Head>
        <title>Categorii | Logotip</title>
        <meta name="description" content="Internal product catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto px-4">
          {subcategories && <CardsGrid data={subcategories} />}
        </div>
      </Layout>
    </>
  );
}
