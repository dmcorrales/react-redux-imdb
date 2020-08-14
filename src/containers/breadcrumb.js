import React from 'react';
import  { Breadcrumb } from 'antd';

function BreadcrumbComponent(props) {
 return(
    <React.Fragment>
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>/</Breadcrumb.Item>
        </Breadcrumb>
    </React.Fragment>
 );
}

export default BreadcrumbComponent;