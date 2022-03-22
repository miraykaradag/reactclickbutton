import React from 'react'

export default function Buton(props) {

    let {action}=props;

  return (
    <div>

        <button onClick={action}>Arttır</button>

    </div>
  )
}

