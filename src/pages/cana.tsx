import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "~/components/Layout";

const categories = [
  {
    id: 1,
    name: "Cana Tudor",
    image: "/assets/cana-tudor.jpg",
  },
  {
    id: 2,
    name: "Cana Profesor",
    image: "/assets/cana-profesor.jpg",
  },
  {
    id: 3,
    name: "Cana Craciun",
    image: "/assets/cana-craciun.jpg",
  },
];

export default function Cana() {
  return (
    <>
      <Head>
        <title>Canvas | Logotip</title>
        <meta name="description" content="Internal product catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-logotipPurple shadow-lg transition-all"
              >
                <div className="relative h-full w-full border-b-2 border-logotipOrange transition-all group-hover:translate-y-12 group-hover:scale-150 group-active:translate-y-12 group-active:scale-150">
                  <Image
                    className="h-auto w-full object-cover object-center"
                    src={category.image}
                    alt="photo"
                    fill
                  ></Image>
                </div>
                <div className="py-8 text-center transition-all sm:py-6">
                  <p className="mb-1 text-2xl font-bold text-white">
                    {category.name}
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
