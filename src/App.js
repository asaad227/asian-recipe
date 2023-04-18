import React, { useEffect, useState} from 'react'
import './App.css';



function App() {
  const [dishInput, setDishInput] = useState('');
  const [cuisinInput, setCuisinInput] = useState('');
  const [data, setData] = useState([]);
  const[fav, setFav] = useState([])
  const [show, setShow] = useState([])
  const[local, setLocal] = useState(JSON.parse(localStorage.getItem("myRecipe")))
useEffect(()=>{
setLocal(local)
},[local])

 
  async function testFetch(){
   
    const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${dishInput}&q=${cuisinInput}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&random=true`);
    const data = await responce.json();
    const {hits} = data;

    const exist = hits.map((e, i)=> e? {...e, id:1+i}:e)
      const listItem = localStorage.setItem("myRecipe", JSON.stringify(exist))
     setData(listItem)
    
  
      }
    //  testFetch()
  function onSubmit(e){
    e.preventDefault();
    testFetch()
    setCuisinInput('')
    setCuisinInput(e.target.value)
    
  } 


 function addFav(index){
  const list = [...local];
list[index].id = !list[index].id;

  const finalList = list.filter(e=> !e.id);
  console.log(finalList);
  const final = localStorage.setItem("myFav", JSON.stringify(finalList))
  setFav(final)
 }
const showIngredient = (id)=>{
  setShow((preventState)=>({
    ...preventState, [id]:!preventState[id]
  }))
  
}
 
 function checklist(){
  if(local === null|| local.length === 0){
    return(<div>
      <p>Please fetch the data</p>
    </div>)
  }else{
   return (local.map((e, index)=> <section  key={index}><h4 className='label'>{e.recipe.label}</h4>
    <button className='favBtn' type='submit' key={e.id} onClick={()=>addFav(index)}><i className='fa fa-heart' aria-hidden='true'></i></button>
    <div>
    <img src={e.recipe.image} className='recipe-pic' alt={e.recipe.label}/>
    
    </div>
   
  <button className='ingredientBtn' onClick={()=> showIngredient(index)}>{show[index]? "Hide Ingredient":"Show Ingredient"}</button>
   <p className="ingredientPara" >{show[index]? e.recipe.ingredients.map((x,i)=>{
return(<div>
  <ul key={i}><li>{x.text}</li></ul>
  </div>)
   })
:""}</p>
    
   
    </section>))
  }
 }
  console.log(local);
 
  return (
    <div className="App">
     <form onSubmit ={onSubmit} className='form'>
     <div>
    <input className='textIn'  onChange={(e)=> {setDishInput(e.target.value)}} type='text' value={dishInput} placeholder='REFINE SEARCH BY Calories, Diet, Ingredients'/>
    </div>
    <div>
   <input id='indian' className='cuisinInput' type='button' onClick={onSubmit} value='Indian' on='true'/>
   <input id='chinese' className='cuisinInput' type='button' onClick={onSubmit} value='Chinese' on='true'/>
   <input id='korean' className='cuisinInput' type='button' onClick={onSubmit} value='Korean' on='true'/>
   <input id='asian' className='cuisinInput' type='button' onClick={onSubmit} value='Asian' on='true'/>
   <input id='asian' className='cuisinInput' type='button' onClick={()=> window.location.reload()} value='Home' on='true'/>
   </div>
     </form>
     
 <div >
 
{checklist()}
</div>
</div>

)}

export default App;
