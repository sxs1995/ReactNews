import React from 'react'
import MobileHeader from './header/mobile_header'
import MobileFooter from './footer/mobile_footer'

export default class MobileIndex extends React.Component{
    render(){
        return (
            <div>
                <MobileHeader />   
                <MobileFooter />   
            </div>
        )
    }
}