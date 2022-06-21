
import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Fav() {
  const [data, setData] = useState([])

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

 console.log(data)
//data? will take care of, if nothing on fav list it will show empty page
  return (<div className='flex-container'>
  {data?.map((e, index)=> <section className='flex-box' key={index}><h4 className='label'>{e.label}</h4>
  <div>
  <img src={e.image} width={200} height={200} alt={e.label}/>
  </div>
  
  <p className='ingredientPara'>{e.ingredientLines}</p>

  <button onClick={()=>remove(e)} className='reBtn'><RiDeleteBin5Line className='iconNav' /></button>
  </section>)}
  </div>
  )
  }
