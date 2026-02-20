"use client";
import Container from "@/Components/Shared/Container";
import React, { useMemo, useState } from "react";
import products from "../../../../public/data.json";
import ItemsCard from "./ItemsCard";

const ItemsSection = () => {
  const [category, setCategory] = useState("All");
  const [sortPrice, setSrotPrice] = useState('');

  const filteredAndSortedData = useMemo(() => {
    
    const result = category === "All" 
    ? [...products] 
    : products.filter((p) => p.category === category);
    
    
    if (sortPrice === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

 
      return result;

  }, [category, sortPrice]);
  

  return (
    <div>
      <Container>
        <div className="bg-white flex flex-col-reverse  sm:flex-row justify-end gap-3 py-3 border border-slate-100 mb-5 shadow rounded-2xl px-6">
          <div className="">
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="bg-slate-50  font-bold border border-slate-200 rounded-xl px-4 py-2.5 outline-none text-slate-600 text-sm cursor-pointer"
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
            onChange={(e)=>setSrotPrice(e.target.value)}
              name="price"
              className="bg-slate-50 font-bold border border-slate-200 rounded-xl px-4 py-2.5 outline-none text-slate-600 text-sm cursor-pointer"
            >
              <option value="asc">Price Asc</option>
              <option value="desc">Price Desc</option>
            </select>
          </div>
        </div>
        <div className=" grid my-8 grid-cols-1 md:grid-cols-3 p-2 md:p-0 lg:grid-cols-4 gap-5 ">
          {filteredAndSortedData.map((product) => (
            <ItemsCard key={product?.id} product={product} />
          ))}
        </div>

         
      </Container>
    </div>
  );
};

export default ItemsSection;
