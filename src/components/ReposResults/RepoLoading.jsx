

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Container  from '@mui/material/Container';


export default function RepoLoading() {
    return (
        <Container >
            <Stack sx={{ color: 'grey.500'}} spacing={2} direction="row" className='loading'>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
        </Container>
    );
}