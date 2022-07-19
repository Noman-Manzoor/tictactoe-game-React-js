import React from 'react'

export default function Square(props) {
  return (
    <div>
        <button type="button" className='fs-1 m-0'  onClick={()=> props.onClick()}>
            {props.value}
        </button>
    </div>
  )
}

