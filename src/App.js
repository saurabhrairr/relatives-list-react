import React from "react";




const names=['Relative raju','Relative prem','Relative abdul','Relative sanjay']

function App() {
  const nameList=names.map((name,i)=><li key ={name+"list"+(i+1)}>{ name+(i+1 )} </li>)
  console.log(nameList)
  return (
    <div><ol>Relative List{nameList}</ol></div>
  )
}

export default App

