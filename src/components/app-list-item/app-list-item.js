import './app-list-item.scss';
import imageFavorite from '../../img/favorite.svg';
import imageStar from '../../img/star.svg';
import imageTrash from '../../img/trash.svg';
import { Component } from "react";

class AppListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: this.props.favorite,
			like: this.props.like
		}
	}

	onChangeStatusFavorite = () => {
		this.setState(({ favorite }) => ({
			favorite: !favorite
		}));
	}

	onChangeLike = () => {
		this.setState(({ like }) => ({
			like: !like
		}))
	}

	render() {
		const { name, salary, onDeleteEmployee } = this.props;
		const { favorite, like } = this.state;

		let classList = 'app-item';
		if (favorite) classList += ' _favorite';
		if (like) classList += ' _like';

		return (
			<li className={classList}>
				<div className="app-item__name">
					<span onClick={this.onChangeLike}>{name}</span>
				</div>
				<input type="text" className="app-item__salary" defaultValue={salary + '$'} placeholder="salary..." />
				<div className="app-item__actions">
					<button onClick={this.onChangeStatusFavorite} className="app-item__button">
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
}

export default AppListItem;