<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <slot/>

            <div>
                <label for="food-name">
                    Name
                </label>
                <input 
                    type="text"
                    id="food-name"/>
            </div>

            <div>
                <label for="food-description">
                    Description
                </label>
                <input 
                    type="text"
                    id="food-description"/>
            </div>

            <button class="add" @click="TogglePopUp()">Add</button>
            
        </div>

    </div>
</template>

<script>
export default{
    props: ['TogglePopUp']
}
</script>

<style scoped>

</style>
