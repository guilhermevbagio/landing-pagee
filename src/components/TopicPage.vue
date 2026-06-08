<script setup>
import { ref, onMounted } from "vue";
import TopicCard from "./TopicCard.vue";
import TopicHeader from "./TopicHeader.vue";

const name = ref(``);
const text = ref(``);
const timelineContent = ref([]);
const isLoading = ref(true);
const NEUTRAL_PATH = `${import.meta.env.BASE_URL}Timeline/`;

const props = defineProps({
  title: {
    type: String,
    default: "title",
  },
  big: {
    type: Boolean,
    default: false,
  },
});

onMounted(async () => {
  await retrieveTimelineContent();
  clear();
});

function setText(namePassed, textPassed) {
  name.value = namePassed;
  text.value = textPassed;
}

async function retrieveTimelineContent() {
  let path = NEUTRAL_PATH + props.title + ".json";

  let response = await fetch(path);
  const text = await response.text();
  const cleanedText = text.trim();
  timelineContent.value = JSON.parse(cleanedText);
  isLoading.value = false;
}

function formatDate(dateStr) {
  const [day, month, year] = dateStr.split("/");
  const fullYear = `${year}`;
  const date = new Date(fullYear, month - 1, day);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[date.getMonth()];
  const yearFull = date.getFullYear();
  if (!monthName || !yearFull) return dateStr;
  return `${monthName} ${yearFull}`;
}

function clear() {
  let message = timelineContent.value.defaultMessage;
  setText(message.name, message.description);
}
</script>

<template>
  <!--TODO: CROSSPOLINATION PAGE - all my stuff together with a pretty crosspolination quote-->
  <div
    class="h-screen w-screen px-10 md:px-20 overflow-x-clip overflow-y-auto flex flex-col"
  >
    <TopicHeader :title="title" :current-page="title" />

    <ul class="grid md:grid-cols-4 2xl:grid-cols-5 gap-8 pb-10">
      <li
        v-for="(card, index) in timelineContent.cards"
        class="*:h-48 md:*:h-64 *:min-h-full"
        :key="index"
      >
        <a v-if="card.link" :href="card.link" target="_blank">
          <TopicCard
            :index="index"
            :title="card.name"
            :time="card.time"
            :linked="true"
            :text="card.description"
            :image-path="card.imagePath"
            :big="card.big"
            :crowned="card.crowned"
            @mouseover="setText(formatDate(card.time), card.description)"
            @mouseleave="clear()"
          />
        </a>
        <div v-else>
          <TopicCard
            :index="index"
            :title="card.name"
            :time="card.time"
            :linked="false"
            :text="card.description"
            :image-path="card.imagePath"
            :big="card.big"
            :crowned="card.crowned"
            @mouseover="setText(formatDate(card.time), card.description)"
            @mouseleave="clear()"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
