<script>
import { currentList, fetchData } from '../components/model-controller/Inner-menu.js';
import { watch, ref, onMounted } from 'vue';
import BackButton from '../components/Info/BackButton.vue';
import FooterMenu from '../components/menuItems/Footer-menu.vue';

export default {
    setup() {

        onMounted(async () => {
        await fetchData(); 
    });

        const itemList = ref(currentList);

       watch(currentList, () => {
        console.log(currentList);
    });
        
        return{
            itemList
        }
    },

    components:{
        BackButton,
        FooterMenu
    }
}
//create a pop-up for edit
</script>

<template>
    <div class="container">
        <header>
            <BackButton />
            <div class="viewEdit-header"></div>
        </header>

        <main class="todo-main">
            <section
                class="list-item-grid"
                v-for="item in itemList"
                :key="item.id">

                    <div class="viewInfo-name">
                        {{ item.name}}
                    </div>

                    <div class="viewInfo-description">
                        {{ item.description }}
                    </div>

                    <div class="viewInfo-img">
                        <img 
                            :src="item.img" 
                            alt="editMode" 
                            class="viewInfo-image">
                    </div>

                <button
                    class="viewInfo-button">
                    Edit
                </button>

            </section>

            <span></span>
        </main>
    </div>
    <footer>
        <FooterMenu />
    </footer>
</template>