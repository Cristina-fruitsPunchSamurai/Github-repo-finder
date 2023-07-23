
import Alert from '@mui/material/Alert';
import Container  from '@mui/material/Container';

export default function Message({message, loading}) {
    return (
        <Container sx={{marginY: 2}} maxWidth="lg">
                <Alert severity="info">
                    {message}

                </Alert>
        </Container>
    )

}