import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import {logo} from "../Utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => {
    return (
        <Stack
            direction="row"
            p={2}
            alignItems='center'
            sx={{
                backgroundColor: "#0000",
                position: "sticky",
                top: 0,
                justifyContent: "space-between"
            }}
        >
            <Link to="/" style={{display:"flex", alignItems:"center"}}>
            <img src={logo} alt="logo" height={45} />
            </Link>

            <SearchBar/>


        </Stack>
    )
}

export default Navbar
