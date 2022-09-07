import React, { useState } from 'react'
import '../App.css'
import logo from "../assets/logo.png"
import picture from "../assets/profile.jpeg"
import Check from './check'
import { menuItem } from './ConstantList'

export default function Sidebar(props) {
    const [expand, setExpand] = useState(true)
    
  return (
    <div className={`sidebar ${props.inactive ? "inactive" : ""}`}>
        <div className='top-section'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div onClick={()=> props.setInactive(!props.inactive)} className='toggle-button'>
                <i className={`bi bi-arrow-${props.inactive ? "right": "left"}-square-fill`}></i>
            </div>
        </div>
        <div className='main-menu'>
            <ul>
                {menuItem.map((item)=>
                <li key = {item.name}>
                    <a onClick={()=> setExpand(!expand)} className={`menu-item ${props.inactive ? "inactive" : ""}`}>
                        <span className='menu-icon'>
                            <i className={item.icon}> </i>
                        </span>
                        <span className='menu-item-name'>{item.name}</span>
                    </a>
                    <div className={`p-sub-menu ${expand ? "active" : ""}`}>
                        <Check list={item.sub_menu}/>
                    </div>
                    
                </li>
                )}
            </ul>
            
        </div>
        <div className={`sidebar-footer ${props.inactive ? "inactive" : ""}`}>
            <div className='avatar'>
                <img src={picture} />
            </div>
            <div className='user-info'>
                <h5>Tchegnebe Rodrigue</h5>
                <p>Superviseur</p>
            </div>
        </div>
    </div>
  )
}
