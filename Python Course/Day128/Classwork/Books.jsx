import React from "react";
import { useParams } from "react-router-dom";

export default function BooksId() {
    const { id }= useParams()
    const arrayOfapple = ["panta", "goruli", "golden", "kitra"]
    return (
        <div>
            <h1>BooksId {arrayOfapple[id]} {id}</h1>
        </div>
    )
}

