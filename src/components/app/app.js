import './app.scss'
import AppInfo from "../app-info/app-info";
import AppInputSearch from "../app-input-search/app-input-search";
import AppFilter from "../app-filter/app-filter";
import AppList from "../app-list/app-list";
import AppForm from "../app-form/app-form";

const App = () => {
   return (
      <div className="app">
         <div className="app__container">
            <AppInfo/>
            <div className="app-searching">
               <AppInputSearch/>
               <AppFilter/>
            </div>
            <AppList/>
            <AppForm/>
         </div>
      </div>
   )
}

export default App;