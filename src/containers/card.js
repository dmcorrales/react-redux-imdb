import React from 'react';
import { Card, Rate } from 'antd';
import { withRouter } from "react-router-dom";
const { Meta } = Card;

function CardComponent(props) {
    const { data } = props;

    function slice(array) {
        return array.slice(0, 3)
    }

    return (
        <div style={{ width: 200 }} >
            <Card
                onClick={() => window.location.href = (props.type_filtering + "/" + data.id)}
                hoverable
                onMouseEnter={() => props.getListCredits(data.id, props.type_filtering)}
                style={{ width: 240 }}
                cover={
                    <>
                        {data.poster_path == " " || data.poster_path == undefined
                            ?
                            <img alt="example" width="238" height="357" className="image_card" src={`/images/no_image_available.jpeg`} />
                            :
                            <img alt="example" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`} className="image_card" />
                        }
                        <div className="overlay_card">
                            <div className="text_card">
                                <b>Puntuación:</b> {data.vote_average} <Rate disabled defaultValue={parseInt(data.vote_average)} count={10} />
                                <b>Actores:</b> <div style={{ fontSize: 10 }}>
                                    {props.credits.data == [] || props.credits.data == undefined ? ""
                                        :
                                        slice(props.credits.data.cast).map(function (item, i) {
                                            return (<p key={i}>{item.name} - {item.character}</p>)
                                        })}
                                </div>
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