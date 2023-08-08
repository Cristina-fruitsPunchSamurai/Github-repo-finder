
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material'; //comme si c'était une div
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Repo ( {image, name, author, description, id} ) {
    return(
        //En mobile un bloc, il occupe les 12 columns en entier mais en medium il occupe 4fr des 12fr
            <Grid item xs={12} md={4}>
                <Link to={`/repo/${id}}`} className='link-repo'>
                <Paper elevation={3}>
                    <img className="repos-img" src={image}/>
                    <Box sx={{pl:2}}>
                        <Typography variant='h6'>
                        {name}
                        </Typography>
                        <Typography variant="subtitle1">
                        {author}
                        </Typography>
                    </Box>
                    <Box sx={{p:2}} >
                        <Typography variant='body2' component="p">
                        {description}
                        </Typography>
                    </Box>
                </Paper>
                </Link>
            </Grid>
    )

}

export default Repo;