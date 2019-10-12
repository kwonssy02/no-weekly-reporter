// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import moment from 'moment';

type Props = {};

type State = {
  lastWeek: moment,
  currentWeek: moment,
  nextWeek: moment
};

export default class Home extends Component<Props, State> {
  props: Props;

  state: State = {
    lastWeek: moment().day(-6),
    currentWeek: moment().day(1),
    nextWeek: moment().day(8)
  };

  componentDidMount() {
    // console.log(today);
    // console.log(moment().day(-6));
    // console.log(moment().day(1));
    // console.log(moment().day(8));
    // console.log(`${moment().day(-6).year()}/${moment().day(-6).month()+1}/${Math.ceil(moment().day(-6).date() / 7)}`);
    // console.log(`${moment().day(1).year()}/${moment().day(1).month()+1}/${Math.ceil(moment().day(1).date() / 7)}`);
    // console.log(`${moment().day(8).year()}/${moment().day(8).month()+1}/${Math.ceil(moment().day(8).date() / 7)}`);
  }

  // 현재 날짜로 이동
  goToday = () => {
    this.setState({
      lastWeek: moment().day(-6),
      currentWeek: moment().day(1),
      nextWeek: moment().day(8)
    });
  };

  // 이전 주로 이동
  onClickBackButton = () => {
    const { lastWeek, currentWeek, nextWeek } = this.state;

    this.setState({
      lastWeek: lastWeek.subtract(7, 'day'),
      currentWeek: currentWeek.subtract(7, 'day'),
      nextWeek: nextWeek.subtract(7, 'day')
    });
  };

  // 다음 주로 이동
  onClickForwardButton = () => {
    const { lastWeek, currentWeek, nextWeek } = this.state;

    this.setState({
      lastWeek: lastWeek.add(7, 'day'),
      currentWeek: currentWeek.add(7, 'day'),
      nextWeek: nextWeek.add(7, 'day')
    });
  };

  render() {
    const { lastWeek, currentWeek, nextWeek } = this.state;

    return (
      <div className="wrap">
        <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Col style={{ textAlign: 'right' }}>
            <Button size="md" onClick={this.goToday}>
              이번주
            </Button>
          </Col>
        </Row>
        <Row style={{ flex: 1, padding: '0px 0px 10px 0px' }}>
          <Col xs={1}>
            <Button
              color="orange"
              size="md"
              style={{ height: '100%', width: '100%' }}
              onClick={this.onClickBackButton}
            >
              <span className="ion-md-arrow-back" />
            </Button>
          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column' }}>
            <Row>
              <Col style={{ textAlign: 'center' }}>
                <Label for="lastWeekTextArea" style={{ width: '100%' }}>
                  {lastWeek.format('MM-DD')}
                </Label>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Label for="currentWeekTextArea" style={{ width: '100%' }}>
                  {currentWeek.format('MM-DD')}
                </Label>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Label for="nextWeekTextArea" style={{ width: '100%' }}>
                  {nextWeek.format('MM-DD')}
                </Label>
              </Col>
            </Row>
            <Row style={{ flex: 1 }}>
              <Col>
                <Input
                  type="textarea"
                  id="lastWeekTextArea"
                  style={{ height: '100%' }}
                />
              </Col>
              <Col>
                <Input
                  type="textarea"
                  id="currentWeekTextArea"
                  style={{ height: '100%' }}
                />
              </Col>
              <Col>
                <Input
                  type="textarea"
                  id="nextWeekTextArea"
                  style={{ height: '100%' }}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={1}>
            <Button
              color="orange"
              size="md"
              style={{ height: '100%', width: '100%' }}
              onClick={this.onClickForwardButton}
            >
              <span className="ion-md-arrow-forward" />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textAlign: 'right',
              backgroundColor: '#FAFAFA',
              borderTop: '1px solid #D4D4D4'
            }}
          >
            by Tom
          </Col>
        </Row>
      </div>
    );
  }
}
