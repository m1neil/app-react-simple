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
			]
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

	render() {
		const countLikeEmployees = this.state.data.filter(item => item.like).length;

		return (
			<div className="app" >
				<div className="app__container">
					<AppInfo countEmployees={this.state.data.length} countLikeEmployees={countLikeEmployees} />
					<div className="app-searching">
						<AppInputSearch />
						<AppFilter />
					</div>
					<AppList data={this.state.data} onDeleteEmployee={this.onDeleteEmployee} onToggleState={this.onToggleState} />
					<AppForm onAddEmployee={this.onAddEmployee} />
				</div>
			</div>
		)
	}
}

export default App;