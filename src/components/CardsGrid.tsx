import { motion } from "framer-motion";
import React from "react";
import Card from "~/components/Card";

type CardsGridProps = {
  data:
    | {
        id: number;
        name: string;
        image: string;
        link: string;
        designs: {
          id: number;
          name: string;
          image: string;
          link: string;
        }[];
      }[]
    | {
        id: number;
        name: string;
        image: string;
        link: string;
      }[];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

const CardsGrid = ({ data }: CardsGridProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        ease: "easeInOut",
        duration: 0.7,
      }}
      className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
    >
      {data?.map((element) => (
        <Card variants={item} key={element.id} data={element}></Card>
      ))}
    </motion.div>
  );
};

export default CardsGrid;
