var listinitial=[{
    
    name:"l'astragale",
    image:"https://media-cdn.tripadvisor.com/media/photo-s/0f/bb/ee/cb/terrasse-ete.jpg",
    lieu:"Tunis",
    paragraphe:'Plus qu’un restaurant, L’Astragale est une expérience, où l’excellence du service rivalise avec la qualité et l’esthétisme des plats. Un mélange unique d’un charme certain qui, loin d’être désuet, transforme le dîner en parenthèse enchantée..Lieu idéal pour vos repas d’affaires, ou vos sorties en tête à tête.'
,link:'https://www.restaurant-lastragale.com'},{
    
  name:'Le pirate',
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
  lieu:"monastir",
  paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
  ,link:'http://www.lepiratemonastir.com'},{
    
  name:'Miams',
  image:"http://www.eurekastudio.tn/Files/App_002/Projets%20en%20cours/Res%20Miams/3D/img1.jpg",
  lieu:"sousse",
  paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
  ,link:'http://www.lepiratemonastir.com'}
,{
    
  name:'Le pirate',
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
  lieu:"monastir",
  paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com'},{
    
  name:"l'astragale",
  image:"https://media-cdn.tripadvisor.com/media/photo-s/0f/bb/ee/cb/terrasse-ete.jpg",
  lieu:"Tunis",
  paragraphe:'Plus qu’un restaurant, L’Astragale est une expérience, où l’excellence du service rivalise avec la qualité et l’esthétisme des plats. Un mélange unique d’un charme certain qui, loin d’être désuet, transforme le dîner en parenthèse enchantée..Lieu idéal pour vos repas d’affaires, ou vos sorties en tête à tête.'
,link:'https://www.restaurant-lastragale.com'},{
  
name:'Le pirate',
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
lieu:"monastir",
paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com'},{
  
name:'Miams',
image:"http://www.eurekastudio.tn/Files/App_002/Projets%20en%20cours/Res%20Miams/3D/img1.jpg",
lieu:"sousse",
paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com'}
,{
  
name:'Le pirate',
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
lieu:"monastir",
paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com'}]

const restaurantReducer=(state=listinitial,action)=>
{

  switch(action.type)
  {
    /* case 'SRAECH':
    return(
      state.filter((el,index)=>{
        el.name.toLowerCase().indexOf(text)>-1
        
      })
    ) */
      default :
      return state
  }
  
}

export default restaurantReducer