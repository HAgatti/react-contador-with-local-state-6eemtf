

const INICIAL_STATE ={
  contador : 0,
  contadoporcien : 0 ,
  ingreso: 0
} 



//esta funcion es el reducer
export function counterApp (state = INICIAL_STATE, action )
{
  console.log(state, action)
  switch(action.type)//aca se genera el nuevo estado
  {
    case 'INCREMENTO':
     return {
       contador : state.contador + 1,
       ingreso: state.ingreso + state.ingreso,
       contadoporcien : state.contadoporcien + 1 * 100
     }
    case 'DECREMENTO':
     return {
       contador : state.contador - 1,
       ingreso: state.ingreso + state.ingreso,
       contadoporcien : state.contadoporcien - 1 * 100
     }
     default:
       return state
  }
}