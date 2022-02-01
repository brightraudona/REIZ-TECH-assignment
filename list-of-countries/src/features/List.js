import { Component } from 'react';
import Item from '../components/Item.js';
//import Item from '../components/Item';
const axios = require('axios');

class List extends Component {
    state = {
        countries: null,
    };
  
    componentDidMount() {
      this._asyncRequest = axios({
        method: 'get',
        "url": "https://restcountries.com/v3.1/all"
      }).then(
        countries => {
          this._asyncRequest = null;
          this.setState({countries});
        }
      );
    }
  
    componentWillUnmount() {
      if (this._asyncRequest) {
        this._asyncRequest.cancel();
      }
    }
  
    render() {
        if (this.state.countries === null) {
            // Render loading state ...
            console.log("loading...");
            return (
                <header>Loading...</header>
            )
        } else {
            // Render real UI ...
            console.log(this.state.countries);
            return (
                <div>
                    {this.state.countries.data.map((item, index) => (
                        <Item key={index} item={item}/>
                    ))}
                </div>
            )
        }
    }
}

export default List;