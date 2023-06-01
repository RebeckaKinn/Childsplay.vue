
<template>
    <span>
        <button 
            class="back-button" 
            v-on:click="Back">
                back
        </button>
    </span>
</template>

<script>
    export default {
        methods: {
            Back(){
                return this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
.back-button{
    position: fixed;
    top: 10px;
    right: 10px;
}
</style>