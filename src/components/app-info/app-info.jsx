import './app-info.css';

const AppInfo = ({ employees, increased }) => {
   return (
      <div className="app-info">
         <h1>Учет пользователей в PSpace</h1>
         <h2>Общее число пользователей: {employees}</h2>
         <h2>Премию получат: {increased}</h2>
      </div>
   )
}

export default AppInfo;