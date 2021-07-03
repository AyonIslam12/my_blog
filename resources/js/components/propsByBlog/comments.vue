<template>
   <div class="card">
        <div class="card-body">
            <ul>
                <li class="d-flex flex-wrap align-content-center my-2" v-for="item in 5" :key="item">
                    <img class="img-fluid rounded-circle" src="/ayon.jpg" style="height: 65px; padding: 10px;" alt="" />
                    <div class="ml-4 py-2" style="flex: 1;">
                        <h6>Mr. Mehedi Hasan</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, quis.</p>
                    </div>
                </li>
            </ul>
        </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
