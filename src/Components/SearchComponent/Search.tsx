import React, {useState} from 'react';
import { Grid, TextField } from '@material-ui/core';
import './Search.css';
import { IUserInput } from '../../Common/Interfaces';

interface ISearchProps {
    SetUserInput: (a: IUserInput) => void;
}


function Search(props: ISearchProps) {

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) =>{
        setSearchQuery(s);          
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    

    return <div className="SearchContainer">
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />
            </Grid>
        </Grid>
    </div>
}

export default Search