import React, {FC} from "react";

interface headerType {
    theme:string,
    setTheme:(theme:string)=>void,
}

const Header:FC<headerType> = ({ theme,setTheme }) => {
    return (
        <div className="theme_color">
            <input onClick={()=>setTheme(theme === 'black' ? 'white' : 'black')} type="checkbox" name="checkbox" className="switch" />
        </div>
    )
}
export default Header