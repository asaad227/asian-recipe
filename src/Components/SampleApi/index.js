import React, { useState, useEffect } from 'react';

function GetApi() {
  const [foodData, setFoodData] = useState(null);
  const [foodItem, setFoodItem] = useState('');
  const [totaCalories, setTotalCalories]=useState(0)
  const [foodCalories, setFoodCalories] = useState(() => {
    const storedList = localStorage.getItem("foodList");
    return storedList ? JSON.parse(storedList) : [];
  });
  
  const apiKey = process.env.REACT_APP_API_KEY2;

 useEffect(() => {
    localStorage.setItem("foodList", JSON.stringify(foodCalories))
    }, [foodCalories])

  useEffect(() => {
    const item = foodItem.toUpperCase()
    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${item}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFoodData(data);
      })
      .catch(error => {
        console.error(error);
      });
 
  }, [apiKey, foodItem]);

  function handleSubmit() {
    let item = []
    const caloriesData = {
        name:foodData.foods[0].description,
        calories:foodData.foods[0].foodNutrients[1].value 

    };
    if(foodCalories.length === 0){
        item = [caloriesData]
    }else{
        item = [...foodCalories, caloriesData]
    }
    localStorage.setItem('foodList', JSON.stringify(item));
    setFoodCalories(item);
    setFoodItem('');
  }

  useEffect(() => {   
    const total = foodCalories.reduce((acc, e) => acc + e.calories, 0);
    setTotalCalories(total);
    }, [foodCalories]);

  return (
    <div>
    <input type="text" value={foodItem} onChange={e => setFoodItem(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
      {foodCalories.map((e,i)=>(
        <div key={i}>
          <h2>{e.name}</h2>
          <p>Calories: {e.calories}</p>
        
        <h4>Total Calories:  {totaCalories} kcals</h4>
       
            </div>
      ))}
    </div>
  );
}

export default GetApi;
