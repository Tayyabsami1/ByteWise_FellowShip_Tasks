import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate=useNavigate();
    return (
        <Paper
            elevation={2}
            component="form"
            onSubmit={(e) => { e.preventDefault();
                if(searchTerm)
                {
                    navigate(`/search/${searchTerm}`);
                    setSearchTerm("");
                }
             }}
            sx={{
                border: "1px solid #e3e3e3",
                borderRadius: 20,
                pl: 2,
                mr: { sm: 5 }
            }}>
                <input type="text"placeholder="Search..." required className="search-bar" 
                onChange={(e)=>setSearchTerm(e.target.value)}
                value={searchTerm} 
                />
                <IconButton type="submit" sx={{
                    p:"10px", color:"red"
                }}>
                    <SearchIcon/>
                </IconButton>
        </Paper>
    )
}

export default SearchBar