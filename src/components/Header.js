import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider"
const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log("i have a", basket)
    return (
        <div className='header'>
            <Link to="/amazonclone">
                <div className='header__logo'>

                    <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1" alt="amazon logo" />

                </div>
            </Link>

            <div className='header__search'>
                <input type="text" className="header__searchinput"
                    placeholder='Search in Amazon' autoFocus />
                <SearchIcon className="header__searchicon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className='header__option1'>Hello</span>
                    <span className='header__option2'>SignIn</span>
                </div>

                <div className="header__option">
                    <span className='header__option1'>Returns</span>
                    <span className='header__option2'> & Orders</span>
                </div>

                <div className="header__option">
                    <div>
                        <Link to="/amazonclone/checkout">
                            <span className='header__option1' >
                                <ShoppingCartIcon className="carticon" />
                            </span>
                        </Link>
                        <span className='header__option2'>{basket?.length}</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header