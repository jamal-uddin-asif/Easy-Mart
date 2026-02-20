import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard 
} from 'lucide-react';
import Container from './Container';

const Footer = () => {

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
        
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-black text-white flex items-center gap-2">
              <span className="bg-blue-600 p-1.5 rounded-lg">🛒</span>
              Easy Mart
            </Link>
            <p className="text-sm leading-relaxed">
              Your one-stop destination for the latest gadgets, trendy fashion, and premium home essentials. Quality guaranteed.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-blue-400 transition-colors"><Youtube size={20} /></Link>
            </div>
          </div>

   
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shop All Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Latest Collections</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Flash Sales</Link></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-white font-bold mb-6">Customer Service</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Return & Refunds</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
       
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Chattogram,Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>01610990018</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>jamaluddin.dev@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

  
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
            
      
            <div className="flex items-center gap-4 text-slate-500">
              <span className="text-[10px] uppercase font-bold tracking-widest">Accepted Payments</span>
              <div className="flex gap-2">
                <div className="bg-slate-800 p-1.5 rounded border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer">
                  <CreditCard size={16} />
                </div>
 
                <div className="bg-slate-800 px-2 py-1.5 rounded border border-slate-700 text-[10px] font-bold">VISA</div>
                <div className="bg-slate-800 px-2 py-1.5 rounded border border-slate-700 text-[10px] font-bold">BKASH</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;