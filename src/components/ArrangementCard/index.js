import React, { Component } from 'react';
import { Card, Label, Image, Icon } from 'semantic-ui-react';

import { withRouter } from 'react-router';
import defaultAvatar from '../../images/default.jpg';

function randomRangeOf(num) {
    return Math.floor(Math.random() * num);
}

const colors = ['teal', 'orange', 'blue', 'red', 'violet', 'purple']

class ArrangementCard extends Component {

    randomColor = colors[randomRangeOf(colors.length)]

    handleClick = () => {
        this.props.history.push(`/arrangement/${this.props.arrangementId}`);
    }

    render() {
        const { title, nick, age, address, pic1, createTime, paidCount, orderedCount } = this.props;
        return (
            <Card
                onClick={this.handleClick}
            >
                <div
                    style={{
                        width: '100%',
                        maxHeight: '200px',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        label={{
                            color: this.randomColor,
                            content: paidCount.toString() + ' 人和TA约会成功',
                            icon: 'heart',
                            ribbon: true
                        }}
                        src={pic1 == "" ? defaultAvatar : pic1}
                    />
                </div>
                <Card.Content
                    style={{
                        backgroundColor: '#fff',
                    }}
                >
                    <Card.Header>
                        { title }
                    </Card.Header>
                    <Card.Description>
                        { nick }
                    </Card.Description>
                    <Card.Description>
                        { age }
                    </Card.Description>
                    <Card.Description>
                        { address }
                    </Card.Description>
                    <Card.Description>
                        发布于 { new Date(createTime).toDateString() }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra
                              style={{
                                  backgroundColor: '#fff',
                              }}
                >
                    <div style={{float:"left", width:"100%"}} >
                        <Icon name='user' />
                        { orderedCount } 人正在和TA约会
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

ArrangementCard.defaultProps = {
    title: '',
    nick: '',
    age: '',
    address: '',
    pic1: '',
    createTime: '',
    orderedCount: 0,
    paidCount: 0,
    arrangementId: ''
};

export default withRouter(ArrangementCard);
