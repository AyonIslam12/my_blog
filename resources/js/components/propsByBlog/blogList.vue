<template>
<div class="row">
    <div class="col-md-6">
        <div class="card mb-3" v-for="item in blog_list" :key="item.id">
            <div @click="get_blog_details(item)" style="cursor:pointer" class="card-body">
                <h5>{{ item.title }}</h5>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <blog-details :post_comment="post_comment" :selected_comments="selected_comments" :blog_details="blog_details"></blog-details>

    </div>
</div>

</template>

<script>

import BlogDetails from './blogDetails.vue'
export default {
    components:{
        BlogDetails
    },
    data: function(){
       return {
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
    },

    methods:{
        get_blog_details: function(blog){
            this.blog_details = blog;
            this.get_comments(blog.id);
        },
        get_comments: function(blog_id){
             this.selected_comments = this.comments.filter((item)=>item.blog_id === blog_id);
        },
        post_comment: function(comment){
            comment.id = this.comments.length + 1;
            this.comments.unshift(comment);
           setTimeout(()=>{
                this.get_comments(comment.blog_id);
           },150);
            console.log(comment,this.comments);
        }

    }
};
</script>

<style>

</style>
