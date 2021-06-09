import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar navbar-default " >
            <ul className="navbar bg-light  w-100 navbar-right">
                <li className="nav navbar-nav navbar-right w-auto">
                    <Link to="/home">Home</Link>
                </li>
                <ul className="nav navbar-nav navbar-right">
                    <Link to="/list">Listado</Link>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <Link to="/agrupar">Agrupar Jornadas</Link>
                </ul>
            </ul>
        </nav>
    );

}
export default NavBar