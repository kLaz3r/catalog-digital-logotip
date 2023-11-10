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

const paginate = (
  array:
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
      }[],
  pageSize: number,
  pageNumber: number,
) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

const CardsGrid = ({ data }: CardsGridProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const getMaxPage = () => {
    return Math.ceil(data.length / 6);
  };
  const maxPage = getMaxPage();
  const minPage = 1;
  const pagesArray = [];
  for (let i = minPage; i <= maxPage; i++) {
    pagesArray.push(i);
  }

  const shownData = paginate(data, 6, currentPage);

  return (
    <>
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
        className="grid grid-cols-1 grid-rows-2 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {shownData?.map((element) => (
          <Card variants={item} key={element.id} data={element}></Card>
        ))}
      </motion.div>
      <div className="flex w-full items-center justify-center text-logotipPurple">
        <div className="flex gap-3">
          {pagesArray.length !== 1
            ? pagesArray.map((element) => {
                const dynamicStyles =
                  element === currentPage
                    ? "bg-logotipOrange scale-125"
                    : "bg-logotipPurple";
                return (
                  <motion.span
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className={`${dynamicStyles} rounded-lg px-4 py-2 text-xl font-bold text-slate-200 transition-all`}
                    key={element}
                    onClick={() => {
                      setCurrentPage(element);
                    }}
                  >
                    {element}
                  </motion.span>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default CardsGrid;
