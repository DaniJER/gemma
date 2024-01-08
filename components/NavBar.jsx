'use clients'
import Link from 'next/link';
import '../components-styles/navbar.css'

function NavBar(){
    return(

        <nav className="nav-bar">

            <h1><Link href='/'>Gemma Accesorios</Link></h1>
            <ul>
                <p><Link href="/redes">Nuevo</Link></p>
            </ul>
            <ul>
                <p><Link href="/nosotros">Todo</Link></p>
            </ul>
            <ul>
                <p><Link href="/">Categorias</Link></p>
            </ul>
        </nav>  
    )
}
export default NavBar;