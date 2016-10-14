import React from 'react';

export default class AlertInfo extends React.Component {
    //定义初始状态
    constructor(props) {
        super(props);
        this.state = {
            isVisible : true}
    }

    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({isVisible:false});
    }

    componentDidMount(){
        let self = this;
        this.timer = setTimeout(function () {
            self.setState({isVisible:false})
        },5000)
    }

    render() {
        let alert = this.props.alert,
            style = '';

        switch (alert) {
            case 'danger':
                style = 'alert alert-danger';
                break
        }
        if (!this.state.isVisible)style='none';
        return (
            <div className={style}>
                <button type="button"  className="close" data-dismiss="alert" onClick={this.onClick.bind(this)}>×</button>
                <i className="fa fa-ban-circle"></i><strong>错误！</strong>{this.props.info}
            </div>
        )
    }
}