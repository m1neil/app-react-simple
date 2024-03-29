import { Component } from 'react';
import './app-form.scss';

class AppForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onUpdateInputs = event => {
		this.setState(() => ({
			[event.target.name]: event.target.value
		}));
	}

	onSubmitForm = (event) => {
		event.preventDefault();
		const { name, salary } = this.state;
		if (!name.trim().length || !salary.trim().length) return;

		this.props.onAddEmployee(name, salary);

		this.setState({
			name: '',
			salary: ''
		});
	}

	render() {
		const { name, salary } = this.state;

		return (
			<div className="app-form">
				<div className="app-form__title">Add new employee</div>
				<form onSubmit={this.onSubmitForm} action="#" className="app-form form">
					<input
						onChange={this.onUpdateInputs}
						value={name}
						name="name"
						type="text"
						className="form__input"
						placeholder="What's his name?"
					/>
					<input
						onChange={this.onUpdateInputs}
						value={salary}
						name="salary"
						type="text"
						className="form__input"
						placeholder="Salary in $"
					/>
					<button className="form__button">Add</button>
				</form>
			</div>
		);
	}
}

export default AppForm;