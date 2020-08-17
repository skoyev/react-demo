import React from 'react';
import './style/AppFooter.css'
import { Row, Col } from 'antd';

const AppFooter = ({title}) => (
    <Row>
        <Col>
            <h3>{title}</h3>
        </Col>
    </Row>
);

export default AppFooter;