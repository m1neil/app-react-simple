import './app-info.scss';

const AppInfo = () => {
   return (
      <div className="app-info">
         <h1 className="app-info__title">Employee accounting in the company N</h1>
         <div className="app-info__count">Total number of employees:</div>
         <div className="app-info__count-praise">The prize will be received by:</div>
      </div>
   );
}

export default AppInfo;