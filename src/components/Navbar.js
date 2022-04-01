import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search..."></input>
                <SearchOutlinedIcon />
            </div>
            <div className="buttons">

                <div className="buttonIcon">
                    <DarkModeOutlinedIcon
                        className="icon"
                    />
                </div>

                <div className="buttonIcon">
                    <NotificationsNoneOutlinedIcon className="icon" />
                </div>

                <div className="buttonIcon">
                    <ListOutlinedIcon className="icon" />
                </div>
                <div className="buttonIcon">
                    <img
                        src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="avatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar