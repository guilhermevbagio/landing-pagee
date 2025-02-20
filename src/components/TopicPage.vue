<script setup>
import { ref, onMounted } from 'vue';
import TopicCard from './TopicCard.vue';

const name = ref(``);
const text = ref(``);
const timelineContent = ref([]);
const isLoading = ref(true);
const NEUTRAL_PATH = '/src/assets/Timeline/';

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
    return `${monthName} ${yearFull}`;
}

function clear(){
    let message = timelineContent.value.defaultMessage;
    setText(message.name, message.description)
}
</script>

<template>
    <div class="h-screen w-screen flex flex-col">
        <header class="w-full bg-dark">
            <div class="flex flex-row grid-rows-1 w-full justify-start items-baseline border-b pb-4 border-bright border-opacity-50">
                <div class="text-bright text-8xl w-[33%] ml-8">
                    <h1 class="font-milker specialtext">
                        {{ title }}<strong class="font-normal text-accent">'</strong>
                    </h1>
                </div>
                <nav class="flex flex-row justify-end gap-16 px-8 col-start-2 w-full text-2xl">
                    <router-link to="/" class="button-hover">home ></router-link>
                    <router-link to="/music" class="button-hover">music ></router-link>
                    <router-link to="/art" class="button-hover">art ></router-link>
                    <router-link to="/code" class="button-hover">code ></router-link>
                    <router-link to="/contact" class="button-hover">contact ></router-link>
                </nav>
            </div>
        </header>

        <div class="flex flex-row items-start w-full flex-1 p-8 pt-6 pb-0 overflow-hidden">
            <div class="flex flex-col gap-2 w-[33%] h-full mt-2">
                <transition name="fade-slide" mode="out-in">
                    <h2 v-if="name" :key="name" class="text-2xl text-accent font-poppins">
                        {{ name }}
                    </h2>
                </transition>
                <transition name="fade-slide" mode="out-in">
                    <p v-if="text" :key="text" class="text-lg text-bright font-playfair typewriter">
                        {{ text }}
                    </p>
                </transition>
            </div>

            <div class="w-full pl-8 ml-8 relative h-full ">
                <div class="absolute h-full rounded border border-accent w-2 rounded-b-none border-b-0 -z-10 left-0 mt-2"></div>
                
                <div v-if="isLoading" class="text-center text-bright">Loading...</div>
                <div class="h-full overflow-y-auto overflow-x-visible pr-4 pt-2 pb-12">
                    <ul class="flex flex-col gap-8">
                        <li v-for="(card, index) in timelineContent.cards" :key="index">
                            <TopicCard 
                                :title="card.name" 
                                :big="card.big" 
                                @mouseover="setText(formatDate(card.time), card.description)" 
                                @mouseleave="clear()"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.button-hover {
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    @apply hover:opacity-50 text-bright text-lg;
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