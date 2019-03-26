import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './header'

class Morefeedback extends Component {
    
    render() { 
        
        return (

            <div><Header/>
            <br/><br/><br/><br/><br/><br/>
            <section className="our-team">
            
            <div className="section-title">
              <h2>Guests opinion</h2>
            </div>
            <div className="member-slider">	
              <div className="item">
                <div className="member-info">
                  <div className="img"><img src="https://i.skyrock.net/4002/86834002/pics/3140195438_1_2_hOwaGYlK.jpg" alt /></div>
                  <p>“Une belle ambiance dans un endroit superbe. Service impeccable et nourriture traditionnelle préparée par des maîtresses cuisinières....</p>
                  <p> N’oubliez pas de vous perdre dans les petites rues de la médina voisine, on y découvre des perles savoureuses.</p>
                  <div className="member-name">-Hela H<span></span>Sousse</div>
                </div>
              </div>
              <div className="item">
                <div className="member-info">
                  <div className="img"><img src="https://file1.telestar.fr/var/telestar/storage/images/media/images/2015/photos/20150916-yves-mourousi-sa/la-fille-d-yves-mourousi/1151123-1-fre-FR/La-fille-d-Yves-Mourousi_width1024.jpg" alt /></div>
                  <p>“Accueil, personnel, cuisine, cadre tout était au rdv.. Merci à l’equipe du restaurant de l’hotel pour son professionnalisme et son service. ...</p>
                  <p>Et bien sûr au chef qui a eut la patience de nous expliquer sa passion pour son travail. Tout était parfait.</p>
                  <div className="member-name">-Jamila J<span>Djerba</span></div>
                </div>
              </div>
              <div className="item">
                <div className="member-info">
                  <div className="img"><img src="images/team-member/member-img3.png" alt /></div>
                  <p>“Un service irréprochable. L'équipe presque inchangée. Une clientèle très sélect..</p>
                  <p> Notre Nième dîner du réveillon dans ce restaurant et toujours satisfaits par la délicatesse de l'équipe et la qualité des repas. Je le recommande vivement...</p>
                  <div className="member-name">-Gaith G<span></span>Gabes</div>
                </div>
              </div>
              <div className="item">
                <div className="member-info">
                  <div className="img"><img src="http://image.noelshack.com/fichiers/2015/24/1434252039-5.jpg" alt /></div>
                  <p>“ un cadre de reve, une ambiance unique, une musique envoutante, des plats ensorcelants. aucune hésitation...</p>
                  <p>un service à la hauteur vraiment à faire en passant par Tunis.</p>
                  <div className="member-name">-Roua R<span>Hamamet</span></div>
                </div>
              </div>
              <div className="item">
                <div className="member-info">
                  <div className="img"><img src="images/team-member/member-img2.png" alt /></div>
                  <p>“Il faut absolument y aller si vous êtes à Tunis ! Le cadre est exceptionnel le décor mêle tradition et rafinement......</p>
                  <p>Nous avons passé un excellent moment la nourriture est simplement incroyable tout en restant très traditionnel....</p>
                  <div className="member-name">-Salem S<span>Sfax</span></div>
                </div>
              </div>
              <div className="item">
                <div className="member-info">
                  <div className="img"><img src="http://static1.purepeople.com/articles/4/27/65/4/@/189578-simon-taglioni-beau-garcon-et-frere-950x0-1.jpg" alt /></div>
                  <p>“C'est à chaque fois, la même bonne surprise !! Un accueil des plus chaleureux, conjugué à des plats des plus raffinés et exquis. Que demander de plus !!...</p>
                  <p>Le service est à la hauteur des lieux.</p>
                  <div className="member-name">-Jaafer J<span>Montréal </span></div>
                </div>
              </div>
            </div>
          </section>
          </div>
            );
        }
    }
    
    export default Morefeedback;