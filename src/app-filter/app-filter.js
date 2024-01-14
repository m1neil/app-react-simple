import "./app-filter.scss";

const AppFilter = () => {
	return (
		<div className="app-filter">
			<button className="app-filter__button">All Employees</button>
			<button className="app-filter__button">Up for promotion</button>
			<button className="app-filter__button">Salary more than $1000</button>
		</div>
	);
}

export default AppFilter;