import React from 'react';

import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

import "./styles/index.scss";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, ''])}>
            <Navbar/>
            <div className={'content-page'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;