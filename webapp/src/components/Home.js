import React from 'react';
import ArticleList from './widget/ArticleList';
// const electron = window.require('electron');
// const {ipcRenderer, shell} = electron;
// const {dialog} = electron.remote;


export default class Content extends React.Component {



    render() {

        return (
            <div>
                <ArticleList path='http://www.gxtc.edu.cn/Category_39/Index.aspx' />
            </div>
        )
    }
}
