require('normalize.css/normalize.css');
require('styles/bootstrap.css');
require('styles/animate.css');
require('styles/font-awesome.min.css');
require('styles/simple-line-icons.css');
require('styles/font.css');
require('styles/App.css');


import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Content from './Content';

class AppComponent extends React.Component {
  //定义场景初始状态
  constructor(props){
    super(props);
    this.state = {
        navbarIsVisible: true   //左侧导航栏是否显示

    }
  }
  /*
   * 更改左侧导航栏状态
   * @param index 输入当前被执行 inverse 操作的图片对应的图片信息数组的index 值
   * @return {Function} 这是一个比闭包函数， 其内return一个真正待被执行的函数
   */
  changeNavbar(){
    return function () {
      let setNavbarIsVisible = !this.state.navbarIsVisible;

      this.setState({
        navbarIsVisible: setNavbarIsVisible
      });
    }.bind(this);
  }
  render() {
    return (
    <section className="vbox">
        <Header navbarState={this.state.navbarIsVisible} changeNavbar={this.changeNavbar()}/>
        <section>
            <section className="hbox stretch">

                <Aside navbarState={this.state.navbarIsVisible}/>

                <Content />

            </section>
        </section>
    </section>
);
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
