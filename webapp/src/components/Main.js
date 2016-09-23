require('normalize.css/normalize.css');
require('styles/bootstrap.css');
require('styles/animate.css');
require('styles/font-awesome.min.css');
require('styles/simple-line-icons.css');
require('styles/font.css');
require('styles/App.css');


import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
// <img src={yeomanImage} alt="Yeoman Generator" />
// 
class AppComponent extends React.Component {
  render() {
    return (
<div className="index">
    <section className="vbox">
        <header className="bg-light lter header header-md navbar navbar-fixed-top-xs">
            <div className="navbar-header aside bg-primary nav-xs">
                <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html"> <i className="icon-list"></i>
                </a>
                <a href="index.html" className="navbar-brand text-lt"> <i className="icon-screen-desktop"></i>
                    <img src="images/logo.png" alt="." className="hide" />
                    <span className="hidden-nav-xs m-l-sm">APP</span>
                </a>
                <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
                    <i className="icon-settings"></i>
                </a>
            </div>
            <ul className="nav navbar-nav hidden-xs">
                <li>
                    <a href="#nav,.navbar-header" data-toggle="class:nav-xs,nav-xs" className="text-muted">
                        <i className="fa fa-indent text"></i>
                        <i className="fa fa-dedent text-active"></i>
                    </a>
                </li>
            </ul>
            <form className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-sm bg-white btn-icon rounded">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                        <input type="text" className="form-control input-sm no-border rounded" placeholder="Search songs, albums..." /></div>
                </div>
            </form>
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
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle bg clear" data-toggle="dropdown">
                            <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                                <img src="images/a0.png" alt="..." /></span>
                            谢林栩 <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu animated fadeInRight">
                            <li>
                                <span className="arrow top"></span>
                                <a href="#">Settings</a>
                            </li>
                            <li>
                                <a href="profile.html">Profile</a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="badge bg-danger pull-right">3</span>
                                    Notifications
                                </a>
                            </li>
                            <li>
                                <a href="docs.html">Help</a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="modal.lockme.html" data-toggle="ajaxModal" >Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
        <section>
            <section className="hbox stretch">
                
                <aside className="bg-primary nav-xs aside hidden-print" id="nav">
                    <section className="vbox">
                        <section className="w-f-md scrollable">
                            <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">

                             
                                <nav className="nav-primary hidden-xs">
                                    <ul className="nav bg clearfix">
                                        <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">Discover</li>
                                        <li className="active">
                                            <a href="index.html">
                                                <i className="icon-globe icon  "></i> <b className="badge bg-primary pull-right">46</b>
                                                <span className="font-bold">服务</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="genres.html">
                                                <i className="icon-music-tone-alt icon  "></i>
                                                <span className="font-bold">Genres</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="events.html">
                                                <i className="icon-drawer icon  "></i>
                                                <b className="badge bg-primary pull-right">6</b>
                                                <span className="font-bold">Events</span>
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
                                    </ul>
                                    <ul className="nav" data-ride="collapse">
                                        <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">Interface</li>
                                        <li>
                                            <a href="#" className="auto">
                                                <span className="pull-right text-muted">
                                                    <i className="fa fa-angle-left text"></i>
                                                    <i className="fa fa-angle-down text-active"></i>
                                                </span>
                                                <i className="icon-screen-desktop icon"></i>
                                                <span>Layouts</span>
                                            </a>
                                            <ul className="nav dk text-sm">
                                                <li  className="active">
                                                    <a href="layout-color.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Color option</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="layout-boxed.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Boxed layout</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="layout-fluid.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Fluid layout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li >
                                            <a href="#" className="auto">
                                                <span className="pull-right text-muted">
                                                    <i className="fa fa-angle-left text"></i>
                                                    <i className="fa fa-angle-down text-active"></i>
                                                </span>
                                                <i className="icon-chemistry icon"></i>
                                                <span>UI Kit</span>
                                            </a>
                                            <ul className="nav dk text-sm">
                                                <li >
                                                    <a href="buttons.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Buttons</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="icons.html" className="auto">
                                                        <b className="badge bg-info pull-right">369</b>
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Icons</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="http://www.weidea.net" className="auto">
                                                        <b className="badge bg-info pull-right">369</b>
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>More</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="grid.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Grid</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="widgets.html" className="auto">
                                                        <b className="badge bg-dark pull-right">8</b>
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Widgets</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="components.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Components</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="list.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>List group</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="#table" className="auto">
                                                        <span className="pull-right text-muted">
                                                            <i className="fa fa-angle-left text"></i>
                                                            <i className="fa fa-angle-down text-active"></i>
                                                        </span>
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Table</span>
                                                    </a>
                                                    <ul className="nav dker">
                                                        <li >
                                                            <a href="table-static.html">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Table static</span>
                                                            </a>
                                                        </li>
                                                        <li >
                                                            <a href="table-datatable.html">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Datatable</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <a href="#form" className="auto">
                                                        <span className="pull-right text-muted">
                                                            <i className="fa fa-angle-left text"></i>
                                                            <i className="fa fa-angle-down text-active"></i>
                                                        </span>
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Form</span>
                                                    </a>
                                                    <ul className="nav dker">
                                                        <li >
                                                            <a href="form-elements.html">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Form elements</span>
                                                            </a>
                                                        </li>
                                                        <li >
                                                            <a href="form-validation.html">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Form validation</span>
                                                            </a>
                                                        </li>
                                                        <li >
                                                            <a href="form-wizard.html">
                                                                <i className="fa fa-angle-right"></i>
                                                                <span>Form wizard</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <a href="chart.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Chart</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="portlet.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Portlet</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="timeline.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Timeline</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li >
                                            <a href="#" className="auto">
                                                <span className="pull-right text-muted">
                                                    <i className="fa fa-angle-left text"></i>
                                                    <i className="fa fa-angle-down text-active"></i>
                                                </span>
                                                <i className="icon-grid icon"></i>
                                                <span>Pages</span>
                                            </a>
                                            <ul className="nav dk text-sm">
                                                <li >
                                                    <a href="profile.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Profile</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="blog.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Blog</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="invoice.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Invoice</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="gmap.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Google Map</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="jvectormap.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Vector Map</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="signin.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Signin</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="signup.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>Signup</span>
                                                    </a>
                                                </li>
                                                <li >
                                                    <a href="404.html" className="auto">
                                                        <i className="fa fa-angle-right text-xs"></i>

                                                        <span>404</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nav text-sm">
                                        <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                                            <span className="pull-right">
                                                <a href="#">
                                                    <i className="icon-plus i-lg"></i>
                                                </a>
                                            </span>
                                            Playlist
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-music-tone icon"></i>
                                                <span>Hip-Pop</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-playlist icon text-success-lter"></i>
                                                <b className="badge bg-success dker pull-right">9</b>
                                                <span>Jazz</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                </div>
                        </section>

                        <footer className="footer hidden-xs no-padder text-center-nav-xs">
                            <div className="bg hidden-xs ">
                                <div className="dropdown dropup wrapper-sm clearfix">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="thumb-sm avatar pull-left m-l-xs">
                                            <img src="images/a3.png" className="dker" alt="..." />
                                            <i className="on b-light"></i>
                                        </span>
                                        <span className="hidden-nav-xs clear">
                                            <span className="block m-l"> <strong className="font-bold text-lt">谢林栩</strong>
                                                <b className="caret"></b>
                                            </span>
                                            <span className="text-muted text-xs block m-l">Art Director</span>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu animated fadeInRight aside text-left">
                                        <li>
                                            <span className="arrow bottom hidden-nav-xs"></span>
                                            <a href="#">Settings</a>
                                        </li>
                                        <li>
                                            <a href="profile.html">Profile</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="badge bg-danger pull-right">3</span>
                                                Notifications
                                            </a>
                                        </li>
                                        <li>
                                            <a href="docs.html">Help</a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                            <a href="modal.lockme.html" data-toggle="ajaxModal" >Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </section>
                </aside>
                
                <section id="content">
                    <section className="vbox">
                        <section className="scrollable wrapper w-f bg-white-only">
                            <p className="h4">Contents...</p>
                        </section>
                        <footer className="footer bg-light">
                            <p>This is a footer</p>
                        </footer>
                    </section>
                    <a href="#" className="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
                </section>
            </section>
        </section>
    </section>
</div>
);
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;