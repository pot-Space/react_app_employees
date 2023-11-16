// Импорт блока стандартных компонентов
import { Component } from 'react';

// Импорт блока кастомных компонентов
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

// Импорт блока стилей
import './app.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: 'First N.', salary: 3000, increase: false, id: 1 },
            { name: 'Second A.', salary: 2000, increase: false, id: 2 },
            { name: 'Third M.', salary: 5000, increase: false, id: 3 }
         ]
      };
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {
         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }

   render() {
      return (
         <div className="app">
            <AppInfo />

            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>

            <EmployeesList
               data={this.state.data}
               onDelete={this.deleteItem} />
            <EmployeesAddForm />
         </div>
      );
   }
}

export default App;