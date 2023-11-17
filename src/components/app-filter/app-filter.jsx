import './app-filte.css';

const AppFilter = (props) => {
   const btnsData = [
      { name: 'all', label: 'Все пользователи' },
      { name: 'rise', label: 'На повышение' },
      { name: 'moreThen1000', label: 'З/П больше 1000$' }
   ];

   const btns = btnsData.map(({ name, label }) => {
      const active = props.filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light';

      return (
         <button
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)} >
            {label}
         </button>
      )
   });

   return (
      <div className="btn-group" >
         {btns}
      </div>
   )
}

export default AppFilter;