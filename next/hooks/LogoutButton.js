import logoutIcon from "../res/images/logout.svg";
import ActionButton from "../components/Header/ActionButton";


export default function LogoutButton() {

  function onClick() {
    location.href = '/auth/logout'
  }

  return <ActionButton
    onClick={onClick}
    icon={logoutIcon}
    bg={false}
  />
}

