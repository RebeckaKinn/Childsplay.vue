<script setup>
import TestImg from '../img/mustache_cat.jpg'
import './Chooser.css';
</script>

<template>
    <div class="container">
        <header>
            <div class="default-header chooser-title">Dinner of the day is...</div>
        </header>

        <main class="chooser-main">
            <p class="chooser-title">Me.</p>
            <p class="chooser-description">I am the dinner.</p>
            <div>
                <img :src="TestImg" alt="testImage" class="menu-image">
            </div>
        
        </main>
    </div>

    <footer>
            <div class="chooser-button-links">
                <router-link to="/dinnerchooser" class="button first-button">Give me another</router-link>
                <router-link to="/" class="button second-button">OK!</router-link>
            </div>
    </footer>
</template>
/* later plans: use one chooser page for both usages, only change data shown */
