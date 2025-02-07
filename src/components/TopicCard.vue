<script setup lang="ts">
import AsciiCanvas from './AsciiCanvas.vue';

defineProps({
    title: {
        type: String,
        default: 'title'
    },
    big: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="w-full h-fit border  border-bright rounded p-4">
        <div v-if="big" class="h-32 w-full overflow-clip relative rounded-sm border border-bright mb-4">
            <AsciiCanvas class="w-full h-full absolute"></AsciiCanvas>
        </div>
        <h1 class=" text-accent font-milker" :class="big ? 'text-accent font-milker text-4xl' : ' text-bright font-poppins text-lg'">
            {{ title }}
        </h1>
    </div>
</template>