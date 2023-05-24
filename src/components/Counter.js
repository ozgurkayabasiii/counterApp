import {useState,useEffect} from 'react'
export default function Counter() {

  // const [count,setCount]=useState(0);
  // const topla=()=>{
  //   setCount(1)
  // }
  // const cikar=()=>{
  //   setCount(count-1)
  // }
  const [number, setNumber] = useState(0);

  useEffect(() => {

    console.log("Number State Güncellendi");
  }, [number]);

 
  return (
    <div>
       <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Arttır
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
          
        }}
      >
        Azalt
      </button>
     
  {/* <h1>{count}</h1>
  <button onClick={topla}>+</button>    
  <button onClick={cikar}>-</button>     */}
    </div>
  )
}
