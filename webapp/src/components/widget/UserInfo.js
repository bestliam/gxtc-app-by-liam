import React from 'react';
export default class UserInfo extends React.Component {
    //定义初始状态
    constructor(props){
        super(props);
        this.state = {
            userSettingIsVisible: false   //右上角用户设置是否显示
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
        let userSettingClassName;
        if (this.state.userSettingIsVisible){
            userSettingClassName = 'dropdown open';
        }else {
            userSettingClassName = 'dropdown';
        }
        return (
            <li className={userSettingClassName} onClick={this.isVisibleUserSetting()}>
                <a href="#" className="dropdown-toggle bg clear" data-toggle="dropdown">
                            <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                                <img src="./images/a0.png" alt="..." /></span>
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
        );
    }
}