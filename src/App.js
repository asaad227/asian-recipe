import React, {useState} from 'react'
import './App.css';



function App() {
  const [dishInput, setDishInput] = useState('');
  const [cuisinInput, setCuisinInput] = useState('');
  const [data, setData] = useState([]);

 
  async function testFetch(){
   
    const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${dishInput}&q=${cuisinInput}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&random=true`);
    const data = await responce.json();
    const {hits} = data
 console.log(hits)
    setData(hits);
      }
    //  testFetch()
  function onSubmit(e){
    e.preventDefault();
    testFetch()
    setCuisinInput('')
    setCuisinInput(e.target.value)
    
  } 
 
 
  
 
 
  return (
    <div className="App">
     <form onSubmit ={onSubmit} className='form'>
    <input className='textIn'  onChange={(e)=> {setDishInput(e.target.value)}} type='text' value={dishInput} placeholder='REFINE SEARCH BY Calories, Diet, Ingredients'/>
   <input id='indian' className='cuisinInput' type='button' onClick={onSubmit} value='Indian' on='true'/>
   <input id='chinese' className='cuisinInput' type='button' onClick={onSubmit} value='Chinese' on='true'/>
   <input id='korean' className='cuisinInput' type='button' onClick={onSubmit} value='Korean' on='true'/>
   <input id='asian' className='cuisinInput' type='button' onClick={onSubmit} value='Asian' on='true'/>
   <input id='asian' className='cuisinInput' type='button' onClick={()=> window.location.reload()} value='Home' on='true'/>


       {/* <input onChange={(e)=> {setCuisinInput(e.target.value)}} type='text' placeholder='Meat or Chicken'/> */}
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
