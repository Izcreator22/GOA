import { useState } from "react"

function Tabs() {
    const [activeTab, setActiveTab] = useState("Recent")
    const tabs = ["Recent", "Popular", "Trending"]

    return (
        <div className="flex bg-gray-900 rounded-t-lg">
            {tabs.map((tab) => (
                <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-gray-200 border-b-2 ${
                    activeTab === tab ? "bg-gray-700 border-gray-400" : "hover:bg-gray-700 border-transparent"
                } cursor-pointer focus:outline-none w-full`}
            >
                {tab}
                </button>
            ))}
            <div className="px-4 py-2 bg-gray-800 text-gray-200">{activeTab} content</div>
        </div>
    )
}

export default Tabs;