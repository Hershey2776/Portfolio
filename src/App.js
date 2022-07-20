import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './components/home/home'
import About from './components/about/About'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="index" element={<Home />} />
                    <Route path="about" element={<About />}/>
                </Route>
            </Routes>
        </>
    )
}
export default App
