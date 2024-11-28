import { useState } from "react"
import { XIcon } from "@heroicons/react/solid"

function Dialog() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div
        className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
        >
            <div className="bg-gray-800 rounded-lg shadow-xl p-4 relative w-96">
                <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-200 hover:text-gray-400 focus:outline-none"
                >
                    <XIcon className="h-6 w-6" />
                </button>
                <h3 className="text-lg font-bold mb-2 text-gray-200">Payment successful</h3>
                <p className="text-gray-200">
                    We've sent you an email with all of the details of your order.
                    </p>
                    <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-gray-700 hover:bg-gray-600 text-gray-100 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Got it, thanks!
                </button>
            </div>
        </div>
    )
}

export default Dialog;