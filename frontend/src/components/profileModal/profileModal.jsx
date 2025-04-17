import "./profileModal.scss"
import { Link } from "react-router-dom"
export const ProfileModal = ({
  textProfileModalActive,
  setTextProfileModalActive,
  setProfileModal,
}) => {
  const handleProfileModal = (p) => {
    setProfileModal(false)
    setTextProfileModalActive(p)
  }
  return (
    <div className="profileModal">
      <Link
        to="/"
        style={{ textDecoration: "none", width: "calc(100% - 41px" }}
      >
        <div
          className={
            textProfileModalActive === 1
              ? "textProfileModalActive"
              : "textProfileModal"
          }
          onClick={() => handleProfileModal(1)}
        >
          Главная
        </div>
      </Link>
      <Link
        to="/routes"
        style={{ textDecoration: "none", width: "calc(100% - 41px)" }}
      >
        {" "}
        <div
          className={
            textProfileModalActive === 2
              ? "textProfileModalActive"
              : "textProfileModal"
          }
          onClick={() => handleProfileModal(2)}
        >
          Маршруты
        </div>
      </Link>
      <Link
        to="/info"
        style={{ textDecoration: "none", width: "calc(100% - 41px)" }}
      >
        {" "}
        <div
          className={
            textProfileModalActive === 3
              ? "textProfileModalActive"
              : "textProfileModal"
          }
          onClick={() => handleProfileModal(3)}
        >
          О нас
        </div>
      </Link>
      <Link
        to="/routes"
        style={{ textDecoration: "none", width: "calc(100% - 41px)" }}
      >
        <div
          className={
            textProfileModalActive === 4
              ? "textProfileModalActive"
              : "textProfileModal"
          }
          style={{ borderBottom: "none" }}
          onClick={() => handleProfileModal(4)}
        >
          Отзывы
        </div>
      </Link>
    </div>
  )
}
