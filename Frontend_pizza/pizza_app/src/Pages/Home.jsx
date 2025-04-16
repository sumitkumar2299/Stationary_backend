import React from "react";
import pizza from '../assets/Images/pizza.png'
import Layout from "../Layout/Layout";


export default function HomePage() {
    return (
      <Layout>
      <div className="min-h-[70vh] bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 p-6">
        
  
        <section className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
          <div className="max-w-lg">
            <h2 className="text-5xl font-bold text-red-700 mb-6 leading-tight">
              Delicious, Hot & Fresh<br /> Pizza Delivered Fast!
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Experience the taste of authentic Italian pizza, made with the freshest ingredients and a whole lot of love.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 px-6 rounded-2xl transition-all shadow-lg cursor-pointer">
              Order Now
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={pizza}
              alt="Pizza"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </section>
      </div>
      </Layout>
    );
  }
  

