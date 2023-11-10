import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import CardsGrid from "~/components/CardsGrid";
import Layout from "~/components/Layout";
import produse from "../../../data";

export default function Subcategory() {
  const router = useRouter();
  const filtered = produse.filter(
    (category) => category.link === router.asPath.split("/")[1],
  );

  const subcategories = filtered[0]?.subcategories;
  const filteredSubcategory = subcategories?.filter(
    (subcategory) => subcategory.link === router.asPath.split("/")[2],
  );
  console.log();

  if (filteredSubcategory === undefined) {
    return <div>404</div>;
  }
  const designs = filteredSubcategory[0]?.designs;
  if (designs === undefined) {
    return <div>404</div>;
  }
  return (
    <>
      <Head>
        <title>Subcategorii | Logotip</title>
        <meta name="description" content="Internal product catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto pt-16">
          {designs.length === 0 ? (
            <div className="flex h-screen items-center justify-center">
              <Image
                src="/assets/under-construction.svg"
                width={500}
                height={500}
                alt="under construction"
                priority
              ></Image>
            </div>
          ) : (
            <CardsGrid data={designs} />
          )}
        </div>
      </Layout>
    </>
  );
}
