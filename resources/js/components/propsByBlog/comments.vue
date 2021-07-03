<template>
    <div>
        <div class="card mb-4">
            <div class="card-body">
                <comment-add :post_comment="post_comment" :blog_details="blog_details" ></comment-add>
            </div>
        </div>
        <div class="card">
        <div class="card-body">
            <ul>
                <li class="d-flex flex-wrap align-content-center my-2" v-for="item in selected_comments" :key="item.id">
                    <img class="img-fluid rounded-circle" src="/ayon.jpg" style="height: 65px; padding: 10px;" alt="" />
                    <div class="ml-4 py-2" style="flex: 1;">
                        <h6>{{item.name}}</h6>
                        <p>{{item.comment}}</p>
                    </div>
                </li>
            </ul>
        </div>
</div>
    </div>
</template>

<script>
import CommentAdd from './commentAdd.vue'
export default {
    props:['selected_comments','post_comment','blog_details'],

    components:{
        CommentAdd
        }

}
</script>

<style>

</style>
