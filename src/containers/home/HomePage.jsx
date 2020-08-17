import React from 'react';
import { PublicHeader} from '../../components/public/PublicHeader';
import AppFooter from '../../components/common/AppFooter';
import { withLocalize } from "react-localize-redux";
import {connect} from "react-redux";
import {userActions} from '../../store/action/index'
import '../style/HomePage.css'
import { Table, Menu, Dropdown, Row, Col } from 'antd';
/**
 * Main Index Page
 */
class HomePage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            priceColumns: Array.from(Array(5), (_, i) => i + 1) // default array size is 5
        }
    }

    componentDidMount() {
        // Load Data Once Page Is Loaded
        this.props.fetchAll();
    }

    getTableColumns = () => {
        const {priceColumns} = this.state;
        let columns = [
            {
              title: 'ID',
              dataIndex: 'id',
              key: 'id',
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.id - b.id,
              render: text => <a>{text}</a>,
            },
    
            {
              title: 'CMC Rank',
              dataIndex: 'rank',
              key: 'cmc_rank',
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.rank - b.rank,
              render: text => <a>{text}</a>,
            },
    
            {
                title: 'Symbol',
                dataIndex: 'symbol',
                key: 'rank',
                render: text => <a>{text}</a>,
            },
        ];

        priceColumns.map((i, v) => 
            columns.push({
                title: `Price ${i} (USD)`,
                dataIndex: `price${i}`,
                key: `price${i}`,
                defaultSortOrder: 'descend',
                sorter: (a, b) => eval(`a.price${i}`) - eval(`b.price${i}`),
                render: text => <a>{text}</a>
            })
        );
    
        return columns;
    }

    addPriceColumn = (v) => {
        let {priceColumns} = this.state;
        priceColumns.push(v);
        this.setState({priceColumns:priceColumns})
    }

    deletePriceColumn = (v) => {
        let {priceColumns} = this.state;
        if(priceColumns.length > 1){
            this.setState({priceColumns:priceColumns.filter(e => e !== v)})
        }
    }

    getAddColumnOptions = () => {
        let {priceColumns} = this.state;
        let arr = Array.from(Array(10), (_, i) => i + 1);
        return <Menu>
            {arr.map(i => {
                if(priceColumns.indexOf(i) < 0){
                    return <Menu.Item key={i} onClick={() => this.addPriceColumn(i)}>{i}</Menu.Item>
                }                 
            }
            )}            
        </Menu>
    }

    getDeleteColumnOptions = () => {
        let {priceColumns} = this.state;
        return <Menu>
            {priceColumns.map(i =>                
                 <Menu.Item key={i} onClick={() => this.deletePriceColumn(i)}>{i}</Menu.Item>            
            )}            
        </Menu>
    }

    render() {
        let tableColumns = this.getTableColumns();
        let addColumnOptions = this.getAddColumnOptions();
        let deleteColumnOptions = this.getDeleteColumnOptions();

        const { items } = this.props;
    
        return (
            <React.Fragment>
                <div className="container">
                    <PublicHeader title="React Demo By Sergiy Koyev"/>
                    <Row>
                        <Col span={6}>
                            <Dropdown overlay={addColumnOptions}>
                                <a className="ant-dropdown-link">
                                    Select To Add New Price Column
                                </a>
                            </Dropdown>
                        </Col>
                        <Col span={6}>
                            <Dropdown overlay={deleteColumnOptions}>
                                <a className="ant-dropdown-link">
                                    Select To Delete Price Column
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                    
                    <Table rowKey={record => record.id} columns={tableColumns} dataSource={items} />                            

                    <AppFooter title="@2020 React Demo By Sergiy Koyev" />
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
      items: state.users.items,
    };
}

const mapDispatchToProps = {    
    ...userActions
};

export default withLocalize(connect(mapStateToProps, mapDispatchToProps)(HomePage));