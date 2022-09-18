import React from 'react';
import {Link} from "react-router-dom";

import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, ''])}>
            <Navbar/>
            <button onClick={toggleTheme}>TOGGLE</button>
            <AppRouter/>
        </div>
    );
};

export default App;