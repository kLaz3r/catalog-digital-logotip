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

const CardsGrid = ({ data }: CardsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((element) => <Card key={element.id} data={element}></Card>)}
    </div>
  );
};

export default CardsGrid;
