import React, {Component} from 'react';
import '../css/Search.css';

class Search extends Component {
    render() {
        return (
            <div>
                <input className='Search' placeholder='Search Book ...'/>
            </div>
        );
    }
}
export default Search;