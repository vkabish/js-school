import React from 'react';


class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: props.user.name,
      company: props.user.company,
      location: props.user.location,
      bio: props.user.bio,
    };
  }

  changeName = ({ target }) => this.setState({
    name: target.value,
  })

  changeCompany = ({ target }) => this.setState({
    company: target.value,
  })

  changeLocation = ({ target }) => this.setState({
    location: target.value,
  })

  changeBio = ({ target }) => this.setState({
    bio: target.value,
  })

  handleSubmit = evt => {
    evt.preventDefault();
    const { onChange, onViewModeClick } = this.props;
    if (typeof onChange === 'function') {
      onChange(this.state);
    }
    onViewModeClick();
  }

  render() {
    const { onViewModeClick } = this.props;
    const { name, bio, company, location } = this.state;

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
                onChange={this.changeName} 
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
                onChange={this.changeCompany} 
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
                onChange={this.changeLocation} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <textarea 
                className="form-control" 
                id="company" 
                placeholder="Company" 
                value={bio} 
                onChange={this.changeBio} 
              />
            </div>
            
            {/* <div className="form-group">
              <label htmlFor="exampleInputFile">File input</label>
              <input type="file" id="exampleInputFile" />
              <p className="help-block">Example block-level help text here.</p>
            </div> */}

            <button type="button" className="btn btn-default" onClick={onViewModeClick}>
              Cancel
            </button>

            <button type="submit" className="btn btn-primary pull-right" >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserEditForm;
