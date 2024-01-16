import './app.scss'
import AppInfo from "../app-info/app-info";
import AppInputSearch from "../app-input-search/app-input-search";
import AppFilter from "../app-filter/app-filter";
import AppList from "../app-list/app-list";
import AppForm from "../app-form/app-form";
import AppListItem from "../app-list-item/app-list-item";

const App = () => {

   const data = [
      {
         id: 1,
         name: "John S.",
         salary: 800,
         favorite: false,
      },
      {
         id: 2,
         name: "Alex V.",
         salary: 2000,
         favorite: false,
      },
      {
         id: 3,
         name: "Deniel P.",
         salary: 5500,
         favorite: true,
      },
   ];

   return (
      <div className="app">
         <div className="app__container">
            <AppInfo/>
            <div className="app-searching">
               <AppInputSearch/>
               <AppFilter/>
            </div>
            <AppList data={data}/>
            <AppForm/>
         </div>
      </div>
   )
}

export default App;