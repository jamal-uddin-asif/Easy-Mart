"use client";
import Container from "@/Components/Shared/Container";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import products from "../../../../public/data.json";
import ItemsCard from "./ItemsCard";
import { TProduct } from "@/Types/Product/Product";

const ItemsSection = () => {
  const [category, setCategory] = useState("All");
  const [sortPrice, setSrotPrice] = useState('');
    const [currentpage, setCurrentPage] = useState(0)

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
  
  
  const [data, setData] = useState(filteredAndSortedData)
  



  return (
    <div>
      <Container>
        <div className="bg-white md:flex justify-end gap-3 py-2 border border-slate-100 mb-5 shadow rounded-2xl px-6">
          <div className="">
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="bg-slate-50 font-bold border border-slate-200 rounded-xl px-4 py-2.5 outline-none text-slate-600 text-sm cursor-pointer"
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
        <div className=" grid grid-cols-1 md:grid-cols-3 p-2 md:p-0 lg:grid-cols-4 gap-5 ">
          {data.map((product) => (
            <ItemsCard key={product?.id} product={product} />
          ))}
        </div>

          <div className="flex flex-wrap gap-3 my-10 justify-center">
            {
              [...Array(2).keys()].map((i)=> <button onClick={()=>setCurrentPage(i)} key={i} className="bg-red-600 hover:bg-red-900 px-3 py-1 rounded-sm text-white">{i+1}</button>)
            }
          </div>
      </Container>
    </div>
  );
};

export default ItemsSection;
