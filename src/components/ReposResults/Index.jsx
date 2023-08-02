
import Repo from './Repo'
import RepoLoading from './RepoLoading';
import Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function ReposResult( {repos, loading} ){

    //console.log(repos)
    return (
        <>
        { loading ? <RepoLoading/> :

            <Container>
                <Grid container spacing={4}>
                {repos.map((r) => (
                        <Repo
                        id={r.id}
                        key={r.id}
                        image={r.owner.avatar_url}
                        name={r.name}
                        author={r.owner.login}
                        description={r.description}/>
                ))}
                </Grid>
            </Container>
        }
        </>
    )
}

export default ReposResult;