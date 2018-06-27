import React, { Component } from 'react';
import { Card, Label, Image, Icon, Table, Button, Modal } from 'semantic-ui-react';

import { withRouter } from 'react-router';
import {promulgatorComfirm, promulgatorCancel, userComfirm, userCancel} from "../../dataAdapter";

class OrderRow extends Component {

    render() {
        const {
            arrangementId,
            orderId,
            createTime,
            price,
            title,
            contract,
            description,
            status,
            operation,
            pageStatus,
        } = this.props;

        return (
            <Table.Row>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{new Date(createTime).toDateString()}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{contract}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>
                    <Button
                        style={{
                            display: this.props.operation == true && this.props.pageStatus == 0 ? 'block' : 'none',
                        }}
                        onClick={this.props.promulgatorComfirm(this.props.orderId)}
                    >
                        确认约会
                    </Button>
                    <Button
                        style={{
                            display: this.props.operation == true && this.props.pageStatus == 0 ? 'block' : 'none',
                        }}
                        onClick={this.props.promulgatorCancel(this.props.orderId)}
                    >
                        取消约会
                    </Button>
                    <Button
                        style={{
                            display: this.props.operation == true && this.props.pageStatus == 1 ? 'block' : 'none',
                        }}
                        onClick={this.props.userComfirm(this.props.orderId)}
                    >
                        确认支付
                    </Button>
                    <Button
                        style={{
                            display: this.props.operation == true && this.props.pageStatus == 1 ? 'block' : 'none',
                        }}
                        onClick={this.props.userCancel(this.props.orderId)}
                    >
                        取消约会
                    </Button>
                    <Label
                        basic
                        style={{
                            border: 'none',
                            backgroundColor: '#fff',
                            paddingLeft: 0,
                            display: this.props.operation == false && this.props.pageStatus == 0 ? 'block' : 'none',
                        }}
                    >
                        等待对方确认
                    </Label>
                    <Label
                        basic
                        style={{
                            border: 'none',
                            backgroundColor: '#fff',
                            paddingLeft: 0,
                            display: this.props.operation == false && this.props.pageStatus == 1 ? 'block' : 'none',
                        }}
                    >
                        等待对方付款
                    </Label>
                    <Label
                        basic
                        style={{
                            border: 'none',
                            backgroundColor: '#fff',
                            paddingLeft: 0,
                            display: this.props.pageStatus == 3 ? 'block' : 'none',
                        }}
                    >
                        成功约会
                    </Label>
                    <Label
                        basic
                        style={{
                            border: 'none',
                            backgroundColor: '#fff',
                            paddingLeft: 0,
                            display: this.props.pageStatus == 2 ? 'block' : 'none',
                        }}
                    >
                        约会已取消
                    </Label>
                </Table.Cell>
            </Table.Row>
        );
    }
}

OrderRow.defaultProps = {
    arrangementId: '',
    orderId: '',
    createTime: '',
    price: 0,
    title: '',
    contract: '',
    description: '',
    status: true,
    operation: true,
    pageStatus: 0,
    promulgatorComfirm: () => {},
    promulgatorCancel: () => {},
    userComfirm: () => {},
    userCancel: () => {},
};

export default withRouter(OrderRow);
