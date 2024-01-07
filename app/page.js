import Link from "next/link";
import Fotos from '@/components/Fotos'
import NavBar from '@/components/NavBar'
import '../components-styles/page.css'

function HomePage(){
  return (
    <div className="pagina-principal">
      <NavBar/>
      {/* <Fotos 
        img = '../img/anillos.jpg'
        description = 'foto 1'
      /> */}
    </div>
    )
}
export default HomePage;