import React from 'react';
import CardComponent from '../../../containers/card';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

function Landing(props) {
    return (
        <InfiniteScroll
            dataLength={props.movies.length}
            hasMore={true}
            next={props.next}
            loader={<h4><center><Spin /> Cargando..</center></h4>}
        >
            <List
                style={{}}
                grid={{ gutter: 16, column: 3 }}
                dataSource={props.movies}
                renderItem={item => (
                    <List.Item>
                        <CardComponent data={item}></CardComponent>
                    </List.Item>
                )}
            />
        </InfiniteScroll>
    );
}

export default Landing;