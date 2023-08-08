import ReposResult from "../ReposResults";
import HeaderLogo from "../HeaderLogo";
import Message from "../Message";
import SearchBar from "../SearchBar";



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