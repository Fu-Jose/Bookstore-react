import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'
import CommentsArea from './components/CommentsArea'
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'


function App() {
  return (
    <div className="App">
      <MyNav/>
      <Welcome/>
      <LatestRelease/>
      {/* <WarningSign message="ERROR"/> */}
      {/* <MyBadge text="BADGE #233002" color="success"/> */}
      <CommentsArea/>
      <MyFooter/>
    </div>
  );
}

export default App;
