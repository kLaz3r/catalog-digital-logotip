import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import produse from "../../data";

export default function Category() {
  const router = useRouter();
  const filtered = produse.filter(
    (category) => category.link === router.asPath,
  );
  const subcategories = filtered[0]?.subcategories;
  return (
    <>
      <Head>
        <title>Categorii | Logotip</title>
        <meta name="description" content="Internal product catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {subcategories?.map((subcategory) => (
              <div
                onClick={() => router.push(router.asPath + subcategory.link)}
                key={subcategory.id}
                className="group flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-logotipPurple shadow-lg transition-all"
              >
                <div className="relative h-full w-full border-b-2 border-logotipOrange transition-all group-hover:translate-y-12 group-hover:scale-150 group-active:translate-y-12 group-active:scale-150">
                  <Image
                    className="h-auto w-full object-cover object-center"
                    src={
                      subcategory.image !== ""
                        ? subcategory.image
                        : "/assets/placeholde.jpg"
                    }
                    alt="photo"
                    fill
                  ></Image>
                </div>
                <div className="py-8 text-center transition-all sm:py-6">
                  <p className="mb-1 text-xl font-bold text-white">
                    {subcategory.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
