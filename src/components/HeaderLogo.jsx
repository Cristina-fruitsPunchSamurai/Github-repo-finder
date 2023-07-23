
import logo from '../assets/images/logo-github.png';
import '../App.css';

function HeaderLogo(){
    return(
        <header>
            <img src={logo} className='header-logo'/>
        </header>
    )
}

export default HeaderLogo;