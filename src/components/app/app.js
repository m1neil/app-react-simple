import AppInfo from "../app-info/app-info";
import AppInputSearch from "../app-input-search/app-input-search";
import AppFilter from "../app-filter/app-filter";
import AppList from "../app-list/app-list";
import AppForm from "../app-form/app-form";

import './app.scss'
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					name: "John S.",
					salary: 800,
					favorite: false,
					like: false
				},
				{
					id: 2,
					name: "Alex V.",
					salary: 2000,
					favorite: false,
					like: true
				},
				{
					id: 3,
					name: "Deniel P.",
					salary: 5500,
					favorite: true,
					like: false
				},
			],
			strSearch: '',
			currentFilter: 'all'
		}
		this.maxId = this.state.data.length;
	}

	onDeleteEmployee = (id) => {
		this.setState(({ data }) => ({
			data: data.filter(item => item.id !== id)
		}));
	}

	onAddEmployee = (name, salary) => {
		const newEmployee = {
			id: ++this.maxId,
			name: name,
			salary: salary,
			favorite: false,
			like: false
		}
		this.setState(({ data }) => ({
			data: [...data, newEmployee]
		}));
	}

	onToggleState = (id, key) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [key]: !item[key] }
				}
				return item;
			})
		}));
	}

	updateStrSearch = (str) => {
		this.setState({
			strSearch: str
		});
	}

	filterDataBehindSearch = (data, strSearch) => {
		if (!strSearch.length) return data;
		return data.filter(item => item.name.startsWith(strSearch));
	}

	onChangeFilter = (event) => {
		this.setState({
			currentFilter:  event.target.getAttribute('data-filter')
		});
	}

	filterDataBehindFilter = (data, currentFilter) => {
		switch (currentFilter) {
			case 'promotion':
				return data.filter(item => item.like);
			case 'moreThanThousand':
				return data.filter(item => item.salary > 1000);
			default:
				return data
		}
	}

	render() {
		const countLikeEmployees = this.state.data.filter(item => item.like).length;
		const {data, strSearch, currentFilter} = this.state;
		const filterData = this.filterDataBehindFilter(this.filterDataBehindSearch(data, strSearch), currentFilter);

		return (
			<div className="app" >
				<div className="app__container">
					<AppInfo countEmployees={data.length} countLikeEmployees={countLikeEmployees} />
					<div className="app-searching">
						<AppInputSearch updateStrSearch={this.updateStrSearch}/>
						<AppFilter onChangeFilter={this.onChangeFilter} currentFilter={currentFilter} />
					</div>
					<AppList data={filterData} onDeleteEmployee={this.onDeleteEmployee} onToggleState={this.onToggleState} />
					<AppForm onAddEmployee={this.onAddEmployee} />
				</div>
			</div>
		)
	}
}

export default App;