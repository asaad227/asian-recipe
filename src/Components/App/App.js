import React, {useState} from 'react'
import './App.css';



function App() {
  const [dishInput, setDishInput] = useState('');
  const [cuisineInput, setCuisineInput] = useState('');
  const [data, setData] = useState([]);

 
 
  async function testFetch(){
   
    const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${dishInput}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${cuisineInput}&random=true`);
    const data = await responce.json();
    const {hits} = data
 console.log(hits)
    setData(hits);
      }
    //  testFetch()
  function onSubmit(e){
    e.preventDefault();
    testFetch()
    
  } 
 
 
 console.log(cuisineInput)
 
 
  return (
    <div className="App">
     <form onSubmit ={onSubmit} className='form'>
     {/* <button id='home' className='cuisineInput' type='button' onClick={()=> window.location.reload()} value='Home'>Home</button> */}
    <input className='textIn'  onChange={(e)=> {setDishInput(e.target.value)}} type='text' value={dishInput} placeholder='Type main ingredients then select your CUISINE'/>
   
   <button id='Indian' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}} >Indian</button>
   <button id='Chinese' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}} >Chinese </button>
   <button id='Korean' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}}  >Korean</button>
   <button id='American' className='cuisineInput' type='button' onClick={(e)=> {setCuisineInput(e.target.id)}} >American</button>
   <button className='cuisineInput'>Submit</button>
   


       {/* <input onChange={(e)=> {setcuisineInput(e.target.value)}} type='text' placeholder='Meat or Chicken'/> */}
       {/* <button className='submit'>Submit</button> */}
     </form>
     
 <div className='flex-container'>
{data.map((e, index)=> <section className='flex-box' key={index}><h4 className='label'>{e.recipe.label}</h4>
<div>
<img src={e.recipe.image} width={200} height={200} alt={e.recipe.label}/>
</div>
<button onClick={()=> localStorage.setItem(e.recipe.label, JSON.stringify(e.recipe))} className="cuisineInput">Fav</button>
<p className='ingredientPara'>{e.recipe.ingredientLines}</p>
</section>)}
</div>
    </div>
  );
}

export default App;
