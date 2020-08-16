import React from 'react';
import { Card, Rate } from 'antd';
import { withRouter } from "react-router-dom";
const { Meta } = Card;

function CardComponent(props) {
    const { data } = props;
    return (
        <div style={{ width: 200 }} >
            <Card
                onClick={() => window.location.href = ((data.media_type === undefined ? "tv" : "movie") + "/" + data.id)}
                hoverable
                style={{ width: 240 }}
                cover={

                    <>
                        {data.poster_path == " " || data.poster_path == undefined
                            ?
                            <img alt="example"  width="238" height="357" className="image_card" src={`/images/no_image_available.jpeg`} />
                            :
                            <img alt="example" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`} className="image_card" />
                        }
                        <div className="overlay_card">
                            <div className="text_card">
                                <b>Puntuación:</b> <Rate disabled defaultValue={parseInt(data.vote_average)} count={parseFloat(10.0)} />
                                <b>Actores:</b> <div style={{ fontSize: 10 }}>Alvaro Antonio Stagg, Daniel Mauricio Corrales, Pedro Feijóo  </div>
                            </div>
                        </div>
                    </>
                }>
                <Meta title={data.title ? data.title : data.name} alt={data.original_title} />
            </Card>
        </div>
    );
}
export default withRouter(CardComponent);