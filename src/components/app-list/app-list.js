import "./app-list.scss";
import AppListItem from "../app-list-item/app-list-item";

const AppList = ({ data, onDeleteEmployee }) => {
	const arrayElements = data.map(item => {
		const { id, ...otherParameters } = item;
		return <AppListItem {...otherParameters} onDeleteEmployee={() => onDeleteEmployee(id)} key={id} />;
	});

	return (
		<ul className="app-list">
			{arrayElements}
		</ul>
	);
}

export default AppList;