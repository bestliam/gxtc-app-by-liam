import React from 'react';
import NavbarButton from './widget/NavbarButton';
import UserMessage from './widget/UserMessage';
import UserInfo from './widget/UserInfo';
export default class Header extends React.Component {
  //定义更改左侧导航方法
  changeNavbar(){
    return function () {
      this.props.changeNavbar();
    }.bind(this);
  }
  render(){
    let navbarClassName;
    if (this.props.navbarState){
      navbarClassName = 'navbar-header aside bg-primary nav-xs';
    }else {
      navbarClassName = 'navbar-header aside bg-primary';
    }
    return(
      <header className="bg-light lter header header-md navbar navbar-fixed-top-xs">
        <div className={navbarClassName}>
          <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html"> <i className="icon-list"></i>
          </a>
          <a className="navbar-brand text-lt">&nbsp;<i className="icon-screen-desktop"></i>&nbsp;
            <img src="../images/logo.png" alt="." className="hide" />
            <span className="hidden-nav-xs m-l-sm">APP</span>
          </a>
          <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
            <i className="icon-settings"></i>
          </a>
        </div>
        <NavbarButton changeNavbar={this.changeNavbar()}/>
        <div className="navbar-right ">
          <ul className="nav navbar-nav m-n hidden-xs nav-user user">
            <UserMessage />
            <UserInfo />
          </ul>
        </div>
      </header>
    );
  }
}
