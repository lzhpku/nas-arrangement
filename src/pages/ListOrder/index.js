import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment, Header, TextArea, Table,
    Button, Modal, Icon,
    Label, Image, Sidebar,
    Grid, Card, Responsive,
} from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';
import OrderRow from '../../components/OrderRow';

import { getOrderList } from '../../dataAdapter';

class OrderPage extends Component {
    state = {
        activeItem: '待确认',
        list: [],
        status: 0,
    }

    componentDidMount() {
        getOrderList(0)
            .then(res => {
                console.log(res);
                this.setState({
                    list: res.list,
                })
            })
    }

    handleItemClick = (e, {name}) => {
        if (name == '待确认') {
            this.state.status = 0;
        } else if (name == '进行中') {
            this.state.status = 1;
        } else if (name == '已完成') {
            this.state.status = 3;
        } else if (name == '已取消') {
            this.state.status = 2;
        }
        getOrderList(this.state.status)
            .then(res => {
                console.log(res);
                this.setState({
                    list: res.list,
                })
            })
        this.setState({
            activeItem: name
        })
    }

    render() {
        return (
            <div
                style={{
                    width: '100%',
                }}
            >
                <PageHeader/>
                <div
                    style={{
                        marginLeft: '5%',
                        width: '90%',
                        textAlign: 'center',
                    }}
                >
                    <Menu
                        attached='top'
                        tabular
                    >
                        <Menu.Item
                            name='待确认' // 0
                            active={this.state.activeItem === '待确认'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='进行中' // 1
                            active={this.state.activeItem === '进行中'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='已完成' // 3
                            active={this.state.activeItem === '已完成'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='已取消' // 2
                            active={this.state.activeItem === '已取消'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Segment attached='bottom'>
                        <Table striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                    <Table.HeaderCell>创建时间</Table.HeaderCell>
                                    <Table.HeaderCell>标题</Table.HeaderCell>
                                    <Table.HeaderCell>价格</Table.HeaderCell>
                                    <Table.HeaderCell>联系方式</Table.HeaderCell>
                                    <Table.HeaderCell>内容</Table.HeaderCell>
                                    <Table.HeaderCell>操作</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    this.state.list.map(item => (
                                        <OrderRow
                                            key={item.orderId}
                                            {...item}
                                        />
                                    ))
                                }
                            </Table.Body>
                        </Table>
                    </Segment>
                </div>
            </div>
        );
    }
}

OrderPage.propTypes = {};
OrderPage.defaultProps = {};

export default withRouter(OrderPage);
