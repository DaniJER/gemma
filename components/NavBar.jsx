'use clients'
import Link from 'next/link';
import '../components-styles/navbar.css'

function NavBar(){
    return(

        <nav className="nav-bar">

            <h1><Link href='/'>Gemma Accesorios</Link></h1>
            <ul>
                <p><Link href="/nuevo">Nuevo</Link></p>
            </ul>
            <ul>
                <p><Link href="/todo">Todo</Link></p>
            </ul>
            <ul>
                <p><Link href="/categorias">Categorias</Link></p>
            </ul>
            <ul>
                <p><Link href="/nosotros">Nosotros</Link></p>
            </ul>
        </nav>  
    )
}
export default NavBar;