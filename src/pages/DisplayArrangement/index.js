import React, {Component} from 'react';
import Arrangement from '../../components/Arrangement';
import { Button, Icon, Modal, Input, Label } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';

import {getArrangement, applyArrangement} from '../../dataAdapter';

class DisplayArrangement extends Component {

    state = {
        arrangementId: '',
        contract: '',
        userDescription: '',
        ifPriceDialogOpen: false,
        ifWaitforWriteChainDialogOpen: false
    }

    componentDidMount() {
        getArrangement(this.props.match.params.arrangementId)
            .then(res => {
                this.setState({
                    ...res.arrangement,
                })
            })
    }
    applyOrder = () => {
        this.handleTriggerOpenPriceDialog();
    }
    handleTriggerOpenPriceDialog = () => {
        this.setState({
            ifPriceDialogOpen: true,
        })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifWaitforWriteChainDialogOpen: false,
        })
    }
    handleSubmit = () => {
        const {
            arrangementId,
            contract,
            userDescription,
        } = this.state;

        applyArrangement(
            arrangementId,
            contract,
            userDescription,
            Number(this.state.price))
            .then((res) => {
                this.setState({
                    ifPriceDialogOpen: false,
                    ifTransactionDelayNoteDialogOpen: true,
                })
            })
    }
    handleCancelSubmit = () => {
        this.setState({
            ifPriceDialogOpen: false,
        })
    }
    handleChangeContract = (e) => {
        this.setState({
            contract: e.target.value,
        })
    }
    handleChangeUserDescription = (e) => {
        this.setState({
            userDescription: e.target.value,
        })
    }
    render() {
        return (
            <div>
                <PageHeader />

                <Arrangement
                    type="read"
                    applyOrder={this.applyOrder}
                    {...this.state}
                >
                </Arrangement>

                <Modal
                    open={this.state.ifPriceDialogOpen}
                >
                    <Modal.Header
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            backgroundColor: '#fff'
                        }}
                    >
                        您与{this.state.nick}的《{this.state.title}》约会心愿单
                    </Modal.Header>
                    <Modal.Content
                        style={{
                            width: '100%',
                            backgroundColor: '#fff'
                        }}
                    >
                        <Label
                            basic
                            style={{
                                border: 'none',
                                backgroundColor: '#fff',
                                fontSize: '16px',
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 30,
                                width: '100%',
                            }}
                        >
                            约会价格：{this.state.price} NAS
                        </Label>

                        <Label
                            basic
                            style={{
                                border: 'none',
                                backgroundColor: '#fff',
                                fontSize: '16px',
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 30,
                                marginLeft: 0,
                                width: '100%',
                            }}
                        >
                            约会内容：{this.state.description}
                        </Label>

                        <Input
                            transparent
                            placeholder="请留下您的联系方式，不然TA无法联系您哦"
                            value={this.state.contract}
                            onChange={this.handleChangeContract}
                            style={{
                                backgroundColor: '#fff',
                                width: '90%',
                                paddingTop: 20,
                            }}
                            actionPosition="left"
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                联系方式：
                            </Label>
                            <input style={{textAlign: 'left', width: '100%'}}/>
                        </Input>

                        <Input
                            transparent
                            placeholder="有趣的灵魂万里挑一，介绍自己增加约会的机会吧"
                            value={this.state.userDescription}
                            onChange={this.handleChangeUserDescription}
                            style={{
                                backgroundColor: '#fff',
                                width: '90%',
                                paddingTop: 16,
                            }}
                            actionPosition="left"
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    marginLeft: 0,
                                }}
                            >
                                自我介绍：
                            </Label>
                            <input style={{textAlign: 'left', width: '100%'}}/>
                        </Input>
                        <div
                            style={{
                                textAlign: 'center',
                                marginTop: '24px'
                            }}
                        >
                            * 约会成功后，您支付的{this.state.price}NAS将转入{this.state.nick}的账户
                        </div>
                    </Modal.Content>
                    <Modal.Actions
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                        <Button
                            onClick={this.handleCancelSubmit}
                        >
                            <Icon name='remove'/> 取消
                        </Button>
                        <Button
                            onClick={this.handleSubmit}
                            disabled={!this.state.contract}
                        >
                            <Icon name='checkmark'/> 确定
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Modal
                    open={this.state.ifWaitforWriteChainDialogOpen}
                    style={{
                        backgroundColor: '#fff'
                    }}
                >
                    <Modal.Header
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                        温馨提示
                    </Modal.Header>
                    <Modal.Content
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                        交易需要15s左右的时间写入区块链，您可以浏览其他内容，请稍后查看。
                    </Modal.Content>
                    <Modal.Actions
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                        <Button
                            onClick={this.handleCloseTransactionDelatNoteDialog}
                        >确定</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

DisplayArrangement.propTypes = {};
DisplayArrangement.defaultProps = {};

export default withRouter(DisplayArrangement);
