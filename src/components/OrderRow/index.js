import React, { Component } from 'react';
import { Card, Label, Image, Icon, Table } from 'semantic-ui-react';

import { withRouter } from 'react-router';

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
            operation
        } = this.props;

        return (
            <Table.Row>
                <Table.Cell>{orderId}</Table.Cell>
                <Table.Cell>{createTime}</Table.Cell>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{contract}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{operation}</Table.Cell>
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
    status: 0,
    operation: true,
};

export default withRouter(OrderRow);
