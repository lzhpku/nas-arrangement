import React, {Component} from 'react';
import Arrangement from '../../components/Arrangement';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';

import { getArrangement, applyArrangement } from '../../dataAdapter';

class DisplayArrangement extends Component {

    state = {
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
        applyArrangement(this.props.match.params.arrangementId, this.state.price)
            .then(res => {
                this.setState({
                    ifWaitforWriteChainDialogOpen: true,
                })
            })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifWaitforWriteChainDialogOpen: false,
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
