import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import { Card, Col, Row, Statistic, Tag } from 'antd';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ forceRefresh: true });

function Movie(props) {
    const { movie } = props;
    return (

        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => history.push("/")}
                title="Volver"
                subTitle={""}
                extra={[

                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic title="Likes" value={movie.popularity} />
                        </Col>

                        <Col span={4}>
                        </Col>

                        <Col span={12}>
                            <Statistic title="Votos" value={movie.vote_average} suffix="" />
                        </Col>
                    </Row>

                    ,
                ]}
            >
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title={movie.original_title + " (" + movie.release_date + ")"} bordered={false}>
                                <img alt="example" width="260" height="350" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
                                <br /><br />
                                {movie.genres.map(function (item, i) {
                                    return <Tag>{item.name}</Tag>;
                                })}

                            </Card>
                        </Col>
                        <Col span={14}>
                            <Card title="Descripción" bordered={false}>
                                {movie.overview}
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Card title="Compañías de producción" bordered={false}>
                                {movie.production_companies.map(function (item, i) {
                                    return <li>{item.name}</li>;
                                })}
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Card title="Países de producción" bordered={false}>
                                {movie.production_countries.map(function (item, i) {
                                    return <li>{item.name}</li>;
                                })}
                            </Card>
                        </Col>
                    </Row>
                </div>
            </PageHeader>
        </div>

    );
}

export default Movie;