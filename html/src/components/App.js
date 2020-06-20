import withCurrentUser from "../lib/withCurrentUser";
import withApollo from "../lib/withApollo";
import AdminPanel from "./AdminPanel/AdminPanel";
import styles from './App.styl'
import Header from "./Header";
import Chat from "./Chat/Chat";


function App() {
  return <>
    <Header/>
    <Chat/>
    <Chat/>
  </>
}

App = withCurrentUser(App);
App = withApollo(App);

export default App

