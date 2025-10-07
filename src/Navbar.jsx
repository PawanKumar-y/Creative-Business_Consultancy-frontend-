import { NavLink } from "react-router-dom";
import logo from './assets/logo.png';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <div className={style.topHeader}>
            <NavLink to="/">
                <img src={logo} alt="logo of the company" className={style.imgstyle}/>
            </NavLink>

            <div className={style.navigator}>
                <NavLink to="/about" className={({ isActive }) => isActive ? `${style.navItem} ${style.active}` : style.navItem}><strong>About</strong></NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? `${style.navItem} ${style.active}` : style.navItem}><strong>Services</strong></NavLink>
                <NavLink to="/industries" className={({ isActive }) => isActive ? `${style.navItem} ${style.active}` : style.navItem}><strong>Industries</strong></NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? `${style.navItem} ${style.active}` : style.navItem}><strong>Technologies</strong></NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? `${style.navItem} ${style.active}` : style.navItem}><strong>Contact Us</strong></NavLink>
            </div>
        </div>
    );
}

export default Navbar;