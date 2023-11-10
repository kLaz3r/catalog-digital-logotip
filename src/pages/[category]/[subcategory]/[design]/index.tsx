import Head from "next/head";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import CardsGrid from "~/components/CardsGrid";
import Layout from "~/components/Layout";
import produse from "../../../../data";

export default function Subcategory() {
  const router = useRouter();
  const filtered = produse.filter(
    (category) => category.link === router.asPath.split("/")[1],
  );

  const subcategories = filtered[0]?.subcategories;
  const filteredSubcategory = subcategories?.filter(
    (subcategory) => subcategory.link === router.asPath.split("/")[2],
  );
  if (filteredSubcategory === undefined) {
    return <div>404</div>;
  }
  const designs = filteredSubcategory[0]?.designs;
  const filteredDesign = filteredSubcategory[0]?.designs.filter(
    (design) => design.link === router.asPath.split("/")[3],
  );
  if (filteredDesign === undefined) {
    return <div>404</div>;
  }
  if (designs === undefined) {
    return <div>404</div>;
  }
  if (filteredDesign[0] === undefined) {
    return <div>404</div>;
  }
  const designId =
    filtered[0]?.id +
    "." +
    filteredSubcategory[0]?.id +
    "." +
    filteredDesign[0]?.id;
  const imageSrc =
    filteredDesign[0]?.image === "" || filteredDesign[0]?.image === undefined
      ? "/assets/placeholde.jpg"
      : filteredDesign[0]?.image;
  const data = filteredDesign[0];
  return (
    <>
      <Head>
        <title>Design | Logotip</title>
        <meta name="description" content="Internal product catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto h-screen pt-16">
          <div className="flex h-full max-w-5xl flex-row items-center justify-center ">
            <div className=" flex items-center justify-center rounded-2xl bg-logotip px-20 py-20">
              <div className="relative h-72 w-96">
                <Image alt="poza" fill src={imageSrc}></Image>
              </div>
              <div className="ml-12 flex flex-col items-start justify-center gap-2 text-2xl">
                <h1 className="rounded-lg bg-logotipOrange px-4 py-2">
                  {data.name}
                </h1>
                <p>ID: {designId}</p>
                <p>Pret: {data.pret} Lei</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
