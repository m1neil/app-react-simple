import './app-list-item.scss';
import favorite from '../../img/favorite.svg';
import star from '../../img/star.svg';
import trash from '../../img/trash.svg';

const AppListItem = () => {
   return (
      <li className="app-item">
         <div className="app-item__name">John C.</div>
         <input type="text" className="app-item__salary" defaultValue="800" placeholder="salary..."/>
         <div className="app-item__actions">
            <button className="app-item__button">
               <img src={favorite} alt="button favorite"/>
            </button>
            <button className="app-item__button">
               <img src={trash} alt="button delete"/>
            </button>
            <button className="app-item__button app-item__button--transparent-bg">
               <img src={star} alt="button like"/>
            </button>
         </div>
      </li>
   )
}

export default AppListItem;