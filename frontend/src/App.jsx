import { useState } from "react"
import Home from "./pages/home/home.jsx"
import { RoutesPage } from "./pages/routesPage/routesPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RoutePage } from "./pages/routePage/routePage.jsx"
import { InfoPage } from "./pages/infoPage/infoPage.jsx"
function App() {
  const [profileModal, setProfileModal] = useState(false)
  const [textProfileModalActive, setTextProfileModalActive] = useState(1)
  const [routeUser, setRouteUser] = useState({ start: 0, end: 1 })
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              profileModal={profileModal}
              setProfileModal={setProfileModal}
              textProfileModalActive={textProfileModalActive}
              setTextProfileModalActive={setTextProfileModalActive}
            />
          }
        />
        <Route
          path="/routes"
          element={
            <RoutesPage
              profileModal={profileModal}
              setProfileModal={setProfileModal}
              textProfileModalActive={textProfileModalActive}
              setTextProfileModalActive={setTextProfileModalActive}
              setRouteUser={setRouteUser}
            />
          }
        />
        <Route
          path="/route"
          element={
            <RoutePage
              profileModal={profileModal}
              setProfileModal={setProfileModal}
              textProfileModalActive={textProfileModalActive}
              setTextProfileModalActive={setTextProfileModalActive}
              routeUser={routeUser}
            />
          }
        />
        <Route
          path="/info"
          element={
            <InfoPage
              profileModal={profileModal}
              setProfileModal={setProfileModal}
              textProfileModalActive={textProfileModalActive}
              setTextProfileModalActive={setTextProfileModalActive}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
