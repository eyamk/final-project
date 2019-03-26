var listinitial=[{
    
  name:"L'astragle",
  image:"https://media-cdn.tripadvisor.com/media/photo-s/0f/bb/ee/cb/terrasse-ete.jpg",
  lieu:"Tunis",
  paragraphe:'Plus qu’un restaurant, L’Astragale est une expérience, où l’excellence du service rivalise avec la qualité et l’esthétisme des plats. Un mélange unique d’un charme certain qui, loin d’être désuet, transforme le dîner en parenthèse enchantée..Lieu idéal pour vos repas d’affaires, ou vos sorties en tête à tête.'
,link:'https://www.restaurant-lastragale.com', _id:'1'},{
  
name:"The pirate",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
lieu:"monastir",
paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com',_id:'2'},{
  
name:'Miams',
image:"http://www.eurekastudio.tn/Files/App_002/Projets%20en%20cours/Res%20Miams/3D/img1.jpg",
lieu:"sousse",
paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com',_id:'3'}
,{
  
name:'Dar El Jeld',
image:"https://i1.wp.com/www.betunisia.com/wp-content/uploads/2016/02/dareljeld2.jpg?resize=580%2C300&ssl=1",
lieu:"Tunis",
paragraphe:"The DAR EL JELD gourmet restaurant of traditional cuisine, ranked among the best restaurants in Tunisia.  The ROOFTOP restaurant overlooking the rooftops of the medina, open until late into the night, offer a wide range of fine cuisine and a selection of Tunisian and foreign wines."
,link:'http://www.dareljeld.com/fr/restaurants',_id:'4'},{
  
name:"El Walima",
image:"https://media-cdn.tripadvisor.com/media/photo-s/0f/bb/ee/cb/terrasse-ete.jpg",
lieu:"Tunis",
paragraphe:'Plus qu’un restaurant, L’Astragale est une expérience, où l’excellence du service rivalise avec la qualité et l’esthétisme des plats. Un mélange unique d’un charme certain qui, loin d’être désuet, transforme le dîner en parenthèse enchantée..Lieu idéal pour vos repas d’affaires, ou vos sorties en tête à tête.'
,link:'https://www.restaurant-lastragale.com',_id:'5'},{

name:'Sultan Ahmet',
image:"http://www.kharjet.tn/sites/default/files/2017-06/10999570_861202657260370_5972673352452352175_o_1.jpg",
lieu:"tunis",
paragraphe:"The success of the Sultan Ahmet restaurant is also tender meat, mainly lamb and veal cooked over a wood fire. A wide selection of grills are offered such as kebab, Urfa kebab, Iskander kebab and many other tasty and juicy dishes. Our merguez is also homemade made with selected meat."
,link:'http://sultanahmet.tn/' ,_id:'6'},{

name:'the toretta',
image:"https://media-cdn.tripadvisor.com/media/photo-s/04/63/54/6a/la-torretta.jpg",
lieu:"sfax",
paragraphe:'The toretta invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.the toretta offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:"http://www.lepiratemonastir.com" ,_id:'7'}
,{

name:'The corail',
image:"http://www.promohotel.tn/images_hotel/162/Le%20Corail%20Suites%20Hotel-Restaurant.jpg",
lieu:"Sfax",
paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:"http://www.promohotel.tn/hotels/tunisie/tunis/162/le-corail-suites-hotel-.html#ad-image-0" ,_id:'8'}]
const state2=listinitial
const restaurantReducer=(state=listinitial,action)=>
{
switch(action.type)
{
  
case 'SEARCH' : return state2.filter(el => el.lieu.toLowerCase()===action.keyword.toLowerCase()) 

case 'SEARCH-NAME' : return state2.filter(el => el.name.toLowerCase().indexOf(action.keyword)>-1)
    default :
    return state
}

}

export default restaurantReducer