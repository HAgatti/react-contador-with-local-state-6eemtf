import React, { Component } from 'react'

export function Counter ({contador,incremento,decremento}) {
    return (
      <div>
        <div>
          Contador: <span>{contador}</span>
        </div>

        <button onClick={incremento}>+</button>
        <button onClick={decremento}>-</button>
      </div>
    )
  }
