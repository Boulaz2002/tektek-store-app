import React from 'react'

export default function Check(props) {
    if(props.list !== undefined){
        return (
            <ul className='sub-menu'>
                {props.list.map((item)=>
                    <li key={item.name}>
                        <a>{item.name}</a>
                    </li>)
                }
            </ul>
          )
    }
}
