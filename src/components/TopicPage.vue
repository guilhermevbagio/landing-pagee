<script setup>
import { ref, onMounted } from 'vue';
import TopicCard from './TopicCard.vue';

const name = ref(``);
const text = ref(``);
const timelineContent = ref([]);
const isLoading = ref(true);
const NEUTRAL_PATH = '/Timeline/';


const props = defineProps({
    title: {
        type: String,
        default: 'title'
    },
    big: {
        type: Boolean,
        default: false
    }
});

onMounted( async () =>  {
    await retrieveTimelineContent();
    clear();
});

function setText(namePassed, textPassed) {
    name.value = namePassed;
    text.value = textPassed;
}

async function retrieveTimelineContent() {
    let path = NEUTRAL_PATH + props.title + '.json';

    let response = await fetch(path);
    const text = await response.text();
    const cleanedText = text.trim();
    timelineContent.value = JSON.parse(cleanedText);
    isLoading.value = false; 
}

function formatDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    const fullYear = `${year}`;
    const date = new Date(fullYear, month - 1, day);
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = months[date.getMonth()];
    const yearFull = date.getFullYear();
    if(!monthName || !yearFull) return dateStr;
    return `${monthName} ${yearFull}`;
}

function clear(){
    let message = timelineContent.value.defaultMessage;
    setText(message.name, message.description)
}
</script>

<template>
    <div class="h-screen w-screen px-10 md:px-20 flex flex-col">
        <header class="w-full mb-20 bg-dark">
            <div class="flex flex-row grid-rows-1 w-full justify-start items-baseline border-b pb-2 border-bright border-opacity-50">
                <div class="text-bright text-center md:text-start w-full text-6xl md:text-8xl py-2 md:w-[33%]">
                    <h1 class="font-milker select-none">
                        {{ title }}<strong class="font-normal specialtext text-accent">'</strong>
                    </h1>
                </div>
            </div>
            <nav class="flex flex-row justify-end gap-8 md:gap-16 pt-2 col-start-2 w-full">
                <router-link to="/" class="button-hover">home</router-link>
                <router-link 
                    :to="title === 'games' ? '' : '/games'" 
                    class="button-hover" 
                    :class="{ 'pointer-events-none !text-accent': title === 'games' }"
                    >
                    games
                </router-link>
                <router-link 
                    :to="title === 'music' ? '' : '/music'" 
                    class="button-hover" 
                    :class="{ 'pointer-events-none !text-accent': title === 'music' }"
                >
                    music
                </router-link>
                <router-link 
                    :to="title === 'art' ? '' : '/art'" 
                    class="button-hover" 
                    :class="{ 'pointer-events-none !text-accent': title === 'art' }"
                >
                    art
                </router-link>
                <router-link 
                    :to="title === 'code' ? '' : '/code'" 
                    class="button-hover" 
                    :class="{ 'pointer-events-none !text-accent': title === 'code' }"
                >
                    code
                </router-link>
            </nav>
        </header>

        <ul class="grid md:grid-cols-4 gap-8 pb-10">
            <li v-for="(card, index) in timelineContent.cards" class="*:h-48 md:*:h-64 *:min-h-full" :key="index">
                <a v-if="card.link" :href="card.link" target="_blank">
                    <TopicCard 
                    :title="card.name" 
                    :time="card.time"
                    :linked="true"
                    :text="card.description"
                    :big="card.big" 
                    @mouseover="setText(formatDate(card.time), card.description)" 
                    @mouseleave="clear()"
                    />
                </a>
                <div v-else>
                    <TopicCard 
                    :title="card.name" 
                    :time="card.time"
                    :linked="false"
                    :text="card.description"
                    :big="card.big" 
                    @mouseover="setText(formatDate(card.time), card.description)" 
                    @mouseleave="clear()"
                    />
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.button-hover {
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    @apply hover:opacity-50 text-bright text-sm md:text-lg font-poppins;
}

.fade-slide-enter-active, .fade-slide-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-slide-enter-from, .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(5px);
}

div::-webkit-scrollbar {
    display: none;
}

div {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}

</style>