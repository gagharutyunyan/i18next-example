import './App.css';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {removeLngPrefix} from "./i18n";

function App() {
    const { t, i18n: { language } } = useTranslation();

    useLayoutEffect(() => {
        const currentPathname = window.location.pathname;
        const newPathname = `/${language}${removeLngPrefix(currentPathname)}`;

        if(currentPathname !== newPathname) {
            window.location.replace(newPathname);
        }
    }, [])

  return (
      <Router basename={`/${language}`}>
        <div className="App">
            {t('mainWords.hello')}
            <br/>
            {t('mainWords.bye')}
            <br/>
            {t('mainWords.night')}
            <LanguageSwitcher />
            <Link to='/home'>home page</Link>{''}
            <br/>
            <Link to='/users'>users page</Link>

            <Routes>
                <Route path='/home' element={<h1>{t('pageTitles.homePageTitle')}</h1>}/>
                <Route path='/users' element={<h1>{t('pageTitles.usersPage')}</h1>}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
