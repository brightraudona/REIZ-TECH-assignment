import { Component } from 'react';
import List from './List.js';
import Title from '../components/Title.js';
const axios = require('axios');


class ListContainer extends Component {
    state = {
        countries: null,
        Lithuania: null,
        filter: null
    };
  
    componentDidMount() {
      this._asyncRequest = axios({
        method: 'get',
        "url": "https://restcountries.com/v3.1/all?fields=name,area,continents"
      }).then(
        countries => {
          this._asyncRequest = null;
          this.setState({ countries: countries});
          this.setState({ filter: countries});
          for(let i = 0; i < countries.data.length;i++) {
              if (countries.data[i].name.common === 'Lithuania') {
                this.setState({Lithuania: countries.data[i]});
              }
          }
        }
      );
    }
  
    componentWillUnmount() {
      if (this._asyncRequest) {
        this._asyncRequest.cancel();
      }
    }

    onAreaClick() {
        var data = JSON.parse(JSON.stringify(this.state.countries));
        for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].area < this.state.Lithuania.area) {
                data.data.splice(i, 1);
                i--;
            }
        }
        this.setState({filter: data});
    }

    onOcianaClick() {
        var data = JSON.parse(JSON.stringify(this.state.countries));
        for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].continents[0] === 'Oceania') {
                data.data.splice(i, 1);
                i--;
            }
        }
        this.setState({filter: data});
    }

    onRestoreClick() {
        this.setState({filter: this.state.countries});
    }

    render() {
        if (this.state.filter === null || this.state.Lithuania === null) {
            // Render loading state ...
            console.log("loading...");
            return (
                <h1>Loading...</h1>
            )
        } else {
            return(
                <div>
                    <Title/>
                    <List Item={this.state.filter.data}
                        LT={this.state.Lithuania}
                        onAreaClick={this.onAreaClick.bind(this)}
                        onOcianaClick={this.onOcianaClick.bind(this)}
                        onRestoreClick={this.onRestoreClick.bind(this)}
                    />
                </div>
            )
        }
    }
}

export default ListContainer;