import React from 'react';
import Loading from './Loading';
import Superagent from 'superagent';
import AlertInfo from './AlertInfo';
const Cheerio = window.require('cheerio');
export default class List extends React.Component {
    //定义初始状态
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            info: false,
            item: []
        }
    }

    /*_handleLogin() {
     let options = {
     type: 'info',
     buttons: ['确定'],
     title: '登录',
     message: this.state.userName,
     defaultId: 0,
     cancelId: 0
     };

     dialog.showMessageBox(options, (response) => {
     if (response == 0) {
     }
     });
     }*/

    componentDidMount() {

        Superagent
            .get(this.props.path)
            .end((err, res) => {
                if (res.ok) {
                    let $ = Cheerio.load(res.text);
                    let items = [];
                    $('.newsList li a').each(function (idx, element) {
                        let $element = $(element);
                        items.push({
                            title: $element.attr('title'),
                            // title: $element.text(),
                            href: 'http://www.gxtc.edu.cn' + $element.attr('href')
                        });
                    });
                    this.setState({loading: false, item: items});
                } else {
                    this.setState({loading: false, info: true});
                }
            });
    }

    render() {
        let isShow = this.state.info;   //是否显示提示信息
        let content = [];   //输出内容
        let list = [];
        let data = this.state.item;
        data.forEach(function (value, index) {
            list.push(<li key={index} className="list-group-item"><a href={value.href} target="_blank">{value.title}</a>
            </li>);
        });
        content.push(<Loading key="Loading" isShow={this.state.loading}/>);
        if (isShow)
            content.push(<AlertInfo key="AlertInfo" alert="danger" info="无法连接网络，请检查您的网络设置或稍后重试"/>);
        return (
            <div className="col-lg-12">
                {content}
                <ul className="list-group">
                    {list}
                </ul>
            </div>
        );
    }
}