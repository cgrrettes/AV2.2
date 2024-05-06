import './footer.css'

function Footer(){
    return(
        <footer className="embaixo">

          <img className='milinha' src={require('./SESI.png')} width={150}/> 
            <div className='texto1'>
                <h3>&copy; 2024 Todos os direitos reservados ao povo do do 3N/informática para internet.</h3>
            </div>
            <div className='texto2'>
                <p>Contato: (71) 999999999</p>
            </div>
        </footer>
    )
}

export default Footer;