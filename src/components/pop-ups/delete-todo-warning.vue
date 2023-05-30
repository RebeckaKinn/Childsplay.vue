<template>
    <div class="warning-pop-up">
        <div class="pop-up-inner">
            <slot/>
            <p>You are about to delete all saved data added to the To-Do list.</p>
            <p>Are you sure?</p>
            
            <button 
                class="pop-up-button"
                @click="TogglePopUp()">
                    Yes
            </button>

            <button 
                class="pop-up-button"
                @click="TogglePopUp()">
                    No
            </button>

        </div>
    </div>
</template>

<script>
export default{
    props: ['TogglePopUp']
}

</script>

<style scoped>
.warning-pop-up{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0,0,0,0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}

.warning-pop-up .pop-up-inner{

  padding: 30px;
}

</style>
