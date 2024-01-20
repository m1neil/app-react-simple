import "./app-filter.scss";

const AppFilter = ({currentFilter,onChangeFilter}) => {
   const arrayButton = [
      {
         filter: 'all',
         text: 'All Employees'
      },
      {
         filter: 'promotion',
         text: 'Up for promotion'
      },
      {
         filter: 'moreThanThousand',
         text: 'Salary more than $1000'
      }
   ]

   const buttonElements = arrayButton.map(({filter, text}) => {
      let classList = 'app-filter__button';
      if (filter === currentFilter) classList += ' _active';
      return <button onClick={onChangeFilter} data-filter={filter} className={classList}>{text}</button>
   })

   return (
      <div className="app-filter">
         {buttonElements}
      </div>
   );
}

export default AppFilter;