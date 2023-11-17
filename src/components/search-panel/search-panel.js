import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: ''
      }
   }

   onUpdateSearch = (event) => {
      const term = event.target.value;
      // this.setState({ term: term }) полная запись присовения локальной term в глобальную
      this.setState({ term }) // короткая запись
      this.props.onUpdateSearch(term); // вызов метода onUpdateSearch() из app.js
   }

   render() {
      return (
         <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdateSearch}
         />
      );
   }
}

export default SearchPanel;