import React from 'react';

// copyright message in a <p> with a dynamically updated year.
const date = new Date();
const currYear = date.getFullYear();

export const Footer = () => {
    return (
        <footer><p>Copyright © {currYear} </p></footer>
    );
}