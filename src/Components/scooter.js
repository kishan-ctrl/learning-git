import { useState } from "react";

function scooter(){


    const [ color,setColor]= useState("Red");
    const [ brand,setBrand]= useState("TVS");
    const [ model,setModel]= useState("11485");
    const [ year,setYear]= useState("2024");



    return(
    <div>
    <h1>My </h1>
    <p>Color: Red</p>
    <p>Brand: Honda</p>
    <p>Model: 11212</p>
    <p>year: 2025</p>
    
    </div>

);
}

export default scooter;