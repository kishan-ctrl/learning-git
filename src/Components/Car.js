



function Car(props){

    // const { brand1,color }=props;

    const { carInfo }= props;  /*destructuring*/
    const { brand,color }=carInfo;

   const text=`I am the ${brand} ${color} car`;

  return(

    <h2>{text}</h2>
  );
}



export default Car;