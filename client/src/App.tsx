import 'react-toastify/dist/ReactToastify.min.css'
import { useEffect, useState } from 'react';
import AppRouter from './components/layout/NavBar/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import { MyAuthContext } from './context/AuthContext';
import { fetchCheckAuth } from './API/publicAPI';

function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const checkAuth = async () => {
    if (localStorage.getItem('login')) {
      const login = localStorage.getItem('login') || ''
      const password = localStorage.getItem('password') || ''
      const data = await fetchCheckAuth(login, password)
      if (data) {
        setIsAuth(true)
      }
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <MyAuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </MyAuthContext.Provider>
  );
}
//Сделать 3 цвета глобальными

export default App;
