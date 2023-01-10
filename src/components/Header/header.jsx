import "./header.scss"

function Header() {
    return(
        <header>
            <div className="navbar-links">
                <a href="/_" className="risemarket">RISE MARKET</a>
                <a href="/_" className="news">Новости</a>
                <a href="/_" className="recomendations">Рекомендации</a>
                <a href="/_" className="galery">Галерея</a>
                <a href="/_" className="contacts">Контакты</a>
            </div>
        </header>
    );
}

export default Header