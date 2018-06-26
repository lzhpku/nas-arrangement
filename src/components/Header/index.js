import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
    Menu,
} from 'semantic-ui-react';

class Header extends Component {
    handleSwitchPage = (pageUrl) => () => {
        this.props.history.push(pageUrl)
    }
    render() {
        return (
            <Menu
                style={{
                    marginTop: 0,
                    borderRadius: '0'
                }}
                secondary
                stackable
            >
                <Menu.Item
                    style={{
                        color: '#f798b4',
                        fontSize: '24px'
                    }}
                >
                    PieBridge
                </Menu.Item>

                <Menu.Item
                    name='female'
                    active={this.props.location.pathname === '/'}
                    onClick={this.handleSwitchPage('/')}
                    style={{
                        color: '#fff',
                        fontSize: '16px'
                    }}
                >
                    倾国倾城
                </Menu.Item>

                <Menu.Item
                    name='reviews'
                    active={this.props.location.pathname === '/post'}
                    onClick={this.handleSwitchPage('/post')}
                    style={{
                        color: '#fff',
                        fontSize: '16px'
                    }}
                >
                    我要上桥
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={this.props.location.pathname === '/about'}
                    onClick={this.handleSwitchPage('/about')}
                    style={{
                        color: '#fff',
                        fontSize: '16px'
                    }}
                >
                    用户须知
                </Menu.Item>

                <Menu.Item>
                    <a
                        style={{
                            color: '#fff',
                            fontSize: '16px'
                        }}
                        href="mailto:piebridgenas@163.com"
                    >联系我们</a>
                </Menu.Item>
            </Menu>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default withRouter(Header);
