import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Repo from './ReposResults/Repo';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const RepoPage = () => {
    const [repo, setRepo] = useState();

    const {id} = useParams();
    console.log(id)


    useEffect(()=> {
        const fetchRepo = async () => {
            try {
            const result = await axios.get(`https://api.github.com/repositories/${id}`);
            setRepo(result.data)
            console.log(result.data)
        }catch(error) {
            console.log(error)
        }};

        fetchRepo();
    }, [id])
    console.log(repo)
    return (
        //image, name, author, description, id

    repo &&
    <Container maxWidth="sm">
        <Box sx={{mt:'8rem'}}>
            <Link to='/'> Retour à la page d'accueil </Link>
        </Box>
        <Box sx={{width:'25rem', mt:'2rem', ml:'auto', mr:'auto'}}>
            <Repo
            id={repo.id}
            image={repo.owner.avatar_url}
            name={repo.name}
            author={repo.owner.login}
            description={repo.description}/>
        </Box>
    </Container>
    )
}

export default RepoPage;
