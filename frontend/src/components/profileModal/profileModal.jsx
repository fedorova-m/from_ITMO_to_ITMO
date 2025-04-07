import { useState } from "react"
import "./profileModal.scss"
export const ProfileModal = () => {
  const [textProfileModalActive, setTextProfileModalActive] = useState(1)
  return (
    <div className="profileModal">
      <div
        className={
          textProfileModalActive === 1
            ? "textProfileModalActive"
            : "textProfileModal"
        }
        onClick={() => setTextProfileModalActive(1)}
      >
        Главная
      </div>
      <div
        className={
          textProfileModalActive === 2
            ? "textProfileModalActive"
            : "textProfileModal"
        }
        onClick={() => setTextProfileModalActive(2)}
      >
        Маршруты
      </div>
      <div
        className={
          textProfileModalActive === 3
            ? "textProfileModalActive"
            : "textProfileModal"
        }
        onClick={() => setTextProfileModalActive(3)}
      >
        О нас
      </div>
      <div
        className={
          textProfileModalActive === 4
            ? "textProfileModalActive"
            : "textProfileModal"
        }
        style={{ borderBottom: "none" }}
        onClick={() => setTextProfileModalActive(4)}
      >
        Отзывы
      </div>
    </div>
  )
}
