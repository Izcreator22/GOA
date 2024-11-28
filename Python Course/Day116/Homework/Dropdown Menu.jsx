import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"

function DropdownMenu() {

    const [isOpen, setIsOpen] = useState(false)
    const options = [
        { label: "Edit", action: () => alert("Edit clicked!") },
        { label: "Duplicate", action: () => alert("Duplicate clicked!") },
        { label: "Archive", action: () => alert("Archive clicked!") },
        { label: "Delete", action: () => alert("Delete clicked!") },
]

return (
    <div className="relative inline-block text-left">
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full rounded-md bg-gray-800 text-gray-200 px-4 py-2 text-sm font-medium shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Options <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-300" />
        </button>
        {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-md">
                <ul className="py-1">
                    {options.map((option) => (
                        <li key={option.label} className="cursor-pointer">
                            <a
                            onClick={() => {
                                setIsOpen(false)
                                option.action()
                                }}
                                className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                                >
                                    {option.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default DropdownMenu;