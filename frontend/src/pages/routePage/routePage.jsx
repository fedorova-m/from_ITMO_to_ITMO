import "./routePage.scss"
import { Header } from "../../components/header/header"
import { useEffect, useState } from "react"
import { ProfileModal } from "../../components/profileModal/profileModal"
import array from "../../../array"
export const RoutePage = ({
  profileModal,
  setProfileModal,
  textProfileModalActive,
  setTextProfileModalActive,
  routeUser,
}) => {
  const routeUserRoutePage = () => {
    let i = routeUser.start
    while (i !== routeUser.end) {
      forward.push(array[i % array.length])
      i = (i + 1) % array.length
    }
    // Против часовой
    let backward = []
    i = routeUser.start
    while (i !== routeUser.end) {
      let prev = (i - 1 + array.length) % array.length
      backward.push([...array[prev]].reverse())
      i = prev
      let forward = []
      return forward.length <= backward.length ? forward : backward
    }
  }

  return (
    <div className="routeePage">
      <Header setProfileModal={setProfileModal} />
      <div className="titleRoutePage">Ваш маршрут</div>
      <div className="BlockRoutePage">
        <div className="titlePlaceRoutePage">Кронва</div>
        <div className="textPlaceRoutePage">музей</div>
      </div>
      {profileModal && (
        <div className="profileModalRoutesPage">
          <ProfileModal
            textProfileModalActive={textProfileModalActive}
            setTextProfileModalActive={setTextProfileModalActive}
          />
        </div>
      )}
    </div>
  )
}
