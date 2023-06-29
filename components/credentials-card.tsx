"use client";
import { text, title } from "@/components/primitives";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CredentialsCard() {
  return (
    <Card className="py-4 rounded-2xl" radius="3xl">
      <CardBody className=" py-2">
        <div className="grid grid-cols-12 gap-y-4">
          <div className="col-span-12 mx-auto">
            <Image
              alt="Card background"
              className="object-cover rounded-xl mx-auto"
              src="https://cdn-icons-png.flaticon.com/128/5024/5024561.png"
              width={"100%"}
            />
          </div>
          <div className="col-span-12">
            <small className="text-default-500 text-sm block font-medium">
              More about me
            </small>
            <p className="text-default-900 text-xl ">Credentials</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
