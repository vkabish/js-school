import React from 'react';
import { createConnect } from '../../connect-hoc';
import {
  fetchGithubUser,
  fetchGithubData,
  updateUserData,
  updateUserFollowers,
  updateUserFollowing,
  pushDataToServer
} from '../../models/user';

const initialState = {
  user: {
    name: '',
    bio: '',
    avatar_url: '',
    company: '',
    login: '',
    location: '',
    followers: null,
    following: null,
    public_repos: '',
    followers_url: '',
    following_url: '',
  },
  followersList: [],
  followingList: [],
  token: '',
  loading: true
};

const { Provider, Consumer } = React.createContext(initialState);

class UserProfileProvider extends React.Component {
  static Consumer = Consumer;
  static connect = createConnect(Consumer);

  state = {
    ...initialState,
    _prev: { }
  }

  static getDerivedStateFromProps = (props, state) => (
    props !== state._prev
      ? { ...props, _prev: props, }
      : null
  )

  changeCurrentUser = (data) => {
    this.setState(
      updateUserData(data)
    );
    this.setState({ loading: false });
  }

  updateCurrentUserData = (data, token) => {
    pushDataToServer(`/user`, data, token)
  }

  updateFollowersList = data => {
    this.setState(
      updateUserFollowers(data)
    );
  }

  updateFollowingList = data => {
    this.setState(
      updateUserFollowing(data)
    );
  }

  loadUser() {
    fetchGithubUser(this.props.userLogin)
      .then(this.changeCurrentUser);
  }

  loadUserFollowers() {
    fetchGithubData(this.props.userLogin, '/followers')
      .then(this.updateFollowersList);
  }

  loadUserFollowing() {
    fetchGithubData(this.props.userLogin, '/following')
      .then(this.updateFollowingList);
  }

  componentDidMount() {
    this.loadUser();
    this.loadUserFollowers();
    this.loadUserFollowing();
  }

  getContext() {
    const { _prev, ...state } = this.state;
    return {
      ...state,
      updateCurrentUserData: this.updateCurrentUserData,
      changeCurrentUser: this.changeCurrentUser
    }
  }

  render() {
    return (
      <Provider value={this.getContext()}>
        {this.props.children}
      </Provider>
    );
  }

}

export default UserProfileProvider;
