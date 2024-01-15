import './app-form.scss';

const AppForm = () => {
   return (
      <div className="app-form">
         <div className="app-form__title">Add new employee</div>
         <form action="#" className="app-form form">
            <input type="text" className="form__input" placeholder="What's his name?"/>
            <input type="text" className="form__input" placeholder="Salary in $"/>
            <button className="form__button">Add</button>
         </form>
      </div>
   );
}

export default AppForm;