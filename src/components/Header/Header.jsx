import React  from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from"../../assets/image/NetflixLogo.png"

const Header = () => {

  return (
    <div className="header-outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li><img src={NetflixLogo } alt="Netflix Logo"width="100" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <br />
            <li>
              <NotificationsNoneIcon />
            </li>
            
            <li>
              <AccountBoxIcon />
            </li>
            
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
      </div>
    
  );
}

export default Header

