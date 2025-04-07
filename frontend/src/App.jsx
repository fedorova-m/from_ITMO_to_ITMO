import { useState } from "react"
import { Home } from "./pages/home/home"
// import { RoutesPage } from "./pages/routesPage/routesPage"
// import { BrowserRouter } from "react-router-dom"
// import { Routes, Route } from "react-router-dom"
function App() {
  const [profileModal, setProfileModal] = useState(false)
  return <Home profileModal={profileModal} setProfileModal={setProfileModal} />
}

export default App
