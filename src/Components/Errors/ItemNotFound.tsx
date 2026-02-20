import React from "react";
import { SearchX } from "lucide-react";
import Link from "next/link";

const ItemNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-slate-50 p-6 rounded-full mb-6">
        <SearchX className="w-16 h-16 text-slate-300" strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-2">
        No Products Found
      </h3>
      <p className="text-slate-500 max-w-xs mx-auto mb-8">
        We could not find any products matching your current filters or search
        criteria.
      </p>

      <Link
        href="/"
        className="mt-4 text-sm text-blue-600 font-medium hover:underline"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ItemNotFound;
