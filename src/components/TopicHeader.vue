<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "topic",
  },
  currentPage: {
    type: String,
    default: "",
  },
});

const navigation = [
  { label: "home", to: "/" },
  { label: "games", to: "/games" },
  { label: "music", to: "/music" },
  { label: "code", to: "/code" },
  { label: "timeline", to: "/timeline" },
];

function isCurrentPage(label) {
  return props.currentPage.toLowerCase() === label;
}
</script>

<template>
  <header class="w-full mb-20 bg-dark">
    <div
      class="flex flex-row grid-rows-1 w-full justify-start items-baseline border-b pb-2 border-bright border-opacity-50"
    >
      <div
        class="text-bright text-center md:text-start w-full text-6xl md:text-8xl py-2 md:w-[33%] header"
      >
        <h1 class="font-milker select-none">
          {{ title
          }}<strong class="font-normal specialtext text-accent">'</strong>
        </h1>
      </div>
    </div>

    <nav
      class="flex flex-row justify-end gap-8 md:gap-16 pt-2 col-start-2 w-full *:select-none"
    >
      <router-link
        v-for="item in navigation"
        :key="item.label"
        :to="item.to"
        class="button-hover"
        :class="{
          'pointer-events-none !text-accent': isCurrentPage(item.label),
        }"
      >
        {{ item.label }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.button-hover {
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  @apply hover:opacity-50 text-bright text-sm md:text-lg font-poppins;
}

.header {
  animation: header-enter 0.75s ease;
}

@keyframes header-enter {
  from {
    opacity: 0;
    transform: translateX(5px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
