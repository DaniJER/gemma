import '../components-styles/Fotos.css';
'use clients'

function Fotos(props){
  return(
    <div className="contenedor-principal-imagenes">
      <div className="contenedor-foto">
        <img 
          src = {props.image}
          alt= {props.desc} 
        />
      </div>
    </div>
  )
}

export default Fotos;