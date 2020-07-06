import {ApolloProvider} from "@apollo/react-hooks";
import {BrowserRouter} from "react-router-dom";

export default function withRouter(Component) {

  function WithRouter(props) {
    return <BrowserRouter>
      <Component {...props}/>
    </BrowserRouter>
  }

  WithRouter.displayName = `WithRouter(${
    Component.displayName || Component.name || 'Component'
  })`

  return WithRouter
}
