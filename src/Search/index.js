export default {
    namespaced: true,
    state(){
        return {
            data: '84'
        }
    },
    getters:{
        searchData(state)
        {
            return state.data
        }
    }
}
