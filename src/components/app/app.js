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
            { name: 'First N.', salary: 900, increase: false, rise: false, id: 1 },
            { name: 'Second A.', salary: 1000, increase: false, rise: false, id: 2 },
            { name: 'Third M.', salary: 5000, increase: false, rise: false, id: 3 }
         ],
         term: ''
      };
      this.maxId = 4;
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {
         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }

   addItem = (name, salary) => {
      if (name.trim().length > 0 && salary.trim() > 0) {
         const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
         }

         this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
               data: newArr
            }
         })
      }
   }

   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         // меняем состояние у выбранного элемента на противоположное
         // путём создания нового объекта с изменением только в выбранном элементе
         data: data.map(item => {
            if (item.id === id) {
               return { ...item, [prop]: !item[prop] }
            }
            return item;
         })
      }))
   }

   onUpdateSearch = (term) => {
      // this.setState({ term: term }) полная запись присовения локальной term в глобальную
      this.setState({ term }) // короткая запись
   }

   searchEmployees = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => {
         return item.name.indexOf(term) > -1;
      });
   }

   render() {
      const { data, term } = this.state;
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      const visibleData = this.searchEmployees(data, term);

      return (
         <div className="app">
            <AppInfo
               employees={employees}
               increased={increased}
            />

            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter />
            </div>

            <EmployeesList
               data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp} />

            <EmployeesAddForm onAdd={this.addItem} />
         </div>
      );
   }
}

export default App;