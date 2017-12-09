import React from 'react';

export class AlbumComponent extends React.Component{
    render(){
        return (<div className="col-md-6" >
            <form >
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"/>
  </div>
  <div className="form-group">
    <label htmlFor="nickName">Nick Name:</label>
    <input type="text" className="form-control" id="nickName"/>
  </div>
  <div className="form-group">
    <label htmlFor="profilePic">profilePic Url</label>
    <input type="text" className="form-control" id="profilePic"/>
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
        
        </div>)
    }
}

export default AlbumComponent;