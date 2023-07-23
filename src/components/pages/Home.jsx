
import HeaderLogo from "../HeaderLogo";
import Message from "../Message";
import SearchBar from "../SearchBar";
import ReposResult from "../ReposResults";

function Home(){

    return(
        <>
        <HeaderLogo />
        <Message />
        <SearchBar />
        <ReposResult />
        </>
    )
}

export default Home;