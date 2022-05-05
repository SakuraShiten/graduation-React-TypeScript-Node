import React, { FC } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ModerPage from '../../../pages/moder/ModerPage';
import NewsPage from '../../../pages/news/NewsPage';
import { listURL } from '../../../utils/navigation'

const AppRouter: FC = () => {
    return (
    <Routes>
        {listURL.map(item=>
        <Route key={item.URL} path={item.URL} element={item.component} />
        )}
        <Route path={"/moder"} element={<ModerPage/>} />
        <Route path={"*"} element={listURL[0].component} />
    </Routes>
    );
}
export default AppRouter