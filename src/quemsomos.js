import './quemsomos.css'

function QuemSomos(){
    return(
        <div className='quemsomos'>
            <h1 className="titulo">Quem Somos</h1>
            <p className='texto'>No mundo do SESI, a criatividade é uma ferramenta fundamental para o desenvolvimento dos alunos, e uma forma única de expressão artística tem se destacado: o cosplay. Originado da junção das palavras "costume" (fantasia) e "play" (brincadeira), o cosplay é uma atividade em que os participantes se vestem e interpretam personagens de ficção, sejam eles de animes, mangás, jogos, filmes, séries ou histórias em quadrinhos.</p>
            <p className='texto'>Os alunos do SESI têm abraçado essa forma de expressão de maneira incrível, utilizando sua inventividade para criar trajes e se transformar em seus personagens favoritos. Nos corredores das escolas, durante eventos e até mesmo em competições, é possível encontrar uma variedade impressionante de cosplayers, cada um trazendo sua paixão e dedicação para a comunidade escolar.</p>
            <img className='Foto5' src={require('./FOTO5.jpg')} width={305}/>
            <img className='Foto6' src={require('./FOTO6.jpg')} width={305}/>
        </div>
    )
}

export default QuemSomos;