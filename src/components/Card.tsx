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
};

const Card = ({ data }: CardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(router.asPath + data.link)}
      key={data.id}
      className="group flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-logotipPurple shadow-lg transition-all"
    >
      <div className="relative h-full w-full border-b-2 border-logotipOrange transition-all group-hover:translate-y-12 group-hover:scale-150 group-active:translate-y-12 group-active:scale-150">
        <Image
          className="h-auto w-full object-cover object-center"
          src={data.image !== "" ? data.image : "/assets/placeholde.jpg"}
          alt="photo"
          fill
        ></Image>
      </div>
      <div className="py-8 text-center transition-all sm:py-6">
        <p className="mb-1 text-xl font-bold text-white">{data.name}</p>
      </div>
    </div>
  );
};

export default Card;
