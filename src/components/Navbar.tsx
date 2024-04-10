import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import logo from "../../public/logo.svg";

const variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

function capitalize(word: string | undefined) {
  if (word === undefined) return;
  return word[0]?.toUpperCase() + word.slice(1);
}

export default function Navbar() {
  const router = useRouter();
  const words = router.asPath
    .split("/")
    [router.asPath.split("/").length - 1]?.split("-")
    .map((word) => capitalize(word));
  let pageTitle = words?.join(" ");

  if (pageTitle === "No Subcategory") {
    pageTitle = capitalize(router.asPath.split("/")[1]);
  }

  const backButtonHandler = () => {
    console.log(router.asPath.split("/"));
    if (
      router.asPath.split("/")[router.asPath.split("/").length - 1] ===
      "no-subcategory"
    ) {
      void router.push("/");
    } else {
      void router.back();
    }
  };

  return (
    <div className="fixed flex h-16 w-full items-center justify-between border-b-2 border-logotipOrange bg-logotip bg-cover bg-right-bottom bg-no-repeat text-slate-200">
      <div className="flex h-12 w-40 items-center justify-center">
        {router.pathname !== "/" && (
          <motion.button
            variants={variants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative h-10 w-14 rounded-lg bg-logotipOrange px-3 py-2"
            onClick={backButtonHandler}
          >
            <Image className="px-2" src="/back.svg" alt="Back" fill></Image>
          </motion.button>
        )}
      </div>
      <div className="relative h-12 w-40">
        <Image src={logo as StaticImageData} alt="Logo" fill />
      </div>
      <div className="flex h-12 w-40 items-center justify-center text-center font-medium">
        {router.pathname === "/" ? "Pagina Principala" : pageTitle}
      </div>
    </div>
  );
}
