import React from 'react';
const imgLogo = require('../../../images/logo.png')
export default class MobileHeader extends React.Component{
    render(){
        return(
            <div id="mobileheader">
                <header>
                    <img src={imgLogo} alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        )
    }
}