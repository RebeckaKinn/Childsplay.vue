
<template>
    <span>
        <router-link to="">
            <button class="back-button" v-on:click="Back">back</button>
        </router-link>
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
    left: 10px;
    color: #333;
    font-size: 20px;
    padding: 8;
    border-radius: 4px;
    background-color: #f0f0f0;
    font-family: Century Gothic;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #45d0e2;
}
.back-button:hover{
    color: #45d0e2;
}
</style>