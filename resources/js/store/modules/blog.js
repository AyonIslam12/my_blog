import axios from "axios";

//state list
const state = {
    blog_list:[
        {
            id:1,
            title: 'This is Blog1',
            description: 'Blog1 Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque assumenda deserunt doloremque et consequatur molestiae quasi enim, rerum saepe.'
        },
        {
            id:2,
            title: 'This is Blog2',
            description: 'Blog2 Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque assumenda deserunt doloremque et consequatur molestiae quasi enim, rerum saepe.'
        },
        {
            id:3,
            title: 'This is Blog3',
            description: 'Blog3 Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque assumenda deserunt doloremque et consequatur molestiae quasi enim, rerum saepe.'
        },
        {
            id:4,
            title: 'This is Blog4',
            description: 'Blog4 Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque assumenda deserunt doloremque et consequatur molestiae quasi enim, rerum saepe.'
        },
        {
            id:5,
            title: 'This is Blog5',
            description: 'Blog4 Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque assumenda deserunt doloremque et consequatur molestiae quasi enim, rerum saepe.'
        },
    ],
    blog_details: {
        id: '',
        title: '',
        description: '',

    },
    comments:[
        {
            id:1,
            blog_id: 1,
            name: 'Ayon Islam',
            comment: 'Good Lorem ipsum dolor sit amet.',
        },
        {
            id:2,
            blog_id: 2,
            name: 'Mehedi Hasan',
            comment: 'Yeah Lorem ipsum dolor sit.',
        },
        {
            id:3,
            blog_id: 3,
            name: 'Ajhar Islam',
            comment: 'Hi Lorem ipsum dolor sit adipisicing.',
        },
        {
            id:4,
            blog_id: 3,
            name: 'Sopon Khan',
            comment: 'Hlw ipsum dolor sit amet consectetur .',
        },
        {
            id:5,
            blog_id: 3,
            name: 'Mumu Khan',
            comment: 'Ok ipsum dolor sit amet consectetur .',
        },
    ],
    selected_comments:[],

}

//get state
const getters = {
    get_blog_list: state=> state.blog_list,
    get_blog_details: state=> state.blog_details,
    get_comments: state=> state.comments,
    get_selected_comments: state=> state.selected_comments,

}

//action
const actions ={
   fetch_blog_details: function(state,blog){
        this.commit('set_blog_details',blog);
        this.commit('set_comments',blog.id);
    },
    post_blog_comment: function(state, comment){
        comment.blog_id = this.state.blog.blog_details.id;
        this.commit('set_post_comment',comment);
        this.commit('set_comments',comment.blog_id);

    }


}
//mutation
const mutations ={
    set_post_comment: function(state,comment){
        comment.id = state.comments.length + 1;
        state.comments.unshift(comment);
        console.log(state, comment);
        //this.get_comments(comment.blog_id);
    },
   set_blog_details: function(state, blog){
        state.blog_details = blog;

        //this.get_comments(blog.id);
    },
   set_comments: function(state, blog_id){
        state.selected_comments = state.comments.filter((item)=>item.blog_id === blog_id);
    },
}
export default{
    state,
    getters,
    actions,
    mutations
}
