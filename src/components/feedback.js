import React, { Component } from 'react';

class Feedback extends Component {
    render() {
      return (
        <section className="student-feedback">
          <div className="container">
            <div className="section-title">
              <h2>What our guests say</h2>
            </div>
            <div className="feedback-slider">
              <div className="item">
                <div className="student-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4PHuyXiQGgDL4wLppL4f6xynjiyK1h7FF4rcfjBqBmHZ1487xA" alt /></div>
                <div className="student-name">Mounir E</div>
                <div className="student-designation">software engineer</div>
                <p><i className="fa fa-quote-left" /> Very nice restaurant, must see, most gastronomic restaurant in Tunis. I had a good experience, nice serving. I really recommand it for groups, families or even business lunch.. <i className="fa fa-quote-right" /> </p>
              </div>
              <div className="item">
                <div className="student-img"><img src="https://media.licdn.com/dms/image/C4E03AQG9rfVAROvf2A/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=bY_-aBTLnobR4T8yfgEoVUMiTohJSNRtzlJOjN7HQhU" alt /></div>
                <div className="student-name">Mayssa M</div>
                <div className="student-designation">teacher</div>
                <p><i className="fa fa-quote-left"/>place was very clean and the people were friendly. The food was tasty and the portions very generous soup and salad, fish, steak or escalope with vegetables, couscous or potato and tea with dessert.was just ammmmazing thank you guys. <i className="fa fa-quote-right" /> </p>
              </div>
              <div className="item">
                <div className="student-img"><img src="http://fr.web.img6.acsta.net/c_215_290/pictures/18/10/15/16/01/4949600.jpg" alt /></div>
                <div className="student-name">Hardik Davaria</div>
                <div className="student-designation">mechanical engineer</div>
                <p><i className="fa fa-quote-left" />i  can't express how flattered i am with your place and service . You have like the most tasty coffee i have ever drunk. You have just made a loyal customer.. <i className="fa fa-quote-right" /> </p>
              </div>
            </div>
            <div className="more-stories">
              <a href="#" className="btn">More guests Stories</a>
            </div>
          </div>
        </section>
 );
}
}
        export default Feedback;