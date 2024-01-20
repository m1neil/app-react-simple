import './app-info.scss';

const AppInfo = ({ countEmployees, countLikeEmployees }) => {
	return (
		<div className="app-info">
			<h1 className="app-info__title">Employee accounting in the company N</h1>
			<div className="app-info__count">Total number of employees: {countEmployees}</div>
			<div className="app-info__count-praise">The prize will be received by: {countLikeEmployees}</div>
		</div>
	);
}

export default AppInfo;