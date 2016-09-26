import React from 'react';
export default class Content extends React.Component {
  //定义初始状态
  constructor(props){
    super(props);
    this.state = {
      username: '',
      lastGistUrl: ''
    }
  }
  componentDidMount() {

    fetch(this.props.source).then(function(response){
      // console.log(response[0]) ;
      var lastGist = response[0];
        this.setState({
          username: '8888',
          lastGistUrl: lastGist.html_url
        });
    }.bind(this));

    // this.serverRequest = $.get(this.props.source, function (result) {
    //   var lastGist = result[0];
    //   this.setState({
    //     username: '8888',
    //     lastGistUrl: lastGist.html_url
    //   });
    // }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
        <div><p className="h4"> {this.state.username}'s last gist is
          <a href={this.state.lastGistUrl}>here</a>.</p></div>
    );
  }
}
