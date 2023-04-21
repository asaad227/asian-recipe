import React, {useEffect, useState} from 'react'
import "./index.css"
import foods from "../../lib/data"
export default function CaloreCounter() {
    const [nameIn, setNameIn] = useState("");
    const [calories, ] = useState([...foods]);
 
    const [data, setData] = useState(() => {
        const storedList = localStorage.getItem("myCalories");
        return storedList ? JSON.parse(storedList) : [];
      });

      useEffect(() => { 
        localStorage.setItem("myCalories", JSON.stringify(data));   
      }, [data]);

    const handleCalories = () => {
       let item = []
        const list = [...calories];
        const result = list.filter((e) => e.name.toLowerCase().includes(nameIn.toLowerCase()));
        console.log(result);
        const caloriesData = {
            name:nameIn,
            calories:result[0].calories 

        };
        if(data.length === 0){
            item = [caloriesData]
        }else{
            item = [...data, caloriesData]
        }
     
        localStorage.setItem("myCalories", JSON.stringify(item));
        setData(item);
     
    }

  return (
    <div>
        <h1>Calorie Counter</h1>
        <input type="text" value={nameIn} onChange={(e) => setNameIn(e.target.value)} />
        <button onClick={handleCalories}>Search</button>
        <div>
            {data.map(((e,index)=>{
                return(<div className='caloriesCounter' key={index}>
                <h1>{e.name}</h1>
                <p>{e.calories}</p>
                </div>)
            }))}
        </div>
            </div>
  )
}