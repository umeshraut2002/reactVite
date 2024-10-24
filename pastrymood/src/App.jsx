import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className="text-gray-900 bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-yellow-500">
        <div className="text-3xl font-bold text-orange-600">CakeLogo</div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-orange-600">Home</a>
          <a href="#" className="text-white hover:text-orange-600">About</a>
          <a href="#" className="text-white hover:text-orange-600">Contact</a>
          <a href="#" className="text-white hover:text-orange-600">Blogs</a>
          <a href="#" className="text-white hover:text-orange-600">Videos</a>
          <a href="#" className="text-white hover:text-orange-600">Service</a>
          <a href="#" className="text-white hover:text-orange-600">Cart</a>
          <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700">Login</button>
          <button className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700">Signup</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-between px-8 py-16 bg-orange-100">
        <div className="w-1/2">
          <h1 className="text-4xl font-extrabold text-yellow-600">Delicious Cakes for Every Occasion</h1>
          <p className="mt-4 text-lg text-gray-700">
            Explore our variety of cakes, made with love and the finest ingredients. Perfect for birthdays, weddings, and every celebration in between.
          </p>
        </div>
        <div className="w-1/2">
          <img src="" />
        </div>
      </section>

      {/* Main Section with Cake Cards */}
      <section className="px-8 py-16 bg-white">
        <h2 className="mb-8 text-3xl font-bold text-center text-orange-600">Our Cakes</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Cake Card 1 */}
          <div className="p-6 bg-yellow-100 rounded-lg shadow-lg">
            <img src="https://images.pexels.com/photos/853005/pexels-photo-853005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cake 1" className="object-cover w-full h-48 mb-4 rounded-md" />
            <h3 className="text-xl font-bold text-orange-600">Chocolate Cake</h3>
            <p className="mt-2 text-gray-700">Flavor: Chocolate</p>
            <p className="mt-2 text-gray-700">Price: $25</p>
            <p className="mt-2 text-gray-500">Discount: 10%</p>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-orange-600">Buy Now</button>
              <button className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-orange-600">Add to Cart</button>
            </div>
          </div>
          {/* Repeat for more cakes */}
        </div>
      </section>

      {/* Customer Review Section */}
      <section className="px-8 py-16 bg-orange-100">
        <h2 className="mb-8 text-3xl font-bold text-center text-yellow-600">Customer Reviews</h2>
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="italic text-gray-700">"The cake was absolutely delicious! My guests couldn't stop raving about it!"</p>
            <p className="mt-2 font-bold text-orange-600">- Jane Doe</p>
          </div>
          {/* Add more reviews */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-yellow-500">
        <div className="container px-8 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="text-3xl font-bold text-orange-600">CakeLogo</div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-orange-600">Facebook</a>
              <a href="https://instagram.com" className="text-white hover:text-orange-600">Instagram</a>
              <a href="https://youtube.com" className="text-white hover:text-orange-600">YouTube</a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://images.pexels.com/photos/7867924/pexels-photo-7867924.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Big Cake" className="w-2/3 h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </footer>
    </div>
   </>
  )
}

export default App
