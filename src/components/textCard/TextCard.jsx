import React, { useState } from 'react'
import s from './style.module.css';
import {Trash as TrashIcon} from 'react-bootstrap-icons'
const TextCard = ({firstname,lastname,email,onClickTrash,onClick}) => {
    const[isCardHovered,setIsCardHovered] = useState(false);
    const[isTrashHovered,setIsTrashHovered] = useState(false);

    function onClickTrash_(e){
        onClickTrash();
        e.stopPropagation();
    }
  return (
    <div
     onClick={onClick}
     onMouseEnter={()=> setIsCardHovered(true)}
     onMouseLeave={()=> setIsCardHovered(false)}
     style={{borderColor: isCardHovered ? "#0d6efd":"transparent"}}
     className={`card ${s.container}`}
    >
            <div className={`card-header ${s.title_row}`}>
            <h5>{email}</h5> 
               <TrashIcon 
               onClick={onClickTrash_}
               onMouseEnter={()=>setIsTrashHovered(true)}
               onMouseLeave={()=>setIsTrashHovered(false)}
               style={{color:isTrashHovered ? "FF7373" : "#b8b8b8"}}
               size={20}/>
               
            </div>
            <div className="card-body">
                <h4 className="card-title">{firstname}</h4>
                <p className="card-text">{lastname}</p>
            </div>
        
    </div>
  )
}

export default TextCard