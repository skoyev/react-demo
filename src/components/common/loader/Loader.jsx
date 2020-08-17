import React from 'react';
import { Row, Col } from 'antd';
import './index.css';
import loader from '../../../assets/images/loader.gif';

const Loader = ({text}) => {
    return (
        <React.Fragment>
            <Row className="loader">
                <Col span={10}></Col>
                <Col span={4}>
                    <Row>
                        <div className="text">{text}</div>
                    </Row>
                    <Row>
                        <img src={loader}/>
                    </Row>
                </Col>
                <Col span={10}></Col>
            </Row>
        </React.Fragment>
    )
}

Loader.propTypes = {    
}

export default Loader;