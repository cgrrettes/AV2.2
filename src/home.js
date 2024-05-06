import './home.css';

function Home (){
    return(
        <div className="corpo">
            <h2 className='titulo'>Bem-vindo a Página Inicial da nossa AV2(3 tentativa)</h2>
            <p className='sub-titulo'>Agora vai!</p>
            <div className="container">
                <div className="imagem-container">
                    <img src={require('./FOTO5.jpg')} width={230}/>
                    <h4 className='mini'>Vista de cima Cimatec PARK.</h4>
                </div>
                <div className="imagem-container">
                    <img src={require('./FOTO6.jpg')} width={260}/>
                    <h4 className='mini'>Portaria Senai Cimatec.</h4>
                </div>
                <div className="imagem-container">
                    <img src={require('./FOTO7.jpg')} width={260}/>
                    <h4 className='mini'>Portaria Sesi Saúde Piata.</h4>
                </div>
                <div className="imagem-container">
                    <img src={require('./HOME.jpg')} width={270}/>
                    <h4 className='mini'>Portaria Sesi Piata.</h4>
                </div>
               
             
              
            </div>
        </div>
    );
}

export default Home;

