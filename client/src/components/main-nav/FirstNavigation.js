import { Link } from 'react-router-dom';
const FirstNavigation = () => {
    return (
        <nav className="navbar nav-first navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="./imgs/navbar-brand.svg" alt="Our brand" />
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <h2 className="h1 text-primary my-3">Електронно меню</h2>
                    </li>
                </ul>
            </div>
        </nav>)
}
export default FirstNavigation;