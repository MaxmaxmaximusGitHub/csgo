import styles from './Nav.styl'
import {pages} from "../desktop"
import {NavLink} from "react-router-dom"


export default function Nav() {

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


