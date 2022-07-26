import React, {FC} from "react";
import { Link } from "react-router-dom";

const logo = require('../../assets/images/logo.png');

interface headerType {
    theme:string,
    setTheme:(theme:string)=>void,
}

const Header:FC<headerType> = ({ theme,setTheme }) => {
    return (
        <div className="header" >
            <div className="header_container">
                {/*<img  src={logo} alt=""/>*/}
                <nav>
                    <ul className="header_routes">
                        <Link to='/'>
                            <li>Main</li>
                        </Link>
                        <Link to='/movies'>
                            <li>Movies</li>
                        </Link>
                    </ul>
                </nav>
                <div className="theme_color">
                    <input onClick={()=>setTheme(theme === 'black' ? 'white' : 'black')} type="checkbox" name="checkbox" className="switch" />
                </div>
            </div>
        </div>
    )
}
export default Header