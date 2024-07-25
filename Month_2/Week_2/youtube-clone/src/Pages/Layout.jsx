import { Outlet } from "react-router-dom"
import {Box} from "@mui/material"
import Navbar from "../Components/Navbar"


const Layout = () => {
    return (
        <div className="layout">
            <Box
            sx={{backgroundColor:'#000000', color:'#ffffff', width:'100%'  }}
            >
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="content">
                <Outlet />
            </div>
            </Box>


        </div>
    )
}

export default Layout
