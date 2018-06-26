import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import PageHeader from '../../components/Header';

class About extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <div style={{
                    padding: '0 40px',
                    color: '#fff',
                    fontSize: '14px'
                }}>
                    <div>
                        PieBridge（鹊桥）是一个基于星云链的交友平台，提供了用户之间发布征友信息、相互喜欢的玩法。
                    </div>

                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        <h3>PieBridge（鹊桥）玩法：</h3>
                        <List>
                            <List.Item>
                                1. 发布征友信息：用户可以点击"我要上桥"，填写征友信息和照片链接，设置联系方式需要支付的NAS后发起交易即可；
                            </List.Item>
                            <List.Item>
                                2. 查看征友信息：应征的用户通过支付相应的NAS，可以获得"倾国倾城/玉树临风"中TA的联系方式；
                            </List.Item>
                            <List.Item>
                                3. 隐藏玩法：发布过征友信息的用户，如果相互点赞，可以免费查看对方的联系方式哦~；
                            </List.Item>
                            <List.Item>
                                4. 土豪玩法：点赞的时候发送的NAS将全部转入征友信息发布者的账户，土豪们尽情表达心意吧！；
                            </List.Item>
                        </List>
                    </div>

                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        <h3>使用须知：</h3>
                        <List>
                            <List.Item>
                                1. PieBridge（鹊桥）提供征友信息托管与溯源服务，并不保证信息内容真实可靠，请用户务必认真核实，因信息不实造成的损失由用户自行承担。
                            </List.Item>
                            <List.Item>
                                2. 用户支付的NAS将直接转入征友信息发布者的账户，平台不收取任何费用。
                            </List.Item>
                            <List.Item>
                                3. PieBridge（鹊桥）基于星云链生态的开发，从您体验和账号安全的角度考虑，请您在使用前先安装
                                <a href="https://github.com/ChengOrangeJu/WebExtensionWallet"
                                   style={{
                                       color: '#f798b4',
                                   }}
                                >NAS钱包插件</a>，解压后添加到chrome浏览器的扩展程序即可。
                            </List.Item>
                            <List.Item>
                                4. 请勿发布低俗内容，共同维护健康积极社区秩序。
                            </List.Item>
                        </List>
                    </div>

                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        <h3>PieBridge（鹊桥），喜欢TA就给TA NAS吧，打造区块链+交友的最IN品牌！</h3>
                    </div>

                </div>
            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;
