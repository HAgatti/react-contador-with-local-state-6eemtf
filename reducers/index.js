const INICIAL_STATE ={
  contador : 0
}
//esta funcion es el reducer
export function counterApp (state = INICIAL_STATE, action )
{
  console.log(state, action)
  switch(action.type)//aca se genera el nuevo estado
  {
    case 'INCREMENTO':
     return {
       contador : state.contador + 1
     }
    case 'DECREMENTO':
     return {
       contador : state.contador - 1
     }
     default:
       return state
  }
}