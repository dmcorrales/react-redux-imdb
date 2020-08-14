import React from 'react';
import { Card, Rate } from 'antd';
const { Meta } = Card;

function CardComponent(props){
    const {data} = props;
    return(
    <div style = {{width: 200}} >
        <Card
            onClick={() => alert("K")}
            hoverable
            style={{ width: 240 }}
            cover={
                <>
                    <img alt="example"  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`}  class="image_card"/>
                    <div class="overlay_card">
                        <div class="text_card">
                            <b>Puntuación:</b> {data.vote_average} <Rate disabled defaultValue={(data.vote_average)}  count='10.0'/> 
                            <b>Actores:</b> <div style={{fontSize: 10}}>Alvaro Antonio Stagg, Daniel Mauricio Corrales, Pedro Feijóo  </div>
                        </div>
                    </div>
                </>
            }>
            <Meta title={data.title ? data.title : data.name} alt={data.original_title} />
        </Card>
    </div>
    );
}
export default CardComponent;