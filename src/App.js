import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

function App() {
  // const [name, setName] = useState("Özgür");
  // const [age, setAge] = useState(26);
  // const [friends, setFriends] = useState(["Caner", "Efe"]);
  // const [adress,setAdress]=useState({title:'Bursa',zip:16000})
  // const [number, setNumber] = useState(0);
  // const [name, setName] = useState("Caner");

  // useEffect(() => {
  //   console.log("Number State Güncellendi");
  // }, [number]);
  // useEffect(() => {
  //   console.log(" Name State Güncellendi");
  // }, [name]);
  // useEffect(() => {
  //   console.log("Component Mount Edildi");
  // }, []);
  const [isVisible,setIsVisible]=useState(true)
  const [button,setButton]=useState("Görünmez Yap")
  return (
    <div className="App">
      {isVisible && <Counter/>}<hr></hr>
      <button onClick={()=>{
        setIsVisible(!isVisible)
        isVisible ? setButton("Görünür Yap"):setButton("Görünmez Yap")
      }
        }>{button}</button>
      {/* <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Arttır
      </button>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName("Özgür");
        }}
      >
        Değiştir
      </button>
      <button
        onClick={() => {
          setName("Furkan");
        }}
      >
        Değiştir
      </button> */}

      
          {/* <InputExample/><hr></hr> */} 
      {/* // <h1>
      //   S ve A {name} {age}
      // </h1>
      // <button
      //   onClick={() => {
      //     setName("Furkan");
      //   }}
      // >
      //   İsim
      // </button>
      // <button
      //   onClick={() => {
      //     setAge(28);
      //   }}
      // >
      //   Yaş
      // </button>{" "}
      // <hr></hr>
      // <h2>Friends</h2>
      // {friends.map((friend, index) => {
      //   return <div key={index}><h3>{friend}</h3></div>;
      // })}
      // <button
      //   onClick={() => {
      //     setFriends([...friends,'Elif']);
      //   }}
      // >
      //   Arkadaş Ekle
      // </button>
      // <hr></hr>
      // <h2>Adress</h2>
      // <h3>{adress.title} {adress.zip}</h3>
      // <button
      //   onClick={() => {
      //     setAdress({...adress,title:'Kocaeli',zip:41100});
      //   }}
      // >
      //   Adress değiştir
      // </button> */}
    </div>
  );
}

export default App;
