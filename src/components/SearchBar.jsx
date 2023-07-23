
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function SearchBar( {setSearch} ) {

    const [inputValue, setInputValue] = useState("");
    //console.log('INPUT', inputValue)
    //console.log('SEARCH', search);

    const handleKeyDown = (e) => {
        if (e.code === 'Enter' && inputValue.length > 3) {
            setSearch(inputValue)
        }
    }

    return (
        <Container maxWidth="lg">
            <Box>
            <TextField
            fullWidth
            label="Recherche"
            sx={{backgroundColor:'#ffffff'}}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleKeyDown}/>
            </Box>
        </Container>
    );
}

export default SearchBar;