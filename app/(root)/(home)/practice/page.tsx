'use client';
import React from "react";
import Practice from "@/components/Practice";

const page = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Practice Interview Questions</h1>
      <Practice />
    </section>
  );
};

export default page;
