import Image from 'next/image';
import Link from 'next/link';
import data from '../../../../public/data.json'
import { notFound } from 'next/navigation';
import { TProduct } from '@/Types/Product/Product';
import Container from '@/Components/Shared/Container';
import ItemNotFound from '@/Components/Errors/ItemNotFound';

export  default async function ProductDetails({ params }: {params: Promise<{ id: string }>}) {

    const {id} = await params
    const products: TProduct [] = data

    const product = products.find(p=> p.id === Number(id))
    console.log(product)
    if (!product) return <ItemNotFound/>;

  return (
    <div className="mt-20 min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <Container>
      <div className="">
      
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{product?.category}</span>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">{product?.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
   
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <Image
              src={product?.image}
              alt={product?.title}
              fill
              className="object-cover"
              priority
            />
          </div>


          <div className="flex flex-col">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              {product?.category}
            </span>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              {product?.title}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product?.rating) ? "text-yellow-400" : "text-slate-300"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">
                {product?.rating} Rating
              </span>
            </div>

            <div className="mt-6 border-t border-b border-slate-100 py-4">
              <p className="text-3xl font-bold text-slate-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {product?.description}
            </p>

       
            <div className="mt-8 flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${product?.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm font-medium text-slate-700">
                {product?.stock > 0 ? `In Stock (${product?.stock} units)` : 'Out of Stock'}
              </span>
            </div>


          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}