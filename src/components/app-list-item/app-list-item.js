import imageFavorite from '../../img/favorite.svg';
import imageStar from '../../img/star.svg';
import imageTrash from '../../img/trash.svg';

import './app-list-item.scss';

const AppListItem = ({ name, salary, onDeleteEmployee, favorite, like, onToggleState, id }) => {

	let classList = 'app-item';
	if (favorite) classList += ' _favorite';
	if (like) classList += ' _like';

	const onClickButton = (event) => {
		onToggleState(id, event.currentTarget.getAttribute('data-name'));
	}

	return (
		<li className={classList}>
			<div className="app-item__name">
				<span data-name="like" onClick={onClickButton} >{name}</span>
			</div>
			<input type="text" className="app-item__salary" defaultValue={salary + '$'} placeholder="salary..." />
			<div className="app-item__actions">
				<button onClick={onClickButton} data-name="favorite" className="app-item__button">
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