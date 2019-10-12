// @flow
import React, { Component, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import {
  Row,
  Col,
  Container,
  Input,
  Label,
  Button
} from 'reactstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';

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
    nextWeek: moment().day(8),
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
      nextWeek: moment().day(8),
    });
  }

  // 이전 주로 이동
  onClickBackButton = () => {
    const { lastWeek, currentWeek, nextWeek } = this. state;

    this.setState({
      lastWeek: lastWeek.subtract(7, 'day'),
      currentWeek: currentWeek.subtract(7, 'day'),
      nextWeek: nextWeek.subtract(7, 'day'),
    });
  }

  // 다음 주로 이동
  onClickForwardButton = () => {
    const { lastWeek, currentWeek, nextWeek } = this. state;

    this.setState({
      lastWeek: lastWeek.add(7, 'day'),
      currentWeek: currentWeek.add(7, 'day'),
      nextWeek: nextWeek.add(7, 'day'),
    });
  }


  render() {
    function Test() {
      const [startDate, setStartDate] = useState(moment());
      const isWeekday = date => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
      };
      return (
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          filterDate={isWeekday}
          placeholderText="Select a weekday"
        />
      );
    };
    const { lastWeek, currentWeek, nextWeek } = this.state;

    return (
      <div className='wrap'>
        <Row style={{marginTop:'10px'}}>
          <Col style={{textAlign:'right'}}>
            <Test />
            <Button size="md" onClick={this.goToday}>이번주</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={1} style={{textAlign:'left'}}>

          </Col>
          <Col xs={3} style={{textAlign:'center'}}>
            <Label for="lastWeekTextArea" style={{width:'100%'}}>{lastWeek.format('MM-DD')}</Label>
          </Col>
          <Col xs={4} style={{textAlign:'center'}}>
            <Label for="currentWeekTextArea" style={{width:'100%'}}>{currentWeek.format('MM-DD')}</Label>
          </Col>
          <Col xs={3} style={{textAlign:'center'}}>
            <Label for="nextWeekTextArea" style={{width:'100%'}}>{nextWeek.format('MM-DD')}</Label>
          </Col>
          <Col xs={1} style={{textAlign:'right'}}>

          </Col>
        </Row>
        <Row style={{flex:1, padding:'0px 0px 10px 0px'}}>
          <Col xs={1}>
            <Button color="primary" size="md" style={{height:'100%', width:'100%'}} onClick={this.onClickBackButton}>
              <span className="ion-md-arrow-back" />
            </Button>
          </Col>
          <Col xs={3}>
            <Input type="textarea" id="lastWeekTextArea" style={{height:'100%'}} />
          </Col>
          <Col xs={4}>
            <Input type="textarea" id="currentWeekTextArea" style={{height:'100%'}} />
          </Col>
          <Col xs={3}>
            <Input type="textarea" id="nextWeekTextArea" style={{height:'100%'}} />
          </Col>
          <Col xs={1}>
            <Button color="primary" size="md" style={{height:'100%', width:'100%'}} onClick={this.onClickForwardButton}>
              <span className="ion-md-arrow-forward" />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:'right',backgroundColor:'#FAFAFA', borderTop: '1px solid #D4D4D4'}}>
            by Tom
          </Col>
        </Row>
      </div>
    );
  }
}
