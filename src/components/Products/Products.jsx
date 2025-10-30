import React from 'react';
import { motion } from 'framer-motion';
import VanillaLatte from '../../assets/popular-coffee-1.png';
import CaramelMacchiato from '../../assets/popular-coffee-2.png';
import ColdBrew from '../../assets/popular-coffee-3.png';
import HazelnutCoffee from '../../assets/products-coffee-4.png';
import CookieFrappe from '../../assets/products-coffee-5.png';
import IcedAmericano from '../../assets/products-coffee-6.png';

const products = [
  {
    id: 1,
    name: "Vaniliás jeges latte",
    price: 1290,
    image: VanillaLatte
  },
  {
    id: 2,
    name: "Karamell macchiato",
    price: 1490,
    image: CaramelMacchiato
  },
  {
    id: 3,
    name: "Cold brew tejjel",
    price: 1190,
    image: ColdBrew
  },
  {
    id: 4,
    name: "Mogyorós jegeskávé",
    price: 1390,
    image: HazelnutCoffee
  },
  {
    id: 5,
    name: "Cookie frappe",
    price: 1590,
    image: CookieFrappe
  },
  {
    id: 6,
    name: "Jeges americano",
    price: 990,
    image: IcedAmericano
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Népszerű ízek
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Válogatott, ikonikus jegeskávé variációk – mindig tökéletes hőmérsékleten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-4">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {product.price} Ft
                  </p>
                  <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                    Kosárba
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;