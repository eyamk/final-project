var listinitial=[{
    
    name:'Le pirate',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
    lieu:"monastir",
    paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com/'},{
    
  name:'Le pirate',
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
  lieu:"monastir",
  paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
  ,link:'http://www.lepiratemonastir.com/'},{
    
  name:'Le pirate',
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
  lieu:"monastir",
  paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
  ,link:'http://www.lepiratemonastir.com/'}
,{
    
  name:'Le pirate',
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
  lieu:"monastir",
  paragraphe:'The Pirate invites you to his table and shares his discoveries. You will be welcome in a sublime setting, surrounded by Pirates who will be there to serve you and make you taste their most beautiful treasures.Le Pirate offers its culinary specialties: Seafood and fish in a friendly atmosphere..'
,link:'http://www.lepiratemonastir.com/'}]

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