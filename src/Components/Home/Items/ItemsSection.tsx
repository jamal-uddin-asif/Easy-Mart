"use client";
import Container from "@/Components/Shared/Container";
import React, { useEffect, useState } from "react";
import products from "../../../../public/data.json";
import ItemsCard from "./ItemsCard";

const ItemsSection = () => {
  const [data, setData] = useState(products);
  const [category, setCategory] = useState("All");

  const Items =
    category === "All"
      ? data
      : data.filter((product) => product.category === category);

  return (
    <div>
      <Container>
        <div className="bg-white md:flex justify-end gap-3 py-2 border border-slate-100 mb-5 shadow rounded-sm">
          <div className="">
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="bg-slate-50  border border-slate-200 rounded-xl px-4 py-2.5 outline-none text-slate-600 text-sm cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Accessories">Accessories</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>
          <div>
            <select
              name="category"
              className="bg-slate-50  border border-slate-200 rounded-xl px-4 py-2.5 outline-none text-slate-600 text-sm cursor-pointer"
            >
              <option value="Accessories">Accessories</option>
              <option value="Accessories">Accessories</option>
              <option value="Accessories">Accessories</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 p-2 md:p-0 lg:grid-cols-4 gap-5 ">
          {Items.map((product) => (
            <ItemsCard key={product?.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ItemsSection;
