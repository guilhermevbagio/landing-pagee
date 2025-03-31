<template>
     <a 
        class="cursor-pointer relative flex flex-row gap-4 items-center transition-all duration-150 ease-in-out hover:text-accent hover:-translate-y-1" @mouseenter="shown = true" @mouseleave="shown = false"
        :href="link"
        target="_blank"
      >
        <slot>
            
        </slot>
        <transition name="btn">
            <p v-if="shown" class="absolute left-8 w-10">
                {{ name }}
            </p>
        </transition>

    </a>
</template>

<script setup>

import { ref } from 'vue';

const shown = ref(false);

defineProps({
    name: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    }
})

</script>

<style scoped>
.btn-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.btn-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.btn-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.btn-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.btn-enter-active {
  transition: all 0.1s ease-in-out;
}

.btn-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>