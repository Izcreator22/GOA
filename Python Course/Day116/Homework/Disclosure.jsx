import { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/solid"

function Disclosure() {
    const [isOpen, setIsOpen] = useState(false)

return (
    <details className="border border-gray-700 rounded-md shadow-md bg-gray-800">
        <summary className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-200 cursor-pointer focus:outline-none">
            What is your refund policy?
            {isOpen ? <MinusIcon className="h-5 w-5 mr-2" /> : <PlusIcon className="h-5 w-5 mr-2" />}
        </summary>
        <div className="bg-gray-900 text-gray-200 p-4">
            If you're unhappy with your purchase, we'll refund you in full.
            <div className="mt-2">Do you offer technical support?</div>
        </div>
    </details>
  )
}

export default Disclosure;