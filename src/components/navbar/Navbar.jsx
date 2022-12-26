import "./navbar.scss"
import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import  WbSunnyOutlinedIcon  from "@mui/icons-material/WbSunnyOutlined";
import  NotificationAddOutlinedIcon  from "@mui/icons-material/NotificationAddOutlined";
import  EmailOutlinedIcon  from "@mui/icons-material/EmailOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

  const {toggle , darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  
  return (
    <div className="navbar">
      <div className="left">
        
        <Link to="/" style={{textDecoration:"none"}}>
          <span>DNDsocial</span>
        </Link>
           <HomeOutlinedIcon />
           { darkMode ? (<WbSunnyOutlinedIcon onClick={toggle}/>) : (< DarkModeOutlinedIcon onClick={toggle}/> )}
           <GridViewOutlinedIcon />
           <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search...  " />
           </div>
      </div>
      <div className="right">
          <PersonOutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationAddOutlinedIcon/>
          <div className="user">
            <img src={currentUser.profilePic} />
              <span>{currentUser.name}</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar