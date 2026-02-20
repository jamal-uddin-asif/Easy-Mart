import React from "react";
import { ShoppingBag, Star } from "lucide-react";
import Container from "./Container";

const Banner = () => {
  return (
    <Container>
      <div className="relative overflow-hidden bg-slate-900 rounded-3xl mb-12">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />

        <div className="relative px-8 py-12 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                New Collection 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Shop Smarter, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Live Better
              </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0">
              Discover our curated collection of premium gadgets, trendy
              apparel, and home essentials. Quality meets affordability at Easy
              Mart.
            </p>
          </div>

          <div className="flex-1 relative hidden lg:block">
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-slate-800 rounded-2xl w-full h-[350px] flex items-center justify-center relative overflow-hidden">
                <div className="text-white/20 font-black text-8xl select-none">
                  MART
                </div>
                <ShoppingBag className="absolute w-32 h-32 text-blue-500/30" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-2xl animate-bounce">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Star fill="currentColor" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">
                    Top Rated
                  </p>
                  <p className="text-sm font-black text-slate-900">
                    4.9/5 Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
