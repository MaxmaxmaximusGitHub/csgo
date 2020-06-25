import styles from './Nav.styl'
import {NavLink} from "react-router-dom"
import {pages} from "../admin"


export default function Nav() {

  return <div className={styles.nav}>
    <nav>
      {pages.map(({name, url}) => (
        <NavLink
          key={url}
          exact={true}
          className={styles.link}
          activeClassName={styles.__active}
          to={url}>
          {name}
        </NavLink>
      ))}
    </nav>
  </div>
}




