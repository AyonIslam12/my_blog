<template>
<div class="row">
    <div class="col-md-6">
        <div class="card mb-3" v-for="item in 5" :key="item">
            <div class="card-body">
                <h5>Blog Title</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque assumenda deserunt doloremque et consequatur molestiae quasi enim, rerum saepe.</p>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <blog-details></blog-details>

    </div>
</div>

</template>

<script>
import BlogDetails from './blogDetails.vue'
export default {
    components:{BlogDetails}

}
</script>

<style>

</style>
