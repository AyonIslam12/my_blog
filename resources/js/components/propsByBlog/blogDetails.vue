<template>
<div>
      <div class="card md-4">
        <div class="card-body">
            <h5>Blog title</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Eum, dolore? Reprehenderit quidem, a corporis, quod beatae
                 magnam perferendis omnis distinctio modi aut veritatis obcaecati
                 officiis. Dolores autem eaque nobis explicabo?</p>
        </div>
    </div>
    <comments></comments>
</div>
</template>

<script>
import Comments from './comments.vue'
export default {
    components:{
        Comments
        }

}
</script>


<style>

</style>
