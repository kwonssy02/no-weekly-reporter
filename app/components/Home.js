// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';

type Props = {};

type State = {
  lastWeek: moment,
  currentWeek: moment,
  nextWeek: moment
};

const firstDay = 1;

export default class Home extends Component<Props, State> {
  props: Props;

  state: State = {
    lastWeek: moment().day(-7 + firstDay),
    currentWeek: moment().day(0 + firstDay),
    nextWeek: moment().day(7 + firstDay)
  };

  componentDidMount() {
    // console.log(moment().week());
    // console.log(moment('2019W42'));
  }

  // 현재 날짜로 이동
  goToday = () => {
    this.setState({
      lastWeek: moment().day(-7 + firstDay),
      currentWeek: moment().day(0 + firstDay),
      nextWeek: moment().day(7 + firstDay)
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

  monthAndWeek = (now: moment) =>
    `${now.month() + 1}월 ${Math.ceil(now.date() / 7)}째주`;

  render() {
    const { lastWeek, currentWeek, nextWeek } = this.state;

    return (
      <div className="wrap">
        <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Col style={{ textAlign: 'right' }}>
            <DatePicker
              // selected={startDate}
              // onChange={date => setStartDate(date)}
              // filterDate={isWeekday}
              placeholderText="Select a weekday"
            />
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
                <Label
                  for="lastWeekTextArea"
                  style={{
                    width: '100%',
                    borderRadius: '5px 5px 0px 0px',
                    fontSize: '.9rem'
                  }}
                >
                  <b>{this.monthAndWeek(lastWeek)}</b>
                </Label>
                <Label for="lastWeekTextArea" style={{ width: '100%' }}>
                  ({lastWeek.format('MM월 DD일')})
                </Label>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Label
                  for="currentWeekTextArea"
                  style={{
                    width: '100%',
                    borderRadius: '5px 5px 0px 0px',
                    fontSize: '.9rem'
                  }}
                >
                  <b>{this.monthAndWeek(currentWeek)}</b>
                </Label>
                <Label for="currentWeekTextArea" style={{ width: '100%' }}>
                  ({currentWeek.format('MM월 DD일')})
                </Label>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Label
                  for="nextWeekTextArea"
                  style={{
                    width: '100%',
                    borderRadius: '5px 5px 0px 0px',
                    fontSize: '.9rem'
                  }}
                >
                  <b>{this.monthAndWeek(nextWeek)}</b>
                </Label>
                <Label for="nextWeekTextArea" style={{ width: '100%' }}>
                  ({nextWeek.format('MM월 DD일')})
                </Label>
              </Col>
            </Row>
            <Row style={{ flex: 1 }}>
              <Col>
                <Input
                  type="textarea"
                  id="lastWeekTextArea"
                  style={{ height: '100%', borderRadius: '0px 0px 5px 5px' }}
                />
              </Col>
              <Col>
                <Input
                  type="textarea"
                  id="currentWeekTextArea"
                  style={{ height: '100%', borderRadius: '0px 0px 5px 5px' }}
                />
              </Col>
              <Col>
                <Input
                  type="textarea"
                  id="nextWeekTextArea"
                  style={{ height: '100%', borderRadius: '0px 0px 5px 5px' }}
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
