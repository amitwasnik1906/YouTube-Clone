import React, { useEffect, useState } from "react"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./screen/homeScreen/HomeScreen.jsx"
import LoginScreen from "./screen/loginScreen/LoginScreen.jsx"
import { Container, Row } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import WatchScreen from "./screen/watchScreen/WatchScreen.jsx"
import SearchScreen from "./screen/searchScreen/SearchScreen.jsx"
import ChannelScreen from "./screen/channelScreen/ChannelScreen.jsx"

import './_app.scss'
import SubscriptionsScreen from "./screen/subscriptionScreen/SubscriptionScreen.jsx"

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
  }, [accessToken, loading,])

  return (
    <Routes>
      <Route exact path="/" element={<Layout> <HomeScreen /> </Layout>} />
      <Route exact path="/auth" element={<LoginScreen />} />
      <Route exact path="/search/:query" element={<Layout> <SearchScreen /> </Layout>} />
      <Route exact path="/watch/:id" element={<Layout> <WatchScreen /> </Layout>} />
      <Route exact path='/feed/subscriptions' element={<Layout> <SubscriptionsScreen /> </Layout>} />
      <Route exact path='/channel/:channelId' element={<Layout> <ChannelScreen /> </Layout>} />
      <Route path='*' element={<Layout> <h1 className="text-center mt-12">NOT FOUND 404</h1> </Layout>} />
    </Routes>

  )
}

export default App
