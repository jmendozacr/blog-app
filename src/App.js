import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <main>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;