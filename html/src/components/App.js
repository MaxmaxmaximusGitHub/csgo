import withCurrentUser from "../lib/withCurrentUser";
import withApollo from "../lib/withApollo";
import Game from "./AdminPanel/AdminPanel";
import Header from "./Header";


function App() {
  return <>
    <Header/>
    <Game/>
  </>
}

App = withCurrentUser(App);
App = withApollo(App);

export default App

