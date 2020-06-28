import styles from './DesktopNav.styl'
import {NavLink} from "react-router-dom"


export default function DesktopNav({pages}) {

  return <div className={styles.nav}>
    {pages.map(page => (
      <NavLink
        key={page.url}
        exact={true}
        className={styles.link}
        activeClassName={styles.__active}
        to={page.url}>
        {page.name}
      </NavLink>
    ))}
  </div>
}


