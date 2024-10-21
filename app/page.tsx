import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import shirts from "../image/hero_pic.png"
export default function Home() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <section>
        <div className="bg-[#65acdb] rounded-lg mt-4 grid grid-cols-1 md:grid-cols-2 mt-12 mx-4">
          <div className="p-8 md:p-20">
            <h1 className="text-2xl md:text-4xl text-[#0700a5] mt-4 font-bold">Welcome To my Shop</h1>
            <p className="text-sm md:text-base text-[#2e2d40] mt-4 md:mt-8">
              Discover the perfect blend of style and comfort with our exclusive collection of shirts.
              Whether you’re dressing up for a special occasion or looking for everyday essentials, we
              have something for everyone. Our shirts are crafted with the finest materials to ensure you
              look and feel your best.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs md:text-sm py-1 px-2 mt-6 md:mt-12 rounded">
              Explore Products
            </button>
          </div>

          <div className="flex justify-center items-center">
            <Image src={shirts} alt="shirt" className="h-32 md:h-40 w-auto my-10 md:my-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 md:mt-32 gap-4 px-4">
          <div className="bg-blue-300 border-4 border-black border-solid rounded-xl p-4">
            <h3 className="text-lg md:text-xl text-blue-900 font-bold mt-2">Free Home Delivery</h3>
            <p className="mt-2 md:mt-4 text-slate-950">Enjoy the convenience of shopping from home with our free home delivery service. No minimum purchase required!</p>
          </div>

          <div className="bg-blue-300 border-4 border-black border-solid rounded-xl p-4">
            <h3 className="text-lg md:text-xl text-blue-900 font-bold mt-2">Seasonal Discounts</h3>
            <p className="mt-2 md:mt-4 text-slate-950">Don’t miss out on our exclusive seasonal discounts! Shop your favorite items at unbeatable prices during our sales.</p>
          </div>

          <div className="bg-blue-300 border-4 border-black border-solid rounded-xl p-4">
            <h3 className="text-lg md:text-xl text-blue-900 font-bold mt-2">First-Time Buyer Discount</h3>
            <p className="mt-2 md:mt-4 text-slate-950">Welcome to our store! As a token of appreciation, we’re offering a special discount for first-time buyers.</p>
          </div>
        </div>


        <div>
          <h2 className="text-2xl font-bold text-gray-800 p-4 mt-24 underline">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <div className="border-4 border-blue-500 p-4 rounded-lg w-full">
              <h2 className="text-xl font-semibold mb-2">Classic Denim Jacket</h2>
              <p className="text-gray-700">A timeless piece, perfect for layering. Made with premium denim for a comfortable fit.</p>

            </div>
            <div className="border-4 border-blue-500 p-4 rounded-lg w-full">
              <h2 className="text-xl font-semibold mb-2">Casual White Shirt</h2>
              <p className="text-gray-700">Stay cool and stylish with this breathable cotton shirt. Ideal for any casual occasion.</p>
            </div>
            <div className="border-4 border-blue-500 p-4 rounded-lg w-full">
              <h2 className="text-xl font-semibold mb-2">Chino Pants</h2>
              <p className="text-gray-700">Versatile and comfortable, these chino pants are perfect for both casual and formal wear.</p>
            </div>
            <div className="border-4 border-blue-500 p-4 rounded-lg w-full">
              <h2 className="text-xl font-semibold mb-2">Graphic T-Shirt</h2>
              <p className="text-gray-700">Express your personality with our range of stylish graphic t-shirts. Made from soft, high-quality fabric.</p>
            </div>
            <div className="border-4 border-blue-500 p-4 rounded-lg w-full">
              <h2 className="text-xl font-semibold mb-2">Hooded Sweatshirt</h2>
              <p className="text-gray-700">Stay warm and cozy with this classic hoodie. Perfect for those chilly days and casual outings.</p>
            </div>
            <div className="border-4 border-blue-500 p-4 rounded-lg w-full">
              <h2 className="text-xl font-semibold mb-2">Slim Fit Jeans</h2>
              <p className="text-gray-700">A modern wardrobe staple, these slim fit jeans offer a sleek look and a comfortable feel.</p>
            </div>
          </div>
        </div>


      </section >

      <footer>
        <Footer></Footer>
      </footer>
    </div >
  );
}
