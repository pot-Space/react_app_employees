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
            { name: 'First N.', salary: 3000, increase: false, rise: false, id: 1 },
            { name: 'Second A.', salary: 2000, increase: false, rise: false, id: 2 },
            { name: 'Third M.', salary: 5000, increase: false, rise: false, id: 3 }
         ]
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

   render() {
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;

      return (
         <div className="app">
            <AppInfo
               employees={employees}
               increased={increased}
            />

            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>

            <EmployeesList
               data={this.state.data}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp} />

            <EmployeesAddForm onAdd={this.addItem} />
         </div>
      );
   }
}

export default App;