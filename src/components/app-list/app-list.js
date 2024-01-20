import "./app-list.scss";
import AppListItem from "../app-list-item/app-list-item";

const AppList = ({ data, onDeleteEmployee, onToggleState }) => {
	const arrayElements = data.map(item => {
		const { id, ...otherParameters } = item;
		return <AppListItem {...otherParameters} id={id} onToggleState={onToggleState} onDeleteEmployee={() => onDeleteEmployee(id)} key={id} />;
	});

	return (
		<ul className="app-list">
			{arrayElements}
		</ul>
	);
}

export default AppList;