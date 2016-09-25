import React from 'react';
import NavbarButton from './widget/NavbarButton';
export default class Header extends React.Component {
  //定义初始状态
  constructor(props){
    super(props);
    this.state = {
      userSettingIsVisible: false   //右上角用户设置是否显示

    }
  }
  //定义更改左侧导航方法
  changeNavbar(){
    return function () {
      this.props.changeNavbar();
    }.bind(this);
  }
  //定义用户设置显示或关闭方法
  isVisibleUserSetting(){
    return function () {
      let setUserSettingIsVisible = !this.state.userSettingIsVisible;
      this.setState({
        userSettingIsVisible: setUserSettingIsVisible
      });
    }.bind(this);
  }
  render(){
    let navbarClassName,
        userSettingClassName;
    if (this.props.navbarState){
      navbarClassName = 'navbar-header aside bg-primary nav-xs';
    }else {
      navbarClassName = 'navbar-header aside bg-primary';
    }
    if (this.state.userSettingIsVisible){
      userSettingClassName = 'dropdown open';
    }else {
      userSettingClassName = 'dropdown';
    }
    return(
      <header className="bg-light lter header header-md navbar navbar-fixed-top-xs">
        <div className={navbarClassName}>
          <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html"> <i className="icon-list"></i>
          </a>
          <a href="index.html" className="navbar-brand text-lt">&nbsp;<i className="icon-screen-desktop"></i>&nbsp;
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
            <li className="hidden-xs">
              <a href="#" className="dropdown-toggle lt" data-toggle="dropdown">
                <i className="icon-bell"></i>
                <span className="badge badge-sm up bg-danger count">2</span>
              </a>
              <section className="dropdown-menu aside-xl animated fadeInUp">
                <section className="panel bg-white">
                  <div className="panel-heading b-light bg-light"> <strong>You have
                    <span className="count">2</span>
                    notifications</strong>
                  </div>
                  <div className="list-group list-group-alt">
                    <a href="#" className="media list-group-item">
                                        <span className="pull-left thumb-sm">
                                            <img src="images/a0.png" alt="..." className="img-circle" /></span>
                      <span className="media-body block m-b-none">
                                            Use awesome animate.css
                                            <br />
                                            <small className="text-muted">10 minutes ago</small>
                                        </span>
                    </a>
                    <a href="#" className="media list-group-item">
                                        <span className="media-body block m-b-none">
                                            1.0 initial released
                                            <br />
                                            <small className="text-muted">1 hour ago</small>
                                        </span>
                    </a>
                  </div>
                  <div className="panel-footer text-sm">
                    <a href="#" className="pull-right">
                      <i className="fa fa-cog"></i>
                    </a>
                    <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>
                  </div>
                </section>
              </section>
            </li>
            <li className={userSettingClassName} onClick={this.isVisibleUserSetting()}>
              <a href="#" className="dropdown-toggle bg clear" data-toggle="dropdown">
                            <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                                <img src="images/a0.png" alt="..." /></span>
                谢林栩 <b className="caret"></b>
              </a>
              <ul className="dropdown-menu animated fadeInRight">
                <li>
                  <span className="arrow top"></span>
                  <a href="#">设置</a>
                </li>
                <li>
                  <a href="profile.html">属性</a>
                </li>
                <li>
                  <a href="#">
                    <span className="badge bg-danger pull-right">3</span>
                    消息
                  </a>
                </li>
                <li>
                  <a href="docs.html">帮助</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="modal.lockme.html" data-toggle="ajaxModal" >注销并退出</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
