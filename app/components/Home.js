// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes';
import { Row, Col, Input, Label, Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
// import getMonth from 'date-fns/getMonth';
// import getWeekOfMonth from 'date-fns/getWeekOfMonth';
import addWeeks from 'date-fns/addWeeks';
import subWeeks from 'date-fns/subWeeks';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
// import getDate from 'date-fns/getDate';

type Props = {};

type State = {
  lastWeek: Date,
  currentWeek: Date,
  nextWeek: Date
};

export default class Home extends Component<Props, State> {
  props: Props;

  state: State = {
    lastWeek: subWeeks(new Date(), 1),
    currentWeek: new Date(),
    nextWeek: addWeeks(new Date(), 1)
  };

  componentDidMount() {
    console.log(DatePicker);
  }

  // 현재 날짜로 이동
  goToday = () => {
    this.setState({
      lastWeek: subWeeks(new Date(), 1),
      currentWeek: new Date(),
      nextWeek: addWeeks(new Date(), 1)
    });
  };

  // 이전 주로 이동
  onClickBackButton = () => {
    const { lastWeek, currentWeek, nextWeek } = this.state;

    this.setState({
      lastWeek: subWeeks(lastWeek, 1),
      currentWeek: subWeeks(currentWeek, 1),
      nextWeek: subWeeks(nextWeek, 1)
    });
  };

  // 다음 주로 이동
  onClickForwardButton = () => {
    const { lastWeek, currentWeek, nextWeek } = this.state;

    this.setState({
      lastWeek: addWeeks(lastWeek, 1),
      currentWeek: addWeeks(currentWeek, 1),
      nextWeek: addWeeks(nextWeek, 1)
    });
  };

  getWeekRange = (date: Date) => {
    const startDay = startOfWeek(date, { weekStartsOn: 1 });
    const endDay = endOfWeek(date, { weekStartsOn: 1 });

    return `${format(startDay, 'M월 d일')} ~ ${format(endDay, 'M월 d일')}`;
  };

  setCurrentWeek = (date: Date) => {
    this.setState({
      currentWeek: date
    });
  };

  render() {
    const { lastWeek, currentWeek, nextWeek } = this.state;

    return (
      <div className="wrap">
        <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Col>
            <DatePicker
              selected={currentWeek}
              onChange={date => this.setCurrentWeek(date)}
              customInput={
                <Button className="example-custom-input">
                  <i className="ion-md-calendar" />
                  &nbsp;
                  {format(
                    startOfWeek(currentWeek, { weekStartsOn: 1 }),
                    'M월 d일'
                  )}
                  &nbsp; ~&nbsp;
                  {format(
                    endOfWeek(currentWeek, { weekStartsOn: 1 }),
                    'M월 d일'
                  )}
                </Button>
              }
              withPortal
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </Col>
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
              <i className="ion-md-arrow-back" />
            </Button>
          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column' }}>
            <Row>
              <Col style={{ textAlign: 'center' }}>
                <Label for="lastWeekTextArea" className="label-week">
                  {this.getWeekRange(lastWeek)}
                </Label>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Label for="currentWeekTextArea" className="label-week">
                  {this.getWeekRange(currentWeek)}
                </Label>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Label for="nextWeekTextArea" className="label-week">
                  {this.getWeekRange(nextWeek)}
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
              <i className="ion-md-arrow-forward" />
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
