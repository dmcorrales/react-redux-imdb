import React from 'react';
import { PageHeader, Tabs, Radio, Card, Col, Row, Statistic, Tag, Collapse } from 'antd';
import {createBrowserHistory } from 'history';
const { TabPane } = Tabs;
const { Panel } = Collapse;

const history = createBrowserHistory({ forceRefresh: true });

function Tv(props) {
    const { movie, season } = props;

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
                            <Card title={movie.original_name + " (" + movie.first_air_date + ")"} bordered={false}>
                                <img alt="example" width="260" height="350" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
                                <br /><br />
                                <li><b>Estado: </b>{movie.status}</li>
                                <li><b>Tipo: </b>{movie.type}</li>
                                <li><b>Página web: </b>{movie.homepage}</li>
                                <br></br>
                                {movie.genres.map(function (item, i) {
                                    return <Tag>{item.name}</Tag>;
                                })}

                            </Card>
                        </Col>
                        <Col span={14}>
                            <Card title="Descripción" bordered={false}>
                                {movie.overview}

                                <div>
                                    <Radio.Group onChange={props.handleModeChange} value={props.mode} style={{ marginBottom: 8 }}>
                                        <Radio.Button value="top">Horizontal</Radio.Button>
                                        <Radio.Button value="left">Vertical</Radio.Button>
                                    </Radio.Group>
                                    <Tabs onTabClick={(e) => props.getSeasons(movie.id, parseInt(e) + 1)}  defaultActiveKey="0" tabPosition={props.mode}>
                                        {movie.seasons.map(function (item, i) {
                                            return (
                                                <TabPane tab={`${item.name}`} key={i}>
                                                    <Collapse accordion>


                                                        {season.isLoading ? <p>No data found.</p> :
                                                            season.results.data.episodes.map(function (item, i) {
                                                                return (
                                                                    <Panel header={item.name} key={i}>

                                                                        <center>
                                                                            <img alt="example" width="100" height="120" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.still_path}`} />
                                                                        </center>

                                                                        <li><b>Fecha de lanzamiento: </b>{item.air_date}</li>
                                                                        <li><b>Nombre: </b>{item.name}</li>
                                                                        <li><b>Tripulación: </b>{item.crew.map(function (item, id) {
                                                                            return (
                                                                                <li>{item.name} - {item.department}</li>
                                                                            );
                                                                        })}</li>

                                                                        <li><b>Estrellas invitadas: </b>{item.guest_stars.map(function (item, id) {
                                                                            return (
                                                                                <li>{item.name}</li>
                                                                            );
                                                                        })}</li>
                                                                    </Panel>
                                                                )
                                                            })
                                                        }

                                                    </Collapse>
                                                </TabPane>
                                            )
                                        })}

                                    </Tabs>
                                </div>

                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Card title="Último episodio en producción" bordered={false}>

                                <img alt="example" width="100" height="120" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.last_episode_to_air.still_path}`} />

                                <li><b>Nombre:</b> {movie.last_episode_to_air.name}</li>
                                <li><b>Temporada:</b> {movie.last_episode_to_air.season_number}</li>
                                <li><b>Fecha de lanzamiento:</b> {movie.last_episode_to_air.air_date}</li>
                                <li><b>Media de votos:</b> {movie.last_episode_to_air.vote_average}</li>
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
                            <Card title="Creado por" bordered={false}>
                                {movie.created_by.map(function (item, i) {
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

export default Tv;