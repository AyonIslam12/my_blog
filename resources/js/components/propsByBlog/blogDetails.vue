<template>
<div>
      <div class="card mb-2">
        <div class="card-body">
            <h5>{{blog_details.title}}</h5>
            <p>{{blog_details.description}}</p>
        </div>
    </div>
    <comments :blog_details="blog_details" :post_comment="post_comment" :selected_comments="selected_comments"></comments>
</div>
</template>

<script>
import Comments from './comments.vue'
export default {
    props:['blog_details','selected_comments','post_comment'],
    components:{
        Comments
        }

}
</script>


<style>

</style>
