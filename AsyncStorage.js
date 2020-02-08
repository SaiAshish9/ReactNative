import {AsyncStorage} from 'react-native'

export function submit({entry,key}){
    return AsyncStorage.mergeItem(KEY,JSON.stringify({
        [key]:entry,                  
    }))

}

export function remove(key){
return AsyncStorage.getItem(KEY)
       .then(results=>{
           const data=JSON.parse(results)
           data[key]=undefined
           delete data[key]
           AsyncStorage.setItem(KEY,JSON.stringify(data))
       })
}
