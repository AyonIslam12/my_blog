<template>
  <div v-if="blog_details && blog_details.id">
      <div class="form-group">
          <label for="">Name</label>
          <input  v-model="comment_body.name" class="form-control"/>
      </div>
      <div class="form-group">
          <label for="">Comment</label>
          <textarea v-model="comment_body.comment" class="form-control"></textarea>
      </div>
      <div class="form-group">
          <button @click="comment_submit" class="btn btn-success btn-sm">Submit</button>
      </div>
  </div>
</template>

<script>
export default {
    props:['blog_details','post_comment'],
    data: function(){
        return {
            comment_body: {
                blog_id: this.blog_details.id,
                name: '',
                comment: '',
            },
        }

    },
    methods:{
        comment_submit: function(){
            this.comment_body.blog_id=this.blog_details.id;
            this.post_comment(this.comment_body);

            this.comment_body = {
                blog_id: '',
                name: '',
                comment: '',
            };
        }
    }

}
</script>

<style>

</style>
