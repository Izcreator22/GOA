import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const MyAuto = () => {
  const [isDark, setIsDark] = useState(true);
  const [showNav, setShowNav] = useState(false);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
};

return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white font-sans">
        <header className="bg-blue-500 dark:bg-gray-700 py-4">
            <div className="container mx-auto flex justify-between items-center">
            <span className="text-2xl font-bold text-white">Myauto</span>

            <button onClick={()=>setShowNav(!showNav)} className="md:hidden text-white text-2xl">
                ☰
            </button>
                <nav className={` ${showNav ? "flex flex-col items-center mt-4 md:mt-0 md:flex md:flex-row md:items-center md:space-x-6" : "hidden md:flex md:flex-row md:items-center md:space-x-6"}`}>
                    <a href="#" className="block  py-2 text-white hover:text-gray-200 dark:hover:text-gray-400">Home</a>
                    <a href="#" className="block  py-2 text-white hover:text-gray-200 dark:hover:text-gray-400">Cars</a>
                    <a href="#" className="block  py-2 text-white hover:text-gray-200 dark:hover:text-gray-400">Services</a>
                    <a href="#" className="block  py-2 text-white hover:text-gray-200 dark:hover:text-gray-400">Contact</a>
                    <div onClick={() => handleDarkMode()} className="cursor-pointer relative">
                      <Moon size={30} color='white' className="top-0 right-0 absolute hidden dark:block" />
                      <Sun size={30} className="dark:hidden" />
                    </div>
                </nav>
            </div>
        </header>

      <main className="container mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Featured Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Car 1" className="w-full mb-4" />
              <h3 className="text-xl font-semibold">Car Model 1</h3>
              <p className="text-gray-600 dark:text-gray-200">...</p>
            </div>
            <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Car 2" className="w-full mb-4" />
              <h3 className="text-xl font-semibold">Car Model 2</h3>
              <p className="text-gray-600 dark:text-gray-200">...</p>
            </div>
              <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-4">
                  <img src="https://via.placeholder.com/300x200" alt="Car 3" className="w-full mb-4" />
                  <h3 className="text-xl font-semibold">Car Model 3</h3>
                  <p className="text-gray-600 dark:text-gray-200">...</p>
              </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-semibold mb-2">Service 1</h3>
                    <p className="text-gray-600 dark:text-gray-200">...</p>
                </div>
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-semibold mb-2">Service 2</h3>
                    <p className="text-gray-600 dark:text-gray-200">...</p>
                </div>
            </div>
        </section>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-900 py-4 text-center text-gray-800 dark:text-gray-300">
        <p>© {new Date().getFullYear()} MyAuto</p>
      </footer>
  </div>
);
};

export default MyAuto;

