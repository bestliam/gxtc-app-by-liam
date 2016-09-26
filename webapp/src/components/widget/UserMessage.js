import React from 'react';
export default class UserMessage extends React.Component {
    //定义初始状态
    constructor(props){
        super(props);
        this.state = {
            userMessageIsVisible: false //右上角用户消息是否显示
        }
    }
    //定义用户消息显示或关闭方法
    isVisibleUserMessage(){
        return function () {
            let setUserMessageIsVisible = !this.state.userMessageIsVisible;
            this.setState({
                userMessageIsVisible: setUserMessageIsVisible
            });
        }.bind(this);
    }
    render () {
        let userMessageClassName;
        if (this.state.userMessageIsVisible){
            userMessageClassName = 'hidden-xs open';
        }else {
            userMessageClassName = 'hidden-xs';
        }
        return (
            <li className={userMessageClassName} onClick={this.isVisibleUserMessage()}>
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
        );
    }
}