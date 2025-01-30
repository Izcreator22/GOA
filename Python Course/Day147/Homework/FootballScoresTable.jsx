import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const FootballScores = () => {
  const [isDark, setIsDark] = useState(true);
    const [colorMode, setColorMode] = useState("blue")
    const [showNav, setShowNav] = useState(false)
  const handleDarkMode = () => {
    setIsDark(!isDark)
      document.documentElement.classList.toggle("dark")

}
const handleColorMode = (color) =>{
    setColorMode(color);
}
const teams = [
    { name: 'Team 1', score: 3 },
    { name: 'Team 2', score: 1 },
    { name: 'Team 3', score: 2 },
    { name: 'Team 4', score: 4 },
    { name: 'Team 5', score: 0 },
    { name: 'Team 6', score: 1 },
];

return (
    <div className={`min-h-screen ${colorMode === "blue" ? "bg-blue-100 dark:bg-blue-900" : "bg-green-100 dark:bg-green-900"} text-gray-800 dark:text-gray-200 font-sans`}>
        <header className="bg-blue-500 dark:bg-gray-700 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-2xl font-bold text-white">Score Table</span>
                <button onClick={()=>setShowNav(!showNav)} className="md:hidden text-white text-2xl">
                    ☰
                </button>
                <nav className={` ${showNav ? "flex flex-col items-center mt-4 md:mt-0 md:flex md:flex-row md:items-center md:space-x-6" : "hidden md:flex md:flex-row md:items-center md:space-x-6"}`}>
                  <div className="flex items-center">
                    <button onClick={() => handleColorMode("blue")} className={`py-2 px-4 rounded-md text-white ${colorMode == "blue" ? "bg-blue-700" : "bg-blue-500"}`}>Blue</button>
                      <button onClick={() => handleColorMode("green")} className={`ml-2 py-2 px-4 rounded-md text-white ${colorMode == "green" ? "bg-green-700" : "bg-green-500"}`}>Green</button>
                  </div>
                    <div onClick={() => handleDarkMode()} className="cursor-pointer relative ml-2">
                        <Moon size={30} color='white' className="top-0 right-0 absolute hidden dark:block" />
                        <Sun size={30} className="dark:hidden" />
                    </div>
                </nav>
            </div>
        </header>
      <main className="container mx-auto py-8">
        <table className="w-full shadow-md rounded-lg bg-white dark:bg-gray-700">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="py-2 text-left px-4">Team</th>
              <th className="py-2 text-left px-4">Score</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className={`border-b border-gray-300 dark:border-gray-600 ${index % 2 == 0 ? 'bg-gray-100 dark:bg-grey-600' : '' }`}>
                <td className="py-2 px-4">{team.name}</td>
                <td className="py-2 px-4">{team.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
        <footer className="bg-gray-200 dark:bg-gray-900 py-4 text-center text-gray-800 dark:text-gray-300">
            <p>© {new Date().getFullYear()} Scoreboard</p>
        </footer>
    </div>
  );
};

export default FootballScores;
