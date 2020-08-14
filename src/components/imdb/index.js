import React from 'react';
import LandingComponent from './landing';
import MovieComponent from './movie';
import SearchComponent from './template/searchbar';
import { Layout, Menu, Breadcrumb} from 'antd';
import {Route} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function ImdbComponent(props){
    return(
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
              <SearchComponent />
          </Header>
          <Content className="site-layout" style={{padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                 <Route exact path="/" component={LandingComponent} />
                 <Route exact path="/movie/:id" component={MovieComponent} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Hecho con ❤️ por danieldmc123@hotmail.com</Footer>
        </Layout>
    );
}

export default ImdbComponent;