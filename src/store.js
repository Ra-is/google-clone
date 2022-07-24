import {createStore} from 'vuex'
import searchModel from './Search/index.js'

const store = createStore({
    modules:{
        searches: searchModel
    },
    state(){
        return {
            counter: '04',
            search_items:[
                {
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    
                },
                {
                    link:'https//test.com',
                    created_at: '8 jan 2002',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                }
                ,{
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    link:'https//test.com',
                    created_at: '8 april 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    link:'https//test.com',
                    created_at: '14 oct 2019',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                }
            ],
        }
    }
})
export default store