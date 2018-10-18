import React from 'react'
import PCHeader from './header/pc_header'
import PCNewsContainer from './list/pc_newsContainer'
import PCFooter from './footer/pc_footer'
export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader /> 
                <PCNewsContainer /> 
                <PCFooter />
            </div>
        )
    }
}