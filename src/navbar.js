function Navbar() {
    return (
        <nav className='mile'>
            <ul className="mile-nav">
            <li className="mile-nav-link">
                    <a className="mile-nav-link" href="/">Home</a>
                </li>
                <li className="mile-nav-link">
                    <a className="mile-nav-link" href="/contato">Contato</a>
                </li>
                <li className="mile-nav-link">
                    <a className="mile-nav-link" href="/quem-somos">QuemSomos</a>
                </li>
                <li className="mile-nav-link">
                    <img className='camilota' src={require('./SENAI.png')} height={42}/>
                    
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;

