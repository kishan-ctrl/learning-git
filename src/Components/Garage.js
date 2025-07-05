import Car from "./Car";
import Bike from "./Bike";
import Apple from "./Apple";

function Garage(){
    // const brand ="Ford";
    // const color= "Red";
    
    const carInfo={ brand:"ferrari",color:"black"}

    // const carInfo={};

    const isDoorOpened=true ;
    const appleInfo= { type:"fuji",color:"Red" };
    const showCarInfo = carInfo.brand  !==undefined && carInfo.color !==undefined

    const carList=[ 
        {brand:"BMW",color:"red"},
        {brand:"ford",color:"Black"},
        {brand:"Audi",color:"Blue"}
    ]

    const numList=[
        1,2,3,4,5,6
    ];


  return( 

    <div>    
      <h1>Who live inside my Garage</h1>
      {/* <Car brand1={brand} color={color} /> */}

      { showCarInfo ?
      
       <Car carInfo={carInfo}/> : null
    }

      <Bike/>
      <Apple appleInfo={appleInfo}/>

      { isDoorOpened ? <h2>Garage Door is open</h2> : <h2>Garage door is closed</h2>}

      <ul>
        {carList.map( (carInfo) => <li key={carInfo.brand}><Car carInfo={carInfo}/></li> ) }
      </ul>
      <ul>
        {numList.map((e,index)=> <p key={index} >{e}</p>)}
      </ul>

 
    </div>


  );

}
export default Garage;