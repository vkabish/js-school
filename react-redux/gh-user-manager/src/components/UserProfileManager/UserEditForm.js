import React from 'react';
import UserProfileProvider from '../UserProfileProvider';
import { Link } from 'react-router-dom';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);

    const { token } = props;
    const { name, company, location, bio } = props.user;

    this.state = {
      name,
      company,
      location,
      bio,
      token
    };
  }

  changeUserInfo = (param) => ({ target }) => this.setState({
    [param]: target.value
  })

  handleSubmit = evt => {
    evt.preventDefault();
    const { history, updateCurrentUserData, changeCurrentUser } = this.props;
    const { token, ...rest } = this.state;

    if (typeof updateCurrentUserData === 'function') {
      updateCurrentUserData(rest, token);
      changeCurrentUser(rest);
    }

    history.push('following');
  }

  componentWillReceiveProps() {
    const { user } = this.props;
    this.setState({
      ...user
    });
  }

  render() {
    const { name, bio, company, location, token } = this.state;

    return (
      <div className="col-xs-8">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Edit user information</h3>
          </div>
          <form className="panel-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="user-name">User name</label>
              <input
                type="text"
                className="form-control"
                id="user-name"
                placeholder="User name"
                value={name}
                onChange={this.changeUserInfo('name')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Company"
                value={company}
                onChange={this.changeUserInfo('company')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
                value={location}
                onChange={this.changeUserInfo('location')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                className="form-control"
                id="bio"
                placeholder="Bio"
                value={bio}
                onChange={this.changeUserInfo('bio')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="token">Github Token</label>
              <input
                type="text"
                className="form-control"
                id="token"
                placeholder="Token"
                value={token}
                onChange={this.changeUserInfo('token')}
              />
            </div>

            <Link to="following" className="btn btn-default">
              Cancel
            </Link>

            <button
              type="submit"
              className="btn btn-primary pull-right"
              disabled={!token}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const getProps = ({
  user,
  token,
  changeCurrentUser,
  updateCurrentUserData
}) => ({
  user,
  token,
  changeCurrentUser,
  updateCurrentUserData
});

export default UserProfileProvider.connect(getProps)(UserEditForm);
