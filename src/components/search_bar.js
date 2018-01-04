import React, {Component} from 'react';
//this is functional component
// const SearchBar=()=>{
//     return <input/>
// }
//this one class component
//class SearchBar extends React.Component if we import {Component},so no need React.Component,just Component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};

    }

    render() {
        //  return <input onChange={this.onInputChange}/>;
        // return <input onChange={event => console.log(event.target.value) }/>;

        return (
            <div className="search-bar">
                <input
                    value ={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) }/>
                {/*Value of input : {this.state.term}*/}
            </div>);

    }
    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    // onInputChange(event){
    // console.log(event.target.value);
    // }
}
export default SearchBar;