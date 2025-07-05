import { useState } from "react";


function FavoriteColor(){

    const [color,setColor] = useState('Blue')


    // let color='Blue';

    return (
    <div>
            <h1>My Favorite color is {color}</h1>
            <button onClick={()=> {setColor('Red');}}>Change color</button>
    </div>

    );

}

export default FavoriteColor;