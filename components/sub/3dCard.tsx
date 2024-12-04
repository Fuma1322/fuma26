"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeCard() {
  return (
    <CardContainer className="">
      <CardBody className="relative group/card border-black/[0.1] w-auto sm:w-[33rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/face.png"
            height="1000"
            width="1000"
            className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}