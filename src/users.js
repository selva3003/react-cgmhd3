import React, { Component } from 'react';
import { GetUsers } from './actions';
import { connect } from 'react-redux';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.GetUsers();
  }
  render() {
    <h1>No of Users-{this.props.users.length} </h1>;
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispacthToProps = (dispatch) => {
  return {
    GetUsers: () => dispatch(GetUsers()),
  };
};
export default connect(mapStateToProps, mapDispacthToProps)(Users);
