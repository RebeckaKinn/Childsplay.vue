<template>
    <div class="pop-up-default">
        <div class="add-task-pop-up">
            <slot />

            <div>
                <input type="text"/>
                <input type="text"/>
            </div>

            <button>
                Add task
            </button>

        </div>
    </div>
</template>



<script>
export default {
    setup() {
        
    },
}
</script>



<style scoped>

</style>