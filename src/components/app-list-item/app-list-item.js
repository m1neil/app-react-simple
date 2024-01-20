import imageFavorite from '../../img/favorite.svg';
import imageStar from '../../img/star.svg';
import imageTrash from '../../img/trash.svg';

import './app-list-item.scss';

const AppListItem = ({ name, salary, onDeleteEmployee, favorite, like, onToggleState }) => {

	let classList = 'app-item';
	if (favorite) classList += ' _favorite';
	if (like) classList += ' _like';

	return (
		<li className={classList}>
			<div className="app-item__name">
				<span data-name="like" onClick={onToggleState}>{name}</span>
			</div>
			<input type="text" className="app-item__salary" defaultValue={salary + '$'} placeholder="salary..." />
			<div className="app-item__actions">
				<button onClick={onToggleState} data-name="favorite" className="app-item__button">
					<img src={imageFavorite} alt="button favorite" />
				</button>
				<button className="app-item__button">
					<img src={imageTrash} onClick={onDeleteEmployee} alt="button delete" />
				</button>
				<span className="app-item__button app-item__button--transparent-bg">
					<img src={imageStar} alt="button like" />
				</span>
			</div>
		</li>
	)

}

export default AppListItem;