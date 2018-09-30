import React from 'react';
import UserPreview from './UserPreview';
import UserInfo from './UserInfo';
import UserProfileProvider from '../UserProfileProvider/';

const UserProfile = ({ view = 'view', user, loading }) => (
  <div className="col-xs-4">
    { user &&
      <div className="panel panel-default">
        <div className="panel-body">
          <UserPreview {...user} />
          <UserInfo view={view} {...user} />
        </div>
       </div>
    }
    { loading && 'Loading ....' }
  </div>
);

const getProps = ({ user, loading }) => ({ user, loading });

export default UserProfileProvider.connect(getProps)(UserProfile);

  // changeUser = data => {
  //   this.setState(
  //     updateUserData(data)
  //   );
  //   this.setState({ loading: false });
  //   pushDataToServer(data)
  // }

  // loadUser() {
  //   fetchGithubUser(this.props.user)
  //     .then(this.changeUser);
  // }

  // componentDidMount() {
  //   this.loadUser();
  // }

  // toggleMode = () => this.setState(
  //   ({ mode }) => ({
  //     mode: mode === UP_MODE_VIEW
  //       ? UP_MODE_EDIT
  //       : UP_MODE_VIEW,
  //   }),
  // )

//   render() {
//     const { mode, loading } = this.state;
//     const { user } = this.props;
//     return (
//       <UserProfileProvider>
//         <div>
//
//         </div>
//       </UserProfileProvider>
//     );
//   }
// }

// export default UserProfile;
