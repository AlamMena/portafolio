"use client";
import { text, title } from "@/components/primitives";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const works = [
  "POS",
  "E-COMMERCE",
  "BANKING",
  "MONEY-TRANSFER",
  //   "HUMAN RESOURCE",
  "VISA INTEGRATION",
  "BLOCK-CHAIN",
];
export default function NewsCard() {
  return (
    <Card>
      <CardBody>
        <div className="flex justify-center">
          {works.map((item) => {
            return (
              <p className="block lowercase text-sm" key={item}>
                {item} 🌏
              </p>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}
