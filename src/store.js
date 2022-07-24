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
                    id: 1,
                    link:'https//test.com',
                    title: 'Get the Latest',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    
                },
                {
                    id: 2,
                    title: 'Machine Learning Examples',
                    link:'https//test.com',
                    created_at: '8 jan 2002',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    id: 3,
                    title: 'BeanStlk AWS lambda',
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    id: 4,
                    link:'https//test.com',
                    title: 'Vue js and Reactive(Differences)',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    id: 5,
                    title: 'Introduction to Programming',
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                }
                ,{
                    id: 6,
                    title: 'How machine learning works',
                    link:'https//test.com',
                    created_at: '28 Dec 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    id: 7,
                    title: 'Youtube tutorials on desktop application',
                    link:'https//test.com',
                    created_at: '8 april 2017',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                },
                {
                    id: 8,
                    title: 'More Example on Text classification',
                    link:'https//test.com',
                    created_at: '14 oct 2019',
                    short_desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                
                }
            ],
        }
    }
})
export default store