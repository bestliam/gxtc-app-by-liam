require('../../styles/loading.css');
import React from 'react';
export default class Loading extends React.Component {

    render() {

        let loadingClass = 'sk-circle';
        if (this.props.isShow) {
            loadingClass = 'sk-circle'
        } else {
            loadingClass = ''
        }
        return (
            <div className={loadingClass}>
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
            </div>
        )
    }
}