var restaurantListAdmin=[{
    _id:'2',
    name:'the pirate',
    image:'https://villa-romana-monastir.com/wp-content/uploads/2018/09/restaurant-le-pirate-monastir-1024x565.jpg',
    lieu:'monastir',
    link:'http://www.lepiratemonastir.com/'
}]

const restaurantAdminReducer=(state=restaurantListAdmin,action)=>
{
  switch(action.type)
  {  
     case 'ADD_RESTAURANT':
  return (
      state.concat(action.newrestaurant)
  )
    case 'EDIT_RESTAURANT':
    return (
        state.map(el=>(el._id===action.editrestaurant._id)?el=action.editrestaurant:el)
    )
    case 'DELETE_RESTAURANT':
    return (
        state.filter((el,index)=>el._id!==action._id)
    )
      default :
      return state
  }
  
}

export default restaurantAdminReducer