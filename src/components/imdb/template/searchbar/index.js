import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchbar';
import findByName from '../../../../actions/filteringMovies';
import updatePagination from '../../../../actions/updatePagination';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { useLocation } from 'react-router-dom'


class SearchComponent extends React.Component {

    state = { visible: false };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    handleSubmit = (formValues, next) => {
        const { findByName, updatePagination } = this.props;
        let page = 1;
        updatePagination(page);
        findByName(formValues.filter, page, formValues.type);
    }

    render() {
        return (
            <>
                {this.props.path == "/" ?
                    <Button type="primary" onClick={this.showDrawer}>
                        FILTRAR
                </Button>
                    : <></>}

                <Drawer
                    title="Búsqueda de tv o películas"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
                        </Button>
                            <Button onClick={this.onClose} type="primary">
                                Submit
                        </Button>
                        </div>
                    }
                >
                    <SearchBar onSubmit={this.handleSubmit}></SearchBar>

                </Drawer>
            </>
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