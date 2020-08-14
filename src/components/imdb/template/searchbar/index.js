import React from 'react';
import {Input, Form, Button} from 'antd';
import {connect} from 'react-redux';
import SearchBar from './searchbar';
import findByName from '../../../../actions/filteringMovies';
import updatePagination from '../../../../actions/updatePagination';


class SearchComponent extends React.Component {

    componentDidMount(){

    }

    handleSubmit = (formValues, next) => {
        const { findByName,updatePagination } = this.props;
        findByName(formValues.filter);
        updatePagination(1);
    }

    render() {
        return (
            <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
  });
  
  const mapDispatchToProps = {
    findByName,
    updatePagination
  }
export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);