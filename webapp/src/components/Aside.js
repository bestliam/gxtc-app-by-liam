import React from 'react';
import NavLink from './widget/NavLink';

export default class Aside extends React.Component {



    render() {
        let navbarClassName;
            // userSettingClassName;
        if (this.props.navbarState) {
            navbarClassName = 'bg-primary aside hidden-print nav-off-screen nav-xs';
        } else {
            navbarClassName = 'bg-primary aside hidden-print nav-off-screen';
        }

            return (
                <aside className={navbarClassName} id="nav">
                    <section className="vbox">
                        <section className="w-f-md scrollable">
                            <div className="slim-scroll" data-height="auto" data-disable-fade-out="true"
                                 data-distance="0"
                                 data-size="10px" data-railOpacity="0.2">
                                <nav className="nav-primary hidden-xs">
                                    <ul className="nav bg clearfix">
                                        <li>
                                            <NavLink to="/" onlyActiveOnIndex={true}>
                                                <i className="fa fa-list-ul  "></i> <b
                                                className="badge bg-danger pull-right">2</b>
                                                <span className="font-bold">新闻</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/content">
                                                <i className="icon-list icon   "></i>
                                                <span className="font-bold">系统</span>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/content2">
                                                <i className="icon-drawer icon  "></i>
                                                <b className="badge bg-primary pull-right">6</b>
                                                <span className="font-bold">事件</span>
                                            </NavLink>
                                        </li>


                                        <li className="m-b hidden-nav-xs"></li>
                                        {this.props.children}
                                    </ul>
                                </nav>
                            </div>
                        </section>

                        <footer className="footer hidden-xs no-padder text-center-nav-xs">
                            <div className="bg hidden-xs ">
                                <div className="dropdown dropup wrapper-sm clearfix">
                                    <a className="dropdown-toggle" data-toggle="dropdown">
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
