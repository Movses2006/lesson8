import { Link } from 'react-router-dom'
import { headerData } from './data'
import "./style.css"

const Header = () => {
    return (
    <div className="nav"> 
        <img src='https://online-shop-react.vercel.app/img/logo2.png' alt='sadsadsa'/>
        <div className="navlinks">
        {headerData.map(({title, path} )=> (
            
            <Link to={path}>{title}</Link>
            
        ))}
        </div>
    </div>)
}

export default Header;