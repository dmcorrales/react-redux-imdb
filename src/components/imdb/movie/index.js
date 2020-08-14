import React, { useEffect } from 'react';
import Movie from './movie';
import { connect } from 'react-redux';
import findById from '../../../actions/findMovieById';
import { Skeleton } from 'antd';

class MovieComponent extends React.Component {

    componentDidMount() {
        const { findById } = this.props;
        findById(this.props.match.params.id);
    }

    render() {

        const { movies } = this.props;

        return (
            <>
                {movies.isLoading ? <Skeleton /> : <Movie movie={movies.results.data}></Movie>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
});

const mapDispatchToProps = {
    findById
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);