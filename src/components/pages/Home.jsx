
import HeaderLogo from "../HeaderLogo";
import Message from "../Message";
import SearchBar from "../SearchBar";
import ReposResult from "../ReposResults";

function Home({message, setSearch, repos, loading}){

    return(
        <>
        <HeaderLogo />
        <SearchBar setSearch={setSearch}/>
        <Message message={message} />
        <ReposResult repos={repos} loading={loading} />
        </>
    )
}

export default Home;