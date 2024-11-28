import { useState, useRef, useEffect } from "react"

function Popover() {
    const [isOpen, setIsOpen] = useState(false)
    const popoverRef = useRef(null)
    const timeoutRef = useRef(null)

    useEffect(() => {

        const handleMouseLeave = () => {
            timeoutRef.current = setTimeout(() => setIsOpen(false), 250)
    }

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current)
        setIsOpen(true)
    }

    const popoverElement = popoverRef.current
    if (popoverElement) {
        popoverElement.addEventListener("mouseleave", handleMouseLeave)
        popoverElement.addEventListener("mouseenter", handleMouseEnter)
    }
    return () => {
        if (popoverElement) {
            popoverElement.removeEventListener("mouseleave", handleMouseLeave)
            popoverElement.removeEventListener("mouseenter", handleMouseEnter)
      }
      clearTimeout(timeoutRef.current)
    }
}, [])

return (
    <div className="relative inline-block" ref={popoverRef}>
        <button className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-700">Solutions</button>
        {isOpen && (
            <div className="absolute mt-2 bg-gray-800 p-2 rounded-md shadow-lg text-gray-200 transition-opacity duration-150 opacity-100">
                <h3>Solutions</h3>
                <ul>
                      <li><a href="#">Insights</a></li>
                      <li><a href="#">Automations</a></li>
                      <li><a href="#">Reports</a></li>
                      <li><a href="#">Documentation</a></li>
                </ul>
            </div>
        )}
    </div>
  )
}

export default Popover;