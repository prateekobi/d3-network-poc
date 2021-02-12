<template>
<div>
    <div>
       <dee-three />
    </div>
<!--    <div class="row text-center">-->
<!--      <div class="col-12">-->
<!--        <nuxt-link to='/'>-->
<!--            Back-->
<!--        </nuxt-link>-->
<!--      </div>-->
<!--    </div>-->
</div>
</template>

<script>
import DeeThree from '@/components/dee-three';
export default {
    name: 'd3-poc',
    components: {
        DeeThree
    }
}
</script>

<style scoped>

a {
    font-size: 18px;;
    color: #FFF !important;
    text-align: center;
}

</style>
