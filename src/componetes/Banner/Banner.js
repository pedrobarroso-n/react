import './Banner.css' //css vai como padrao

function Banner() {
    return ( 
        //className é a versao class do css pro react
        <header className="banner">  
            <img src="/imagens/banner.png" alt="Bannner principal da pagina" />
        </header>
    )
}

export default Banner;
