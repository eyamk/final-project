import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';

class Partnersitem extends Component {
    
    render() { 
        const {item}=this.props
        return ( <div>

<img src={item.image}/>


<br/><br/><br/>
            
            </div>
            
    );
}
}

export default Partnersitem ;