"use client"
import React from "react";
import Image from 'next/image'

const Card = ({img,name,mrp,isSmall,isLarge}) => {
  return (
    <div>
      <Image src={img} width={isSmall?400:isLarge?400:200} height={isSmall?400:isLarge?400:200} className="cursor-pointer" alt={img} />
      <h2>{name}</h2>
      <p>MRP: Rs.{mrp}</p>
    </div>
  );
};

export default Card;
