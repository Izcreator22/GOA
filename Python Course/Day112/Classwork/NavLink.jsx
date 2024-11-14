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


