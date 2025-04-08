import { useState } from "react"
import Home from "./pages/home/home.jsx"
import { RoutesPage } from "./pages/routesPage/routesPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [profileModal, setProfileModal] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              profileModal={profileModal}
              setProfileModal={setProfileModal}
            />
          }
        />
        <Route
          path="/routes"
          element={
            <RoutesPage
              profileModal={profileModal}
              setProfileModal={setProfileModal}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
