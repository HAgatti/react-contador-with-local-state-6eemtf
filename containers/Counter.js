import {Counter} from '../components/Counter'
import {connect} from 'react-redux'

const NmapStateToProps = state =>{
   return {contador: state.contador}
}

const NmapDispatchToProps = dispatch =>{
   return {
     incremento: () => dispatch({type: 'INCREMENTO'}),
     decremento: () => dispatch({type: 'DECREMENTO'})
   }
}

const CrearConexionHeber = connect(
  //importa el orden de como los recibe, NO LOS NOMBRES
  NmapStateToProps,
  NmapDispatchToProps
)
//importa que la constante devuelve la conexion, NO EL NOMBRE
const HeberComponentWithConnectionToRedux = CrearConexionHeber(Counter)

export default HeberComponentWithConnectionToRedux