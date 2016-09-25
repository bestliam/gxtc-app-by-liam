// //控制左侧导航是否显示组件
import React from 'react';
export default class NavbarButton extends React.Component {
  handleClick(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.changeNavbar();
  }
  render() {
    return (
      <ul className="nav navbar-nav hidden-xs" onClick={this.handleClick.bind(this)}>
        <li>
          <a href="#nav,.navbar-header" data-toggle="class:nav-xs,nav-xs" className="text-muted">
            <i className="fa fa-indent text"></i>
            <i className="fa fa-dedent text-active"></i>
          </a>
        </li>
      </ul>
    )
  }
}
