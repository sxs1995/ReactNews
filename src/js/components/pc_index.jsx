import React from 'react'
import PCHeader from './header/pc_header'
import PCFooter from './footer/pc_footer'
export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader /> 
                <PCFooter />
            </div>
        )
    }
}