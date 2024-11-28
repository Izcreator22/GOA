export default function Header() {
    const navList = [
        { name: "Home", href: "/" },
        { name: "Contacts", href: "/contacts" },
        { name: "About", href: "/about" },
        { name: "FAQS", href: "/faqs" },
    ]
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-slate-300 relative py-2 sm:py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h2 className="text-2xl font-bold">GOA</h2>
                <button
                onClick={handleMenuClick}
                className="text-2xl sm:hidden focus:outline-none">
                {isMenuOpen ? (
                    <AiOutlineMenuFold className="transition-transform duration-300" />
                ) : (
                    <AiOutlineMenuUnfold className="transition-transform duration-300" />
                )}
                </button>
                <ul className={`sm:flex sm:space-x-4 hidden ${isMenuOpen ? "flex" : "hidden"} flex-col sm:flex-row  bg-slate-100 p-4 rounded-md sm:bg-transparent sm:p-0 absolute top-full right-0 w-full sm:w-auto shadow-md transition-transform duration-300`}>
                    {navList.map((item) => (
                        <li key={item.name} className="text-lg sm:text-xl">
                            <a href={item.href} className="block py-2 px-4 hover:bg-gray-200 rounded-md transition-colors duration-150">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

