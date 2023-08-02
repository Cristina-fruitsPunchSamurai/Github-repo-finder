import { useEffect, useState } from 'react';
import HeaderLogo from './components/HeaderLogo';
import SearchBar from './components/SearchBar';
import Message from './components/Message';
import repos from '././data/repos.js'
import ReposResult from './components/ReposResults';
import Faq from './components/Faq';
import Home from './components/pages/Home';
import axios from 'axios';

//ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//CSS
import './App.css';
import NavBar from './components/NavBar';
import RepoPage from './components/RepoPage';

function App() {

//STATES
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('Cherchez un repo');
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

//console.log('SEARCH',search)
useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    try {
      //
      const result = await axios.get(`https://api.github.com/search/repositories?q=${search}`);
      //
      console.log(result.data)
      setApiData(result.data.items)
      setMessage(`La recherche a donnée ${result.data.total_count} résultats`)
      setLoading(false);

    } catch(error) {
      setMessage('Une erreur est survenue, veuillez ressayer plus tard')
      setLoading(false)
    }
  }
    if (search !== '') {
      fetchData();
      setSearch('')
    }
}, [search])

  return (
    <>
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route
      path='/'
      element={
      <Home
                message={message}
                setSearch={setSearch}
                repos={apiData}
                loading={loading}/>
                }>
      </Route>
      <Route path='/repo/:id' element={<RepoPage />}/>
      <Route path='/faq' element={<Faq />}></Route>
      {/* <SearchBar setSearch={setSearch}/>
      <Message message={message}/>
      <ReposResult repos={apiData} loading={loading}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
