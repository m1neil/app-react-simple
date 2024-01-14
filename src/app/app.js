import './app.scss'
import AppInfo from "../app-info/app-info";
import AppInputSearch from "../app-input-search/app-input-search";
import AppFilter from "../app-filter/app-filter";

const App = () => {
   return (
      <div className="app">
         <div className="app__container">
            <AppInfo/>
            <div className="app-searching">
               <AppInputSearch/>
               <AppFilter/>
            </div>
         </div>
      </div>
   )
}

export default App;