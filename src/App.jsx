import React, { useEffect, useState } from "react"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./screen/homeScreen/HomeScreen.jsx"
import LoginScreen from "./screen/loginScreen/LoginScreen.jsx"
import { Container, Row } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import './_app.scss'

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className='app__main '>
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {
  const { accessToken, loading } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth")
    }
  }, [accessToken, loading, ])

  return (
      <Routes>
        <Route exact path="/" element={<Layout> <HomeScreen /> </Layout>} />
        <Route exact path="/auth" element={<LoginScreen />} />
        <Route exact path="/search" element={<Layout> <h1>Search Results</h1> </Layout>} />

        <Route element={<h1>404 NOT Found </h1>} />
      </Routes>

  )
}

export default App
