import React, {useState} from 'react'
import './App.css';



function App() {
  const [dishInput, setDishInput] = useState('');
  const [cuisineInput, setcuisineInput] = useState('');
  const [data, setData] = useState([]);

 
  async function testFetch(){
   
    const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${dishInput}&q=${cuisineInput}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&random=true`);
    const data = await responce.json();
    const {hits} = data
 console.log(hits)
    setData(hits);
      }
    //  testFetch()
  function onSubmit(e){
    e.preventDefault();
    testFetch()
    setcuisineInput('')
    setcuisineInput(e.target.value)
    
  } 
 
 
  
 
 
  return (
    <div className="App">
     <form onSubmit ={onSubmit} className='form'>
    <input className='textIn'  onChange={(e)=> {setDishInput(e.target.value)}} type='text' value={dishInput} placeholder='Type main ingredients then select your CUISINE'/>
    <input id='home' className='cuisineInput' type='button' onClick={()=> window.location.reload()} value='Home' on='true'/>
   <input id='indian' className='cuisineInput' type='button' onClick={onSubmit} value='Indian' on='true'/>
   <input id='chinese' className='cuisineInput' type='button' onClick={onSubmit} value='Chinese' on='true'/>
   <input id='korean' className='cuisineInput' type='button' onClick={onSubmit} value='Korean' on='true'/>
   <input id='asian' className='cuisineInput' type='button' onClick={onSubmit} value='Asian' on='true'/>
   


       {/* <input onChange={(e)=> {setcuisineInput(e.target.value)}} type='text' placeholder='Meat or Chicken'/> */}
       {/* <button className='submit'>Submit</button> */}
     </form>
     
 <div className='flex-container'>
{data.map((e, index)=> <section className='flex-box' key={index}><h4 className='label'>{e.recipe.label}</h4>
<div>
<img src={e.recipe.image} width={200} height={200} alt={e.recipe.label}/>
</div>
<p className='ingredientPara'>{e.recipe.ingredientLines}</p>
</section>)}
</div>

    </div>
  );
}

export default App;
