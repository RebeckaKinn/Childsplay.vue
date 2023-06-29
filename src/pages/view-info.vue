<script>
import { currentList, fetchData } from '../components/model-controller/Inner-menu.js';
import { watch, ref, onMounted } from 'vue';
import BackButton from '../components/Info/BackButton.vue';
import FooterMenu from '../components/menuItems/Footer-menu.vue';

import { getItems } from '../components/model-controller/View-info.js';
import EditMode from '../components/pop-ups/edit-mode.vue';
import { triggers ,TogglePopUp} from '../pop-ups.js'

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
            itemList,
            triggers,
            TogglePopUp,
            getItems
        }
    },

    components:{
        BackButton,
        FooterMenu,
        EditMode
    }
}

</script>

<template>
    <div class="container">
        <header>
            <BackButton />
            <div class="viewEdit-header"></div>
        </header>

    <div class="space-grid">
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
                    class="viewInfo-button"
                    @click="getItems(item.name, item.description, item.img, item.id), TogglePopUp('editMode')">
                    edit
                </button>

            </section>

            <span>
                <EditMode 
                    v-if="triggers.editMode"
                    :TogglePopUp="() => TogglePopUp('editMode')"/>
            </span>
        </main>
    </div>
    </div>
    <footer>
        <FooterMenu />
    </footer>
</template>