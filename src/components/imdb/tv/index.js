import React, { useEffect } from 'react';
import Tv from './tv';
import { connect } from 'react-redux';
import findById from '../../../actions/findMovieById';
import getSeasons from '../../../actions/getSeasons';

import { Skeleton } from 'antd';

class TvComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };


    componentDidMount() {
        const { findById, getSeasons } = this.props;
        findById(this.props.match.params.id, 'tv');
        getSeasons(this.props.match.params.id, 0)
    }

    render() {

        const { movies, season, getSeasons } = this.props;
        const { mode } = this.state;
        return (
            <>
                {movies.isLoading ? <Skeleton /> : <Tv mode={mode} handleModeChange={this.handleModeChange} season={season} getSeasons={getSeasons} movie={movies.results.data}></Tv>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    season: state.season
});

const mapDispatchToProps = {
    findById,
    getSeasons
}

export default connect(mapStateToProps, mapDispatchToProps)(TvComponent);