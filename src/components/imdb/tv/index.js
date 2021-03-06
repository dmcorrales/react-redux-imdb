import React from 'react';
import Tv from './tv';
import { connect } from 'react-redux';
import findById from '../../../actions/findMovieById';
import getSeasons from '../../../actions/getSeasons';
import getSeasonEpisodes from '../../../actions/getSeasonEpisodes';

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
        getSeasons(this.props.match.params.id, 1)
    }

    render() {

        const { movies, season, getSeasons, getSeasonEpisodes } = this.props;
        const { mode } = this.state;
        return (
            <>
                {movies.isLoading ? <Skeleton /> : <Tv mode={mode} handleModeChange={this.handleModeChange} season={season} getSeasonEpisodes={getSeasonEpisodes} getSeasons={getSeasons} movie={movies.results.data}></Tv>}
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
    getSeasons,
    getSeasonEpisodes
}

export default connect(mapStateToProps, mapDispatchToProps)(TvComponent);