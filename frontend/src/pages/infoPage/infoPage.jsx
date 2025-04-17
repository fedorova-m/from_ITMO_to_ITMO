import { Header } from "../../components/header/header"
import { ProfileModal } from "../../components/profileModal/profileModal"
import "./infoPage.scss"
export const InfoPage = ({
  profileModal,
  setProfileModal,
  textProfileModalActive,
  setTextProfileModalActive,
}) => {
  return (
    <div className="infoPage">
      <Header setProfileModal={setProfileModal} />
      <div className="titleRoutePage">О нас</div>
      {profileModal && (
        <div className="profileModalRoutesPage">
          <ProfileModal
            textProfileModalActive={textProfileModalActive}
            setTextProfileModalActive={setTextProfileModalActive}
            setProfileModal={setProfileModal}
          />
        </div>
      )}
    </div>
  )
}
