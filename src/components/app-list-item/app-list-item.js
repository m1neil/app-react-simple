import './app-list-item.scss';
import imageFavorite from '../../img/favorite.svg';
import imageStar from '../../img/star.svg';
import imageTrash from '../../img/trash.svg';

const AppListItem = ({name, salary, favorite}) => {
   let classList = 'app-item';
   if (favorite) classList += ' _favorite';

   return (
      <li className={classList}>
         <div className="app-item__name">{name}</div>
         <input type="text" className="app-item__salary" defaultValue={salary + '$'} placeholder="salary..."/>
         <div className="app-item__actions">
            <button className="app-item__button">
               <img src={imageFavorite} alt="button favorite"/>
            </button>
            <button className="app-item__button">
               <img src={imageTrash} alt="button delete"/>
            </button>
            <span className="app-item__button app-item__button--transparent-bg">
               <img src={imageStar} alt="button like"/>
            </span>
         </div>
      </li>
   )
}

export default AppListItem;