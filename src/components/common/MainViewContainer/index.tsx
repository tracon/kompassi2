import React from 'react';

import Alert from 'reactstrap/lib/Alert';
import Container from "reactstrap/lib/Container";

import Loading from '../Loading';

import './index.css';


interface MainViewContainerProps {
  loading?: boolean;
  error?: string;
}


export default class MainViewContainer extends React.Component<MainViewContainerProps, {}> {
  render() {
    if (this.props.loading) {
      return <MainViewContainer><Loading /></MainViewContainer>;
    } else if (this.props.error) {
      return <MainViewContainer><Alert color="danger">{this.props.error}</Alert></MainViewContainer>;
    } else {
      return <Container className='MainViewContainer'>{this.props.children}</Container>;
    }
  }
}