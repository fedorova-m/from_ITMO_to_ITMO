import logo from "../../assets/img/logo.png"
import "./header.scss"
export const Header = ({ setProfileModal }) => {
  const openProfileModal = () => {
    setProfileModal((pr) => !pr)
  }
  return (
    <div className="header">
      <img src={logo} alt={logo} className="logoHeader" />
      <svg
        onClick={openProfileModal}
        style={{ cursor: "pointer" }}
        width="39"
        height="40"
        viewBox="0 0 39 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 37.9167C24.1584 37.9167 28.3867 36.1429 31.5759 33.2225C31.3967 31.5383 30.3217 29.89 28.4046 28.6C23.5313 25.3392 15.5046 25.3392 10.5955 28.6C8.67837 29.89 7.60337 31.5383 7.42421 33.2225C10.6134 36.1429 14.8417 37.9167 19.5 37.9167ZM19.5 37.9167C29.3951 37.9167 37.4167 29.8951 37.4167 20C37.4167 10.1049 29.3951 2.08333 19.5 2.08333C9.60494 2.08333 1.58337 10.1049 1.58337 20C1.58337 29.8951 9.60494 37.9167 19.5 37.9167ZM19.715 21.3975C19.5896 21.3796 19.4284 21.3796 19.285 21.3975C16.1317 21.29 13.6234 18.71 13.6234 15.5387C13.6234 12.2958 16.2392 9.66208 19.5 9.66208C22.743 9.66208 25.3767 12.2958 25.3767 15.5387C25.3588 18.71 22.8684 21.29 19.715 21.3975Z"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
