import "./routesPage.scss"
import { Header } from "../../components/header/header"
import map from "../../assets/img/map.png"
import { useEffect, useState } from "react"
import { ProfileModal } from "../../components/profileModal/profileModal"
import { Link } from "react-router-dom"
export const RoutesPage = ({
  profileModal,
  setProfileModal,
  textProfileModalActive,
  setTextProfileModalActive,
  setRouteUser,
}) => {
  const caseArr1 = [
    "Кронверский пр. 49",
    "ул. Чайковского, 11/2",
    "ул. Ломоносова д.9",
    "пер. Гривцова, 14-16",
    "Биржевая линия, 14",
  ]
  const caseArr2 = [
    "Кронверский пр. 49",
    "ул. Чайковского, 11/2",
    "ул. Ломоносова д.9",
    "пер. Гривцова, 14-16",
    "Биржевая линия, 14",
  ]
  const [waypoints, setWaypoints] = useState({
    start: caseArr1[0],
    end: caseArr2[0],
  })
  const [departureBuildingActive, setDepartureBuildingActive] = useState(0)
  const [arrivalBuildingActive, setArrivalBuildingActive] = useState(0)
  const handleDeparture = (i) => {
    setDepartureBuildingActive(i)
    setWaypoints((prevWaypoints) => ({
      ...prevWaypoints,
      start: caseArr1[i],
    }))
  }

  const handleArrival = (i) => {
    setArrivalBuildingActive(i)
    setWaypoints((prevWaypoints) => ({
      ...prevWaypoints,
      end: caseArr2[i],
    }))
  }
  useEffect(() => {
    console.log(waypoints)
  }, [waypoints])
  useEffect(() => {
    setRouteUser({
      start: departureBuildingActive,
      end: arrivalBuildingActive,
    })
  }, [departureBuildingActive, arrivalBuildingActive])
  return (
    <div className="routesPage">
      <Header setProfileModal={setProfileModal} />
      <div className="titleRoutesPage">Маршруты</div>
      <div className="text1RoutesPage">
        Главные Корпуса ИТМО расположены по кругу, поэтому наши маршруты в сумме
        представляют кольцевую, как на фотографии ниже
      </div>
      <img className="mapPngRoutesPage" src={map} alt="map" />
      <div className="housingSelectionBlock">
        <div className="textLineRoutesPage">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9999 16.7875C17.1538 16.7875 18.8999 15.0414 18.8999 12.8875C18.8999 10.7336 17.1538 8.9875 14.9999 8.9875C12.846 8.9875 11.0999 10.7336 11.0999 12.8875C11.0999 15.0414 12.846 16.7875 14.9999 16.7875Z"
              stroke="#292D32"
              stroke-width="1.5"
            />
            <path
              d="M4.52488 10.6125C6.98738 -0.212497 23.0249 -0.199997 25.4749 10.625C26.9124 16.975 22.9624 22.35 19.4999 25.675C16.9874 28.1 13.0124 28.1 10.4874 25.675C7.03738 22.35 3.08738 16.9625 4.52488 10.6125Z"
              stroke="#292D32"
              stroke-width="1.5"
            />
          </svg>{" "}
          <div className="text1RoutesPage">
            Выберите корпус отправления и корпус прибытия для построения
            маршрута
          </div>{" "}
        </div>
        <div className="caseSelectionRoutesPage">
          <div className="blockCaseSelectionRoutesPage">
            <div className="labelCaseSelectionRoutesPage">
              Корпус отправления
            </div>
            <div className="containerCaseSelectionRoutesPage">
              {caseArr1.map((c, index) => (
                <div
                  onClick={() => handleDeparture(index)}
                  className={
                    departureBuildingActive === index
                      ? "textContainerCaseSelectionRoutesPageActive"
                      : "textContainerCaseSelectionRoutesPage"
                  }
                >
                  • {c}
                </div>
              ))}
            </div>
          </div>
          <div className="blockCaseSelectionRoutesPage">
            <div className="labelCaseSelectionRoutesPage">Корпус прибытия</div>
            <div className="containerCaseSelectionRoutesPage">
              {caseArr2.map((c, index) => (
                <div
                  onClick={() => handleArrival(index)}
                  className={
                    arrivalBuildingActive === index
                      ? "textContainerCaseSelectionRoutesPageActive"
                      : "textContainerCaseSelectionRoutesPage"
                  }
                >
                  • {c}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/route" style={{ textDecoration: "none" }}>
          <div
            className="bottomBtnRoutersPage"
            onClick={() => setTextProfileModalActive(3)}
          >
            Начать маршрут
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2401 7.90662L27.3334 16L19.2401 24.0933M4.66675 16H27.1067"
                stroke="#292D32"
                stroke-width="2.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
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
