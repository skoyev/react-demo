import React from 'react';
import './style/PublicHeader.css'
import { Row, Col } from 'antd';

export const PublicHeader = ({title}) => (
    <Row>
        <Col>
            <h3>{title}</h3>
        </Col>
    </Row>
);