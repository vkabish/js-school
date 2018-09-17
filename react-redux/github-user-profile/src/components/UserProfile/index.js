import React from 'react';
import UserPreview from './UserPreview';
import UserInfo from './UserInfo';
import UserEditForm from './UserEditForm';

import { fetchGithubUser, updateUserData, pushDataToServer } from '../../models/user';

const UP_MODE_VIEW = 'view';
const UP_MODE_EDIT = 'edit';
class UserProfile extends React.Component {
  state = {
    mode: UP_MODE_VIEW,
    user: null,
    loading: true,
  }

  changeUser = data => {
    this.setState(
      updateUserData(data)
    );
    this.setState({ loading: false });
    pushDataToServer(data)
  }

  loadUser() {
    fetchGithubUser(this.props.user)
      .then(this.changeUser);
  }

  componentDidMount() {
    this.loadUser();
  }

  // componentDidUpdate(prevProps) {
  //   const { user } = this.props;
  //   if (prevProps.user !== bookUrl) {
  //     this.loadBook();
  //   }
  // }

  toggleMode = () => this.setState(
    ({ mode }) => ({
      mode: mode === UP_MODE_VIEW
        ? UP_MODE_EDIT
        : UP_MODE_VIEW,
    }),
  )

  render() {
    const { mode, user, loading } = this.state;
    return (
      <div>
        { user && 
          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <UserPreview {...user} />
                { mode === UP_MODE_VIEW && 
                  <UserInfo {...user} onViewModeClick={this.toggleMode} />
                }
              </div>
            </div>
          </div>
        }
        { mode === UP_MODE_EDIT && 
          <UserEditForm user={user} onChange={this.changeUser} onViewModeClick={this.toggleMode} />
        }
        { loading && 'Loading ....' }
      </div>
    );
  }
}

export default UserProfile;
