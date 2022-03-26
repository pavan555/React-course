import React from "react"
import { Footer } from "./Footer"
import { Heading } from "./Header"
import { Note } from "./Note"

export const App = () => {
    return (
        <div>
            <Heading />
            <Note />
            <Footer />
        </div>
    )
}