import { InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import './Search.scss'

const Search:FC<{}> = ({}) => {
    return (
        <TextField
            className="search"
            variant="outlined"
            style={{border: "none"}}
            placeholder="Search..."
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <CiSearch />
                    </InputAdornment>
                )
            }}
        />
    )
}

export default Search