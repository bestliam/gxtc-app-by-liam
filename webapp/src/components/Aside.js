import React from 'react';
import { Link } from 'react-router';
export default class Aside extends React.Component {
  //定义初始状态
  constructor(props){
    super(props);
    this.state = {
      userSettingIsVisible: false   //左下角用户设置是否显示
    }
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
  render() {
    let navbarClassName,
      userSettingClassName;
    if (this.props.navbarState){
      navbarClassName = 'bg-primary aside hidden-print nav-off-screen nav-xs';
    }else {
      navbarClassName = 'bg-primary aside hidden-print nav-off-screen';
    }
    if (this.state.userSettingIsVisible){
      userSettingClassName = 'dropdown dropup wrapper-sm clearfix open';
    }else {
      userSettingClassName = 'dropdown dropup wrapper-sm clearfix';
    }
    return (
      <aside className={navbarClassName} id="nav">
        <section className="vbox">
          <section className="w-f-md scrollable">
            <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0"
                 data-size="10px" data-railOpacity="0.2">
              <nav className="nav-primary hidden-xs">
                <ul className="nav bg clearfix">
                  <li className="active">
                    <a href="index.html">
                      <i className="icon-globe icon  "></i> <b className="badge bg-danger pull-right">new</b>
                      <span className="font-bold">服务</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/home">
                      <i className="icon-music-tone-alt icon  "></i>
                      <span className="font-bold">系统</span>
                    </Link>
                  </li>

                  <li>
                    <a href="events.html">
                      <i className="icon-drawer icon  "></i>
                      <b className="badge bg-primary pull-right">6</b>
                      <span className="font-bold">事件</span>
                    </a>
                  </li>
                  <li>
                    <a href="listen.html">
                      <i className="icon-list icon   "></i>
                      <span className="font-bold">Listen</span>
                    </a>
                  </li>
                  <li>
                    <a href="video.html" data-target="#content" data-el="#bjax-el" data-replace="true">
                      <i className="icon-social-youtube icon   "></i>
                      <span className="font-bold">Video</span>
                    </a>
                  </li>
                  <li className="m-b hidden-nav-xs"></li>
                  {this.props.children}
                </ul>
              </nav>
            </div>
          </section>

          <footer className="footer hidden-xs no-padder text-center-nav-xs">
            <div className="bg hidden-xs ">
              <div className={userSettingClassName} onClick={this.isVisibleUserSetting()}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="thumb-sm avatar pull-left m-l-xs">
                                            <img src="images/a3.png" className="dker" alt="..."/>
                                            <i className="on b-light"></i>
                                        </span>
                  <span className="hidden-nav-xs clear">
                                            <span className="block m-l"> <strong
                                              className="font-bold text-lt">谢林栩</strong>
                                                <b className="caret"></b>
                                            </span>
                                            <span className="text-muted text-xs block m-l">教师</span>
                                        </span>
                </a>
                <ul className="dropdown-menu animated fadeInRight aside text-left">
                  <li>
                    <span className="arrow bottom hidden-nav-xs"></span>
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
                    <a href="modal.lockme.html" data-toggle="ajaxModal">注销并退出</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </section>
      </aside>
    );
  }
}
