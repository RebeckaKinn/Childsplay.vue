<template>
    <div class="default-pop-up">
        <div class="default-pop-up-inner">
            <slot/>
            <p>You are about to delete all saved data added to the To-Do list.</p>
            <p>Are you sure?</p>
            
            <div class="button-container">
            <button 
                class="add"
                @click="TogglePopUp()">
                    Yes
            </button>

            <button 
                class="add"
                @click="TogglePopUp()">
                    No
            </button>
            </div>

        </div>
    </div>
</template>

<script>
export default{
    props: ['TogglePopUp']
}

</script>

<style scoped>



.button-container {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}

</style>
