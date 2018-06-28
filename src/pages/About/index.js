import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { List, Card, Image } from 'semantic-ui-react';
import PageHeader from '../../components/Header';
import tip1 from '../../images/tip1.png';
import tip2 from '../../images/tip2.png';
import tip3 from '../../images/tip3.png';
import tip4 from '../../images/tip4.png';
import tip5 from '../../images/tip5.png';

class About extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <div style={{
                    padding: '0 40px',
                    color: '#c1eeff',
                    fontSize: '14px'
                }}>
                    <div>
                        DATING（约会吧）是一个基于星云链的约会社交平台，用户可以通过平台约玩、约饭、约电影等等实现价值交换。
                    </div>

                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        <h3>DATING（约会吧）介绍：</h3>
                        <List>
                            <List.Item>
                                1. 发布约会信息：用户可以点击"创建约会"，填写个人信息、图片链接和约会内容，设置约会基金额度，发起交易即可；
                            </List.Item>
                            <Card
                                style={{width: '100%'}}
                            >
                                <Image src={tip1}/>
                            </Card>
                            <List.Item>
                                2. 查看约会信息：通过点击"最新约会"，用户可以看到其他人所创建的约会，发现有趣的内容；
                            </List.Item>
                            <Card
                                style={{width: '100%'}}
                            >
                                <Image src={tip2}/>
                            </Card>
                            <List.Item>
                                3. 约会心仪的TA：通过点击"约TA"，填写联系方式，支付约会基金，可以发起与TA的约会，接下来双方就可以联系约会了，如果约会成功，相应的约会基金将转入TA的账户；
                            </List.Item>
                            <Card
                                style={{width: '100%'}}
                            >
                                <Image src={tip3}/>
                            </Card>
                            <List.Item>
                                4. 约会TIPS：约会过程需要双方确认，约会过程中任何一方均可以取消约会，相应的约会基金将会返回支付者账户；
                            </List.Item>
                            <Card
                                style={{width: '100%'}}
                            >
                                <Image src={tip4}/>
                            </Card>
                            <Card
                                style={{width: '100%'}}
                            >
                                <Image src={tip5}/>
                            </Card>
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
                                1. DATING（约会吧）提供约会信息托管与溯源服务，并不保证信息内容真实可靠，请用户务必认真核实，因信息不实造成的损失由用户自行承担。
                            </List.Item>
                            <List.Item>
                                2. DATING（约会吧）通过智能合约托管约会基金，基金额度和流向透明开放，随时可查。
                            </List.Item>
                            <List.Item>
                                3. DATING（约会吧）基于星云链生态的开发，从您体验和账号安全的角度考虑，请您在使用前先安装
                                <a href="https://github.com/ChengOrangeJu/WebExtensionWallet"
                                   style={{
                                       color: '#39beff',
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
                        <h3>DATING（约会吧），喜欢TA就用NAS约TA吧，打造最IN的区块链社交品牌！</h3>
                    </div>
                    <div
                        style={{
                            paddingTop: '40px',
                            height: '300px'
                        }}
                    >
                    </div>

                </div>
            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;
