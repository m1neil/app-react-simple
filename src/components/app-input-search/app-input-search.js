import {Component} from "react";

import "./app-input-search.scss";

class AppInputSearch extends Component {
   constructor(props) {
      super(props);
      this.state = {
         strSearch: ''
      }
   }

   updateStrSearch = (event) => {
      const value = event.target.value.trim();
      this.props.updateStrSearch(value)
      this.setState({
         strSearch: value
      });
   }

   render() {
      const {strSearch} = this.state.strSearch;
      return (
         <input
            placeholder="Find an employee"
            onChange={this.updateStrSearch}
            type="text"
            value={strSearch}
            className="app-searching__input"/>
      );
   }


}

export default AppInputSearch;