import Image from 'next/image';
import Link from 'next/link';
interface TProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  stock: number;
}

export default function ItemsCard({ product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Image Container */}
      <div className="relative h-45 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 ">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm text-slate-500 font-medium">Stock: {product.stock}</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-bold text-slate-700">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
          {product.title}
        </h3>
        
        <p className="mt-1 text-sm text-slate-600 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          <Link href={`/product/${product?.id}`} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-900 active:scale-95">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}