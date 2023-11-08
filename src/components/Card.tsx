import { motion } from "framer-motion";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

type CardProps = {
  data: {
    id: number;
    name: string;
    image: string;
    link: string;
  };
  variants: {
    hidden: { opacity: number };
    show: {
      opacity: number;
    };
  };
};

const Card = ({ data, variants }: CardProps) => {
  const router = useRouter();
  return (
    <motion.div
      variants={variants}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.push(router.asPath + data.link)}
      key={data.id}
      className=" group flex h-96 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-logotip bg-cover bg-right-bottom bg-no-repeat text-slate-200 shadow-lg transition-all"
    >
      <div className="relative h-full w-full border-b-2 border-logotipOrange transition-all">
        <Image
          className="h-auto w-full object-cover object-center"
          src={data.image !== "" ? data.image : "/assets/placeholde.jpg"}
          alt="photo"
          fill
        ></Image>
      </div>
      <div className="py-8 text-center transition-all sm:py-6">
        <p className="mb-1 text-xl font-bold text-slate-200">{data.name}</p>
      </div>
    </motion.div>
  );
};

export default Card;
