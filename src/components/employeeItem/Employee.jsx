import TextCard from '../textCard/TextCard'
import React from 'react'

const Employee = () => {
  return (
    <div >
       <TextCard
        firstname ="Toto"
         lastname = "John"
         email = "toto@gmail.com"
         onClickTrash = {()=> alert("Click trash")}
         onClick = {()=> alert("Click employee")}
       />
    </div>
  )
}

export default Employee