import Head from "next/head";
import Image from "next/image";
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

  if (subcategories === undefined) {
    return <div>404</div>;
  }

  return (
    <>
      <Head>
        <title>Categorii | Logotip</title>
        <meta name="description" content="Internal product catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto min-h-screen px-4">
          {subcategories.length === 0 ? (
            <div className="flex h-screen items-center justify-center">
              <Image
                src="/assets/under-construction.svg"
                width={500}
                height={500}
                alt="under construction"
              ></Image>
            </div>
          ) : (
            <CardsGrid data={subcategories} />
          )}
        </div>
      </Layout>
    </>
  );
}
