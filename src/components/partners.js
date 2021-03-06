import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Partnersitem from './partnersitem';

const tab=[{image:'https://upload.wikimedia.org/wikipedia/fr/thumb/4/40/Ph2016.png/280px-Ph2016.png'},
{image:"https://vignette.wikia.nocookie.net/logopedia/images/8/88/35520944_10156607538809455_876096229426069504_n.jpg/revision/latest/scale-to-width-down/185?cb=20180729160028"},
{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YSWR7Ej9sQsLtVg9EwgbAK809hZj7b5vag3NNl-WaDjMhhp_Vg"},
{image:"https://upload.wikimedia.org/wikipedia/fr/thumb/b/bf/KFC_logo.svg/langfr-280px-KFC_logo.svg.png"},
{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcrDoMXlWwCONqr7OkX9VMb5SzdYny5R6tQ4YsLyBO-A45h9K"},
{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiHzZ0eG-BIhNrr4wdGRW4KORhJJW4xYpGpZNcZVkbqItYOkG"},
{image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Olive_Garden_Logo.svg/1200px-Olive_Garden_Logo.svg.png"},
{image:"https://rinnoo.net/f/CMS/Listings/2896_Pain-DOr-Logo1_-_Qu80_RT1600x1024-_OS350x350-_RD350x350-.png"},
{image:"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0024/6445/brand.gif?itok=6W_8eerw"},
{image:"https://americana-group.com/app/uploads/2017/12/carosle-logo-18.png"},
{image:"https://www.karirlampung.com/wp-content/uploads/2017/08/logo-Chipop.png"},
{image:"https://i.pinimg.com/originals/75/2a/23/752a23b01d920cc55430ec3534515810.png"}]

class Partners extends Component {
    
    render() { 
        
        return ( <div>
            <br/><br/>
           
          <section className="breadcrumb">




          <Container>
       <div className="section-title">
          <br/><br/><br/>
            <h2>Partners with us</h2><br/><br/>
          </div>
                <Row>
            {tab.map((el,index)=><Col sm={2}><Partnersitem item={el} key={index}/></Col>)}
            </Row>
            </Container>






</section>
<br/><br/><br/>
            
            </div>
            
    );
}
}

export default Partners ;