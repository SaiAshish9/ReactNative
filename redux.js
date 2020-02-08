// actions


export const RECEIVE_ENTRIES='RECEIVE_ENTRIES'
export const ADD_ENTRY='ADD_ENTRY'

export function receive_entries(entries){
    return {
        type: RECEIVE_ENTRIES,
        entries
    }
}

export function add_entry(entry){
    return {
        type: ADD_ENTRY,
        entry
    }
}
 

// reducers

function entries(state={},action){
    switch(action.type){
      case RECEIVE_ENTRIES:
          return {
              ...state,
              ...action.entries
          }
      case ADD_ENTRY:
          return {
              ...state,
              ...action.entry
          }
      default:
          return state         
    }
}

export default entries

// connect

import { connect } from 'react-redux'

const key=timeToString()
 
this.props.dispatch(add_entry({
    [key]:desired
}))


function mapStateToProps(state){
    const key=timeToString()
    return {
     alreadyLogged:state[key] && typeof state[key].today === 'undefined'   
    }

}

export const connect(mapStateToProps)(ADD_ENTRY)


