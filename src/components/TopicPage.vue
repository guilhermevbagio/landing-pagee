<script setup>
import { ref, onMounted } from 'vue';
import TopicCard from './TopicCard.vue';

const name = ref(``);
const text = ref(``);
const timelineContent = ref([]); // holds the timeline content
const isLoading = ref(true); // loading state
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
    typewriter(0, textPassed)
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
  text.value = ''
  setText(message.name, message.description)
}

let isTyping = false;
let timeoutID;

function typewriter(length, fullText) {
  if (isTyping) {
    clearTimeout(timeoutID);
  }

  isTyping = true;

  function typingStep() {
    if (length === fullText.length) {
      isTyping = false;
      return;
    }

    text.value = fullText.slice(0, length + 1);

    let timeoutLength = fullText[length] === '.' ? 200 : 2;  

    timeoutID = setTimeout(() => {
      typewriter(length + 1, fullText);
    }, timeoutLength);
  }

  typingStep();
}



</script>

<template>
    <div class="h-screen w-screen">
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
        <div class="flex flex-row items-start justify-center w-full h-full p-8">
            <div class="flex flex-col gap-2 w-[33%]">
                <h2 class="text-2xl text-accent font-poppins">{{ name }}</h2>
                <p class="text-lg text-bright font-playfair typewriter">{{ text }}</p>
            </div>
            <div class="w-full pl-8 ml-8 relative">
                <div class="absolute h-screen rounded border border-accent w-2 rounded-b-none border-b-0 -z-10 left-0"></div>
                
                <div v-if="isLoading" class="text-center text-bright">Loading...</div>
                <ul v-else class="flex flex-col gap-8">
                    <li v-for="(card, index) in timelineContent.cards" :key="index">
                        <TopicCard :title="card.name" :big="card.big" @mouseover="setText(formatDate(card.time), card.description)" @mouseleave="clear()"></TopicCard>
                    </li>
                </ul>
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

.ascii-gradient {
    -webkit-mask-image: linear-gradient(to right, 
        rgba(0, 0, 0, 1) 50%, 
        rgba(0, 0, 0, 1) 60%, 
        rgba(0, 0, 0, 0) 100%
    );
    mask-image: linear-gradient(to right, 
        rgba(0, 0, 0, 1) 50%, 
        rgba(0, 0, 0, 1) 60%, 
        rgba(0, 0, 0, 0) 100%
    );
}

</style>
