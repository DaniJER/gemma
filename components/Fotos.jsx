import '../components-styles/Fotos.css';
'use clients'

function Fotos(props){
  return(
    <div className="contenedor-principal-imagenes">
      <img className="contenedor-foto"
        src={props.img} 
        alt={props.description} 
      />
    </div>
  )
}

export default Fotos;