var listinitial=[
//   
]

//const state2=listinitial
const restaurantReducer=(state=listinitial,action)=>
{
switch(action.type)
{
  
case 'SEARCH' : return state.filter(el => el.lieu.toLowerCase()===action.keyword.toLowerCase()) 

case 'SEARCH-NAME' : return state.filter(el => el.name.toLowerCase().indexOf(action.keyword)>-1)
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

  case 'UPDATE_RESTAURANT':
  return(
      state=action.listinitial
  )


    default :
    return state
}

}

export default restaurantReducer