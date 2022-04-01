import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="header">
                <h1>Admin Panel</h1>
            </div>
            <div className="list">
                <div>
                    <p>MAIN</p>
                    <ul>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>
                                DashBoard
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>LISTS</p>
                    <ul>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>
                                Users
                            </span>
                        </li>
                        <li>
                            <StoreIcon className="icon" />
                            <span>
                                Products

                            </span>
                        </li>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>
                                Orders
                            </span>
                        </li>
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>

                                Delivery

                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>USEFUL</p>
                    <ul>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>
                                Stats
                            </span>
                        </li>
                        <li>
                            <NotificationsNoneIcon className="icon" />
                            <span>
                                Notifications
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>SERVICE</p>
                    <ul>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className="icon" />
                            <span>
                                System Health
                            </span>
                        </li>
                        <li>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>Logs</span>
                        </li>
                        <li>
                            <SettingsApplicationsIcon className="icon" />
                            <span>Settings</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>USER</p>
                    <ul>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>
                                Profile
                            </span>
                        </li>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar