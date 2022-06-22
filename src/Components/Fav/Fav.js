
import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Fav() {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)

  function newData(){
    if(localStorage.length >= 1){
      const data = Array.from(Object.values(localStorage))
      const e =[]
      for(let i = 0; i < localStorage.length; i++){
         e.push( JSON.parse(data[i]))
      }
    setData(e)
    }
  }
useEffect(()=>{
  newData()
},[])

function remove(e){
      setData(data.filter((x) => x.label !== e.label));
      localStorage.removeItem(e.label)
      
}



function display(e){
  document.documentElement.style.setProperty('--para',e)
  setToggle(!toggle)
}



   


 console.log(data)
//data? will take care of, if nothing on fav list it will show empty page
  return (<div className='App'>
  <div className='flex-container'>
  {data?.map((e, index)=> <section className='flex-boxFav' key={index}><h4 className='label'>{e.label}</h4>
  <div>
  <img src={e.image} width={200} height={200} alt={e.label}/>
  <h6 style={{color:'gold'}}>Meal type: {e.mealType}</h6>
  </div>
  <div>
  <button className='displayParaFav' id={String(!toggle)} onClick={()=>display(toggle? 'none': 'flex')}><p className='ingredientPara'><b>Ingredients: </b> {e.ingredientLines}</p>{!toggle? 'Show': 'Hide'} ingredients</button>
  </div>
  <h6 style={{color:'gold'}}>Total time: {e.totalTime} min</h6>

  <button onClick={()=>remove(e)} className='reBtn'><RiDeleteBin5Line className='iconNav' /></button>
  </section>)}
  </div>
  </div>
  )
  }
