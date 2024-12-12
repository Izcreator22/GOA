import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Books from './pages/Books';
import BooksNew from './pages/BooksNew';
import About from './pages/About';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
    const navlist = [
        {
            path: "/",
            name: "Home Page"
        },
        {
            path: "/books",
            name: "books"
        },
        {
            path: "/books/new",
            name: "books new"
        },
        {
            path: '/lomebi',
            name: 'lomebi layout'
        }
    ]
    return (
        <div>
            <ul>
                {navlist.map((item, index) => (
                    <li key={`_navlinks_${index}`}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <br/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/books' element={ <Books /> } />
                <Route path='/books/new' element={ <BooksNew /> } />

                <Route path='/lomebi' element={ <LomebiLayout /> } > {/* მშობელ Route-ში უნდა იყოს ჩაწერილი */}
                    {/* Outlet-ის გამოყენების გარეშე ვერ გამოჩნდება ეს ელემენტები*/}
                    <Route path='new' element={ <LomebiNew /> } />
                    <Route path='book' element={ <Books /> } />
                </Route>

                {/*
                სადაც დავწერთ : იქ ყველგან იგულისხმება id-ს მოქმედება
                */}
                <Route path='/about' element={ <About /> } />
                {/*
                ნიშნავს თუ ნებისმიერი ელემენტი არ დაემთხვა მითითებულ path-ში, მაშინ გამოგვიტანს 
                */}
                <Route path='/homepage' element={<HomePage />} />
                <Route path='*' element={ <NotFound /> } />
            </Routes>
            <br />
            <Footer />
        </div>
    )
}

