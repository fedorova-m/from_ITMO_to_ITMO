import { Header } from "../../components/header/header"
import "./routePage.scss"
import { useEffect, useState } from "react"
import { ProfileModal } from "../../components/profileModal/profileModal"
import array from "../../array.js"
import { Link } from "react-router-dom"
import images from "../../utils/importImage.js"
export const RoutePage = ({
  profileModal,
  setProfileModal,
  textProfileModalActive,
  setTextProfileModalActive,
  routeUser,
}) => {
  const [routes, setRoutes] = useState([])
  const [selectedPlace, setSelectedPlace] = useState(null)
  const routeUserRoutePage = () => {
    const startIndex = routeUser.start
    const endIndex = routeUser.end
    const arrayLength = array.length

    // 1. Прямой маршрут (по часовой стрелке)
    let forwardData = []
    let forwardSteps = 0
    let current = startIndex

    while (current !== endIndex) {
      forwardData.push(...array[current].slice(1))
      current = (current + 1) % arrayLength
      forwardSteps++
    }

    // 2. Обратный маршрут (против часовой стрелки)
    let backwardData = []
    let backwardSteps = 0
    current = startIndex

    while (current !== endIndex) {
      current = (current - 1 + arrayLength) % arrayLength
      backwardData.push(...[...array[current].slice(1)].reverse()) // reverse: от end к start
      backwardSteps++
    }

    const startName = array[startIndex][0].start
    const endName = array[endIndex][0].start

    // 3. Сравнение по количеству шагов (корпусов)
    const chosen =
      forwardSteps <= backwardSteps
        ? {
            direction: "Прямой маршрут",
            from: startName,
            to: endName,
            data: forwardData,
          }
        : {
            direction: "Обратный маршрут",
            from: startName,
            to: endName,
            data: backwardData,
          }

    return [chosen]
  }
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "..."
    }
    return str
  }
  useEffect(() => {
    if (routeUser?.start != null && routeUser?.end != null) {
      const newRoutes = routeUserRoutePage()
      setRoutes(newRoutes)
      setSelectedPlace(newRoutes[0].data[0])
    }
  }, [routeUser])

  return (
    <div className="routePage">
      <Header setProfileModal={setProfileModal} />
      <div className="titleRoutePage">Ваш маршрут</div>
      <div className="containerRoutePage">
        <Link to="/routes" style={{ textDecoration: "none" }}>
          <div className="textBottomTitleRoutePage">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9625 7.41251L4.375 15L11.9625 22.5875M25.625 15H4.5875"
                stroke="#0E008F"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Назад
          </div>
        </Link>
        <div className="blockInfoRoutePage">
          <div className="blockRoutePage">
            {routes.map((route, i) => (
              <div key={i} className="blockRoutePage">
                <div className="fromToTextRoutePage">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5002 16.2279C16.5823 16.2279 18.2702 14.54 18.2702 12.4579C18.2702 10.3758 16.5823 8.68791 14.5002 8.68791C12.4181 8.68791 10.7302 10.3758 10.7302 12.4579C10.7302 14.54 12.4181 16.2279 14.5002 16.2279Z"
                      stroke="#292D32"
                      stroke-width="3"
                    />
                    <path
                      d="M4.37438 10.2587C6.7548 -0.205424 22.2577 -0.193341 24.6261 10.2708C26.0156 16.4092 22.1973 21.605 18.8502 24.8192C16.4215 27.1633 12.579 27.1633 10.1381 24.8192C6.80314 21.605 2.9848 16.3971 4.37438 10.2587Z"
                      stroke="#292D32"
                      stroke-width="3"
                    />
                  </svg>
                  {route.from}
                </div>
                <div className="blockObjectRoutePage">
                  <div className="blockObjectRoutePageScroll">
                    {route.data.map((place, index) => (
                      <div
                        className="objectRoutePage"
                        key={index}
                        onClick={() => setSelectedPlace(place)}
                      >
                        <div
                          key={index}
                          className={
                            selectedPlace === place
                              ? "titlePlaceRoutePageActive"
                              : "titlePlaceRoutePage"
                          }
                        >
                          • {truncateString(place.name, 28)}
                        </div>
                      </div>
                    ))}
                  </div>{" "}
                </div>
                <div className="fromToTextRoutePage">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5002 16.2279C16.5823 16.2279 18.2702 14.54 18.2702 12.4579C18.2702 10.3758 16.5823 8.68791 14.5002 8.68791C12.4181 8.68791 10.7302 10.3758 10.7302 12.4579C10.7302 14.54 12.4181 16.2279 14.5002 16.2279Z"
                      stroke="#292D32"
                      stroke-width="3"
                    />
                    <path
                      d="M4.37438 10.2587C6.7548 -0.205424 22.2577 -0.193341 24.6261 10.2708C26.0156 16.4092 22.1973 21.605 18.8502 24.8192C16.4215 27.1633 12.579 27.1633 10.1381 24.8192C6.80314 21.605 2.9848 16.3971 4.37438 10.2587Z"
                      stroke="#292D32"
                      stroke-width="3"
                    />
                  </svg>
                  {route.to}
                </div>
              </div>
            ))}
          </div>
          <div className="infoObjectContRoutePage">
            <div className="infoObjectRoutePage">
              {selectedPlace ? (
                <>
                  <div className="imgObjectRouteContainer">
                    <img
                      className="imgObjectRouteContainer"
                      src={images[selectedPlace.image]}
                      alt={selectedPlace.image}
                    />
                  </div>
                  <div className="titleInfoObjectRoutePage">
                    {selectedPlace.name}
                  </div>
                  <div className="lineContInfoObjectRoutePage">
                    <div className="lineInfoObjectRoutePage">
                      <div className="textLeftInfoObjectRoutePage">Адрес</div>
                      <div className="addressInfoObjectRoutePage">
                        {selectedPlace.address}
                      </div>
                    </div>
                    <div className="lineInfoObjectRoutePage">
                      <div className="textLeftInfoObjectRoutePage">
                        Описание
                      </div>
                      <div className="lineInfoObjectRoutePageScroll">
                        <div className="addressInfoObjectRoutePage">
                          {selectedPlace.info}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="emptyObjectRoutePage">Выберите объект</div>
              )}
            </div>
          </div>
        </div>
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
