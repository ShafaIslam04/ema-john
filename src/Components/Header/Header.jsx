import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <div className='options'>
                <a href='shop'>Shop</a>
                <a href='orde'>order</a>
                <a href='inventory'>Inventory</a>
                <a href='login'>Login</a>
            </div>
           
        </div>
    );
};

export default Header;