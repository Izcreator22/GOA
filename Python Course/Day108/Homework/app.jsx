// 1 My lil' Website
import React from "react"

const MyWebsite = () => {
    return (
        <div className="w-screen h-screen bg-blue-100 flex items-center jstify-center">
            <div className="w-80 bg-white p-5 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-grey-800">Welcome to my website</h1>
                <p className="mt-3 text-grey-600">
                    This is a free topic website, using Tailwind CSS for styling. Nada else.
                </p>
                <button className="mt-5 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                    Click Me
                </button>
            </div>
        </div>
    )
}

export default MyWebsite


// 2 Favorite Movie Website
import React from "react"

const FavoriteMovie = () => {
    return (
        <div className="w-screen h-screen bg-grey-900 text-red flex flex-col items-center justify-center p-5">
            <h1 className="text-4xl font-bold mb-4 text-center">My Favorite Movie: Schindler's List</h1>
            <p className="text-center max-w-md text-grey-300 mb-6">
                This is a website about my favorite movie. It is packed with action, drama, and a story that keeps you on the edge of your seat.
                Oscar Schindler, a successful and narcissistic German businessman, slowly starts worrying about the safety of his Jewish workforce after witnessing their persecution in Poland during World War II.
            </p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                Watch Trailer
            </button>
        </div>
    )
}

// export default FavoriteMovie


// 3
import React from "react"

const GuineaPigs = () => {
    return(
        <div className="w-screen h-screen bg-green-100 flex flex-col items-center justify-center p-5">
            <h1 className="text-3xl font-bold text-green-800 mb-4">About Guinea Pigs</h1>
            <p className="text-center max-w-md text-green-700 mb-6">
                The guinea pig or domestic guinea pig, also known as the cavy or domestic cavy, is a species of rodent belonging to the genus Cavia, family Caviidae. Breeders tend to use the name "cavy" for the animal, but "guinea pig" is more commonly used in scientific and laboratory contexts.
                Guinea pigs are adorable and gentle pets. They love to eat veggies, are very social, and enjoy exploring. 
            </p>
            <img src="https://placekitten.com/200/200" alt="Guinea Pig" className="w-32 h-32 rounded-full mb-6"/>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                Learn more...
            </button>
        </div>
    )
}

// export default GineaPigs


// 4
import React from "react"

const AppleCompany = () => {
    return(
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center p-5">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Apple Inc.</h1>
            <p className="text-center max-w-md text-gray-600 mb-6">
                Apple is a global technology company known for its innovative products, like the iPhone, Mac, and iPad. Explore their ecosystem. An American multinational technology company that revolutionized the technology sector through its innovation of computer software, personal computers, mobile tablets, smartphones, and computer peripherals.
                Famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of more than $3 trillion.
            </p>
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                Discover more...
            </button>
        </div>
    )
}

// export default AppleCompany
