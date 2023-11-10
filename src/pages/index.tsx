import Head from "next/head";
import CardsGrid from "~/components/CardsGrid";
import Layout from "~/components/Layout";
import produse from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Logotip</title>
        <meta name="description" content="Internal product catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto px-4 pt-16">
          <CardsGrid data={produse}></CardsGrid>
        </div>
      </Layout>
    </>
  );
}
