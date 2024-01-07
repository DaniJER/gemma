'use clients'
import Link from 'next/link';
import '../components-styles/navbar.css'

function NavBar(){
    return(

        <nav className="nav-bar">

            <Link href='/'><h1 className='titulo-nav'>Gemma Accesorios</h1></Link>
            <ul>
                <Link href="/redes">Redes sociales</Link>
            </ul>
            <ul>
                <Link href="/nosotros">Nosotros</Link>
            </ul>
            <ul>
                <Link href="/">Contacto</Link>
            </ul>
            <ul>
                <Link href="/">Contacto</Link>
            </ul>
            <ul>
                <Link href="/">Contacto</Link>
            </ul>
            <ul>
                <Link href="/">Contacto</Link>
            </ul>
        </nav>  
    )
}
export default NavBar;