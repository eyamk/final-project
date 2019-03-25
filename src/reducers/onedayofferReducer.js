var offers=[{
    
    im:"https://media-cdn.tripadvisor.com/media/photo-s/0f/bb/ee/cb/terrasse-ete.jpg",
    date:"16-02-2019",
    price:"$1000",
    rest:'Astragale',
    val:'price ',
    _id:'1'
},{im:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mcJpWITpBzEfgwA5g_HIzDV-F0MbmIyby7iDJsHZ-Ne4ezvF",
date:"20-02-2019",
price:"Expir",
rest:'Pirate',
val:'price free',
_id:'2'} ,
    
{im:"http://www.eurekastudio.tn/Files/App_002/Projets%20en%20cours/Res%20Miams/3D/img1.jpg",
    date:"30-04-2019",
    price:"$800",
    rest:'Miams',
    val:'price',
    _id:'3'}
  ]

const onedayofferReducer=(state=offers,action)=>
{

  switch(action.type)
  {  
     case 'ADD_OFFER':
  return (
      state.concat(action.newoffer)
  )
    case 'EDIT_OFFER':
    return (
        state.map(el=>(el._id===action.editoffer._id)?el=action.editoffer:el)
    )
    case 'DELETE_OFFER':
    return (
        state.filter((el,index)=>el._id!==action._id)
    )

     case 'EXPIR_OFFER':
     return (
      state.map(el=>(el._id===action.valid._id)?el=action.valid:el)
     )
      default :
      return state
  }
  

  }
  


export default onedayofferReducer