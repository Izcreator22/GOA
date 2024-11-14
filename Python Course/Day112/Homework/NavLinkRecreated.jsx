import React from "react"
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa";
import { useState } from "react";

export default function NavLinks() {
  const navLink = [
    {
      lit: "about",
    },
    {
      lit: "contacts",
    },
    {
      lit: "service",
    },
    {
      lit: "FAQs",
    },
  ]
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="bg-black text-white">
      <nav>
        <div className="container flex justify-between">
          <a href="#" className="lg:text-2xl text-xl">
            <FaBars onClick={handleClick} className="cursor-pointer" />
            <FaBarsStaggered
              onClick={handleClick}
              className={click ? "hidden" : ""}
            />
          </a>
          <div className={click ? "hidden" : "true"} />
          <div className="desktop">
            <ul className="sap flex item gap-2 lg:text-2xl text-xl">
              {navLink.map((item, index) => (
                <li key={navLink.index}>
                  <a href={item.lit} className="hover:text-white/60">
                    {item.lit}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* desktop */}
          <div className="relative">
            <ul
              className={click ? "translate-x-0" : "translate-x-[500px] sm:hidden flex gap-2 lg:text-2xl text-xl absolute top-0 right-0 text-black bg-col bg-slate-200 p-2"}>
              {navLink.map((item, index) => (
                <li key={navLink.index} className="hover:text-black/50">
                  <a href={item.lit}>{item.lit}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

// Header component
function Header() {
  return (
    <header className="bg-grey-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <navLinks />
      </div>
    </header>
  )
}

// Hero section
function Hero() {
  return (
    <section className="bg-grey-400 text-white py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to my website</h2>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </div>
    </section>
  )
}

function App() {
  return (
    <div>
      <header />
      <hero />
    </div>
  )
}

// export default App;