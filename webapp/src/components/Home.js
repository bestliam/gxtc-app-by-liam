import React from 'react';
import Superagent from 'superagent';
import Loading from './widget/Loading';
export default class Content extends React.Component {
    //定义初始状态
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            username: '',
            lastGistUrl: ''
        }
    }

    componentDidMount() {
        Superagent
            .get('https://facebook.github.io/react-native/movies.json')
            .end((err,res) => {
                if(res) {
                    this.setState({loading : false,username: res.body.title, lastGistUrl: res.body.description});
                }
            });
    }

    render() {
        return (
            <div><Loading isShow={this.state.loading}/><p className="h4"> {this.state.username}
                <a href={this.state.lastGistUrl}>----here && me-----</a>.</p><script></script></div>
        );
    }
}
