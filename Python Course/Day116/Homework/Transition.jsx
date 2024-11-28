import React from "react"

function Transition() {
    return (
        <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300 animate-transition"></div>
            <div className="w-6 h-6 rounded-full bg-gray-300 animate-transition animate-delay-150"></div>
            <div className="w-6 h-6 rounded-full bg-gray-300 animate-transition animate-delay-300"></div>
        </div>
    )
}

export default Transition;