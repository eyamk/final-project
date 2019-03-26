import React, { Component } from 'react';
    import { Container, Row, Col } from 'react-grid-system';
    import Seemore from './seemore'
    import Staticitem from './staticitem'
    import './App.css'

const tab=[{name:"L'astragal",image:'https://media-cdn.tripadvisor.com/media/photo-s/0f/bb/ee/cb/terrasse-ete.jpg',link:'https://www.restaurant-lastragale.com', lieu:'Tunis'}
,{name:'the pirate',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF',link:'http://www.lepiratemonastir.com/', lieu:'Monastir'}
,{name:'Miams',image:'http://www.eurekastudio.tn/Files/App_002/Projets%20en%20cours/Res%20Miams/3D/img1.jpg',link:'https://www.tripadvisor.fr/Restaurant_Review-g1189197-d12658720-Reviews-Miam_s-Hammam_Sousse_Sousse_Governorate.html', lieu:'Sousse'},
{name:'the corail',image:'http://www.promohotel.tn/images_hotel/162/Le%20Corail%20Suites%20Hotel-Restaurant.jpg',link:'https://www.tripadvisor.fr/Restaurant_Review-g317087-d2619777-Reviews-Le_Corail-Sfax_Sfax_Governorate.html', lieu:'Sfax'}]

class Staticlist extends Component {
    
  

    render() { 
      
        return ( 
<div>

<div div className='contact-item-container'>

        <Container>
       <div className="section-title">
          <br/><br/><br/>
            <h2>Best Restaurants in tunisia</h2><br/><br/>
          </div>
                <Row>
            {tab.map((el,index)=><Col sm={3}><Staticitem item={el} key={index}/></Col>)}
            </Row>
            </Container>
        </div>
            <Seemore/>      
                  
        </div>
      
      );
    }
}


 
export default Staticlist;