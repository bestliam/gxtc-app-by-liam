require('../../styles/loading.css');
import React from 'react';
export default class Loading extends React.Component {

       render() {
        let loadingClass = 'spinner';
        if (this.props.isShow){
            loadingClass = 'spinner'
        }else{
            loadingClass = ''
        }
        return (
            <div className={loadingClass}></div>
        )
    }
}