import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import {TOKEN_KEY} from "../constants";

import '../styles/App.css';

class App extends React.Component {
    state = {
        isLoggedIn: !!localStorage.getItem(TOKEN_KEY)
    }

    handleLogin = (response) => {
        this.setState({isLoggedIn: true});
        localStorage.setItem(TOKEN_KEY, response);
    }

    handleLogout = () => {
        this.setState({isLoggedIn: false});
        localStorage.removeItem(TOKEN_KEY);
    }

    render() {
        return (
            <div className="App">
                <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
                <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
            </div>
        );
    }
}

export default App;
