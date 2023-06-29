"use client";
import CredentialsCard from "@/components/credentials-card";
import NewsCard from "@/components/news-card";
import { text, title } from "@/components/primitives";
import ProfileCard from "@/components/profile-card";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Page() {
  return (
    <main className="grid grid-cols-12 gap-4">
      <div className="lg:col-span-6 col-span-12 row-span-2 ">
        <ProfileCard />
      </div>
      <div className="lg:col-span-6 col-span-12 grid grid-cols-2 gap-4 ">
        <div className="col-span-2">
          <NewsCard />
        </div>
        <CredentialsCard />
        <CredentialsCard />
      </div>
      <div className="lg:col-span-12 col-span-12 grid grid-cols-12 gap-4 row-span-2 ">
        <div className="col-span-3">
          <CredentialsCard />
        </div>
        <div className="col-span-6">
          <CredentialsCard />
        </div>
        <div className="col-span-3">
          <CredentialsCard />
        </div>
      </div>
    </main>
  );
}
