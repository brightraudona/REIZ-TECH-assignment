import { Component } from 'react';
import List from './List.js';
import Title from '../components/Title.js';

class ListContainer extends Component {
    render() {
        return(
            <div>
                <Title/>
                <List/>
            </div>
        )
    }
}

export default ListContainer;