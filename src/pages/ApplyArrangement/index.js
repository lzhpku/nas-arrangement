import React, {Component} from 'react';
import { Modal, Button, Icon, Input } from 'semantic-ui-react';
import PageHeader from '../../components/Header';
import { postArrangement } from '../../dataAdapter';
import Arrangement from '../../components/Arrangement';

class ApplyArrangement extends Component {
    state = {
        title: '',
        nick: '',
        sex: '',
        age: '',
        tel: '',
        wechat: '',
        address: '',
        profession: '',
        hobby: '',
        pic1: '',
        pic2: '',
        pic3: '',
        description: '',
        price: '',
        ifPriceDialogOpen: false,
        ifTransactionDelayNoteDialogOpen: false,
    }

    handleTriggerOpenPriceDialog = () => {
        this.setState({
            ifPriceDialogOpen: true,
        })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifTransactionDelayNoteDialogOpen: false,
        })
    }
    handleChange = (s) => {
        this.setState({
            ...s
        });
    }
    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value,
        })
    }
    handleSubmit = () => {
        const {
            title,
            nick,
            sex,
            age,
            tel,
            wechat,
            address,
            profession,
            hobby,
            pic1,
            pic2,
            pic3,
            description,
            price } = this.state;

        postArrangement(
            title,
            nick,
            sex,
            age,
            tel,
            wechat,
            address,
            profession,
            hobby,
            pic1,
            pic2,
            pic3,
            description,
            Number(price))
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
    render() {
        return (
            <div>
                <PageHeader />
                <Arrangement type="write" {...this.state} onChange={this.handleChange} />
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <Modal
                        open={this.state.ifPriceDialogOpen}
                        trigger={
                            <Button
                                onClick={this.handleTriggerOpenPriceDialog}
                                disabled={!this.state.title || !(this.state.tel || this.state.wechat)}
                                style={{
                                    width: '200px'
                                }}
                            >发布</Button>
                        }>
                        <Modal.Header
                            style={{
                                textAlign: 'center',
                                width: '100%',
                                backgroundColor: '#fff'
                            }}
                        >设置付费金额</Modal.Header>
                        <Modal.Content
                            style={{
                                textAlign: 'center',
                                backgroundColor: '#fff'
                            }}
                        >
                            <Input
                                value={this.state.price}
                                onChange={this.handleChangePrice}
                                style={{
                                    backgroundColor: '#fff'
                                }}
                            /> NAS
                            <div
                                style={{
                                    textAlign: 'center',
                                    marginTop: '24px'
                                }}
                            >* 其他用户只有支付相应的NAS才能查看您的联系方式</div>
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
                                <Icon name='remove' /> 取消
                            </Button>
                            <Button
                                onClick={this.handleSubmit}
                                disabled={isNaN(Number(this.state.price)) || !this.state.price}
                            >
                                <Icon name='checkmark' /> 确定
                            </Button>

                        </Modal.Actions>
                    </Modal>
                    <Modal
                        style={{
                            backgroundColor: '#fff'
                        }}
                        open={this.state.ifTransactionDelayNoteDialogOpen}
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
                            您的信息写入区块链大致需要15秒，请稍后查看。
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
            </div>
        );
    }
}

ApplyArrangement.propTypes = {};
ApplyArrangement.defaultProps = {};

export default ApplyArrangement;
