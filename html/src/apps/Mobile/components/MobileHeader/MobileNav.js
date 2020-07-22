import styles from './MobileNav.styl'
import {NavLink} from "react-router-dom"


export default function MobileNav({pages}) {

  return <div className={styles.MobileNav}>

    <div className={styles.links}>
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
  </div>
}


