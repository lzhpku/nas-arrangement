import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment, Header, TextArea,
    Button, Modal, Icon,
    Label, Image, Sidebar,
    Grid, Card, Responsive,
} from 'semantic-ui-react';
import { withRouter } from 'react-router';
import ArrangementCard from '../../components/ArrangementCard';
import PageHeader from '../../components/Header';
import { detectScreenType } from '../../utils';

import { getArrangementList } from '../../dataAdapter';

class HomePage extends Component {
    perRowMap = {
        mobile: 1,
        pad: 2,
        pc: 4,
    }
    state = {
        curPage: 1,
        perRow: 4,
        list: [],
    }

    sortList(list) {
        return list.sort(function (a, b) {
            return b.paidCount - a.paidCount;
        });
    }

    componentDidMount() {
        getArrangementList(this.state.curPage)
            .then(res => {
                this.setState({
                    list: this.sortList(res.list),
                })
            })

        this.setState({
            perRow: this.perRowMap[detectScreenType(window.innerWidth)]
        })

        window.onresize = () => {
            this.setState({
                perRow: this.perRowMap[detectScreenType(window.innerWidth)]
            })
        }
    }
    render() {
        return (
            <div>
                <PageHeader />
                <Card.Group
                    itemsPerRow={this.state.perRow}
                    style={{
                        padding: '40px',
                    }}
                >
                    {
                        this.state.list.map(item => (
                            <ArrangementCard
                                key={item.arrangementId}
                                {...item}
                            />
                        ))
                    }
                </Card.Group>
            </div>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default withRouter(HomePage);
