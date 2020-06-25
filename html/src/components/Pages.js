import {Switch, Route, Link} from "react-router-dom"
import styles from './Pages.styl'


export default function Pages({pages}) {

  return <div className={styles.pages}>
      <Switch>
        {pages.map(({url, Page}) => (
          <Route key={url} path={url} exact={true}>
            <Page/>
          </Route>
        ))}
      </Switch>
  </div>
}
