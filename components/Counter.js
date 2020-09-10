import React, { Component } from 'react'



export function Counter ({contador,incremento,decremento,contadoporcien}) {
    return (
      <div>
        <div>
          Contador: <span>{contador}</span>
        </div>

        <button onClick={incremento}>+</button>
        <button onClick={decremento}>-</button>
        
        <div>
         Por 100: <span>{contadoporcien}</span>
        </div>
      </div>
      
    )
  }
