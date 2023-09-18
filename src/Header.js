import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
          <Link to={"/"} style={{textDecoration:"none"}}>


            <div className="header_logo">
  <StoreIcon fontSize='large' className='header_logoImage'/>
  <h2 className="header_logoTitle">
    DKNTSHOP
  </h2>
        </div>
          </Link>
        
  
        <div className="header_search">
  <input type="text" className="header_searchInput" />
  <SearchIcon className='header_SearchIcon'/>
        </div>
  
        <div className="header_nav">
          <div className="nav_item">
                  <span className="nav_itemLineOne">
                    Hello Guest
                  </span>
                  <span className="nav_itemLineTwo">
                    Sign In
                  </span>
          </div>
          <div className="nav_item">
          <span className="nav_itemLineOne">
                    Your
                  </span>
                  <span className="nav_itemLineTwo">
                    Shop
                  </span>
          </div>
          <Link to={"/checkout"} style={{textDecoration:"none"}}>
           <div className="nav_itemBasket">
          <ShoppingBasketIcon  />
                  <span className="nav_itemLineTwo nav_basketCount">
                    0
                  </span>
          </div>
          </Link>
         
  
        </div>
      </div>
    );
}

export default Header;