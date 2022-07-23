import {createStore} from 'vuex'
import searchModel from './Search/index.js'

const store = createStore({
    modules:{
        searches: searchModel
    },
    state(){
        return {
            counter: '04'
        }
    }
})
export default store