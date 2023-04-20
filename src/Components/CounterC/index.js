import React, {useState} from 'react'
import foods from "../../lib/data"
export default function CaloreieCounter() {
    const [nameIn, setNameIn] = useState("");
    const [calories, ] = useState(foods);
    const [search, setSearch] = useState([]);

    const handleCalories = (e) => {
        const list = [...calories];
        const result = list.filter((e) => e.name.toLowerCase().includes(nameIn.toLowerCase()));
        setSearch(result);
       
    }

  return (
    <div>
        <h1>Calorie Counter</h1>
        <input type="text" value={nameIn} onChange={(e) => setNameIn(e.target.value)} />
        <button onClick={handleCalories}>Search</button>
        {search.map((e, index) => {
            return(
                <div key={index}>
                    <h3>{e.name}</h3>
                    <p>{e.calories}</p>
                </div>
            )
        }, )}
            </div>
  )
}
