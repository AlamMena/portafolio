"use client";
import { text, title } from "@/components/primitives";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function ProfileCard() {
  return (
    <Card className="py-4 ">
      <CardBody className=" py-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-6 md:col-span-6 col-span-12 mx-auto">
            <Image
              alt="Card background"
              className="object-cover rounded-xl max-w-sm "
              src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              width={"100%"}
            />
          </div>
          <div className="lg:col-span-6 md:col-span-5 col-span-12 ">
            <small className="text-default-400 text-lg block font-medium">
              A web developer
            </small>
            <h1 className={title()}>David Henderson.</h1>
            <p className="text-default-500 mt-2 text-sm font-medium ">
              A fullstack developer formed in Dominican Republic
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
