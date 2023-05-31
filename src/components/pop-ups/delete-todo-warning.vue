<template>
    <div class="warning-pop-up">
        <div class="pop-up-inner">
            <slot/>
            <p>You are about to delete all saved data added to the To-Do list.</p>
            <p>Are you sure?</p>
            
            <div class="button-container">
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
    background-color: aliceblue;
    padding: 30px;
    text-align: center;
}

.pop-up-button{
    
    font-family: Century Gothic;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    background-color: #45e26c;
    padding: 7px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 30px;
    font-size: 18px;
    border:none;
    color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
}

</style>
