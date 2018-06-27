import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment, Header, TextArea, Table,
    Button, Modal, Icon,
    Label, Image, Sidebar,
    Grid, Card, Responsive,
} from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';
import { detectScreenType } from '../../utils';

import { getOrderList } from '../../dataAdapter';

class OrderPage extends Component {
    state = {
        activeItem: '待确认'
    }

    componentDidMount() {
        getOrderList(0)
            .then(res => {
                this.setState({
                    list: res.list,
                })
            })
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

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
                            active={activeItem === '待确认'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='进行中' // 1
                            active={activeItem === '进行中'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='已完成' // 3
                            active={activeItem === '已完成'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='已取消' // 2
                            active={activeItem === '已取消'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Segment attached='bottom'>
                        <Table striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name</Table.HeaderCell>
                                    <Table.HeaderCell>Date Joined</Table.HeaderCell>
                                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                                    <Table.HeaderCell>Called</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>John Lilki</Table.Cell>
                                    <Table.Cell>September 14, 2013</Table.Cell>
                                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie Harington</Table.Cell>
                                    <Table.Cell>January 11, 2014</Table.Cell>
                                    <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill Lewis</Table.Cell>
                                    <Table.Cell>May 11, 2014</Table.Cell>
                                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John Lilki</Table.Cell>
                                    <Table.Cell>September 14, 2013</Table.Cell>
                                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John Lilki</Table.Cell>
                                    <Table.Cell>September 14, 2013</Table.Cell>
                                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie Harington</Table.Cell>
                                    <Table.Cell>January 11, 2014</Table.Cell>
                                    <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill Lewis</Table.Cell>
                                    <Table.Cell>May 11, 2014</Table.Cell>
                                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>John Lilki</Table.Cell>
                                    <Table.Cell>September 14, 2013</Table.Cell>
                                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
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
