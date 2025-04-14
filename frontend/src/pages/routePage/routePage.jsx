import { Header } from "../../components/header/header"
import "./routePage.scss"
import { useEffect, useState } from "react"
import { ProfileModal } from "../../components/profileModal/profileModal"
import array from "../../array.js"
import logo from "../../assets/img/logo.png"
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
      <div className="blockInfoRoutePage">
        <div className="blockRoutePage">
          {routes.map((route, i) => (
            <div key={i}>
              <div className="fromToTextRoutePage">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5001 19.5854C20.013 19.5854 22.0501 17.5483 22.0501 15.0354C22.0501 12.5225 20.013 10.4854 17.5001 10.4854C14.9872 10.4854 12.9501 12.5225 12.9501 15.0354C12.9501 17.5483 14.9872 19.5854 17.5001 19.5854Z"
                    stroke="#292D32"
                    strokeWidth="3"
                  />
                  <path
                    d="M5.27931 12.3812C8.15223 -0.247923 26.8626 -0.23334 29.721 12.3958C31.3981 19.8042 26.7897 26.075 22.7501 29.9542C19.8189 32.7833 15.1814 32.7833 12.2356 29.9542C8.21056 26.075 3.60223 19.7896 5.27931 12.3812Z"
                    stroke="#292D32"
                    strokeWidth="3"
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
                        • {place.address}
                      </div>
                    </div>
                  ))}
                </div>{" "}
              </div>
              <div className="fromToTextRoutePage">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5001 19.5854C20.013 19.5854 22.0501 17.5483 22.0501 15.0354C22.0501 12.5225 20.013 10.4854 17.5001 10.4854C14.9872 10.4854 12.9501 12.5225 12.9501 15.0354C12.9501 17.5483 14.9872 19.5854 17.5001 19.5854Z"
                    stroke="#292D32"
                    strokeWidth="3"
                  />
                  <path
                    d="M5.27931 12.3812C8.15223 -0.247923 26.8626 -0.23334 29.721 12.3958C31.3981 19.8042 26.7897 26.075 22.7501 29.9542C19.8189 32.7833 15.1814 32.7833 12.2356 29.9542C8.21056 26.075 3.60223 19.7896 5.27931 12.3812Z"
                    stroke="#292D32"
                    strokeWidth="3"
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
                <div className="imgObjectRouteContainer"></div>
                <div className="titleInfoObjectRoutePage">
                  {selectedPlace.address}
                </div>
                <div className="lineContInfoObjectRoutePage">
                  <div className="lineInfoObjectRoutePage">
                    <div className="textLeftInfoObjectRoutePage">Адрес</div>
                    <div className="addressInfoObjectRoutePage">
                      {selectedPlace.address}
                    </div>
                  </div>
                  <div className="lineInfoObjectRoutePage">
                    <div className="textLeftInfoObjectRoutePage">Описание</div>
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
