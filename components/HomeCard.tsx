"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className?: string;
}

const HomeCard = ({
  img,
  title,
  description,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        "bg-orange-1 px-4 py-6 flex flex-col justify-between w-full 2xl:max-w-[400px] min-h-[260px] rounded-[14px] cursor-pointer hover:scale-102 transition-all duration-300",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism rounded-[10px] size-12 rounded-[10px]">
        <Image src={img} width={27} height={27} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
