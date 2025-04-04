<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isHovered = ref(false)

const isVisible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})


defineProps({
    title: {
        type: String,
        default: 'title'
    },
    big: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: ""
    },
    imagePath: {
        type: String,
        default: ""
    },
    time: {
        type: String,
        default: ""
    },
    linked: {
        type: Boolean,
        default: true
    },
    crowned: {
        type: Boolean,
        default: false
    },
    index: {
        type: Number,
        default: 0
    }
})

</script>

<template>
    <transition name="fade-slide">
        <div v-show="isVisible"
            class="h-48 md:h-64 min-h-full cursor-pointer hover:-translate-y-2 transition-all will-change-transform duration-150 ease-in-out"
            :class="crowned ? 'shine' : '' "
            :style="`animation-delay: ${index * 25}ms`"
            @mouseover="isHovered = true" @mouseleave="isHovered = false"
            >
            <!--Crown-->
            <div v-if="crowned" class="absolute scale-[22%] -top-16 -translate-x-1 -translate-y-1 -right-20 rotate-[12deg] z-50 drop-shadow-[0px_0px_38px_rgba(255,255,255,0.3)]">
                <img src="/images/crown.png" />
            </div>
            <div class="relative h-full w-full border rounded p-4 pb-1 border-accent transition-border overflow-clip"
                :class="{'border-bright': isHovered, 'shadow-[0px_0px_28px_0px_rgba(213,57,60,0.3)]' : crowned }"
            >
                <div v-if="big" class="h-[50%] w-full overflow-clip relative rounded-sm border mb-4 transition-border"
                    :class="isHovered ? 'border-bright' : 'border-accent'">
                    <img class="h-full w-full object-cover" :src="'/images/' + imagePath" />
                </div>
                <h1 class="flex flex-row gap-2 justify-between items-start text-start align-top text-md w-full font-milker" :class="[ 
                        isHovered ? 'text-bright' : (!big ? 'text-accent' : 'text-bright'),
                        big ? 'text-2xl leading-5 md:text-4xl md:leading-8 ' : 'md:text-lg md:leading-1',
                        crowned ? 'drop-shadow-[0px_0px_5px_rgba(255,255,255,0.2)]' : ''
                    ]">
                    {{ title }} 
                    <div v-if="linked">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24 " height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </div>
                </h1>
                <div v-if="time" :class=" isHovered ? 'text-bright' : 'text-accent'" class="text-sm font-light font-poppins pt-1"> {{ time }} </div>
                <div v-if="text" class="min-h-48 h-48 py-2 text-sm md:text-base font-playfair" :class=" isHovered ? 'text-bright' : 'text-accent' "> {{ text }} </div>
            </div>
            <div v-if="linked" class="w-full px-4 mt-2 pb-0">
                <div  class="line-appear border-b border-accent" :class="isHovered ? 'border-opacity-100 w-full' : 'border-opacity-0 w-0 '"></div>
            </div>
        </div>
    </transition>
</template>

<style scoped>

.transition-border {
    transition: border-color 0.3s ease-in-out;
}

.line-appear {
    transition: opacity 0.2s ease, width 0.5s ease;
}

.line-appear-enter-from {
    opacity: 0;
    width: 0;
}

.shine {
    @apply bg-[linear-gradient(45deg,transparent_35%,rgba(68,68,68,.4)_50%,transparent_75%,transparent_100%)] relative max-w-md bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease-in-out] hover:bg-[position:220%_0,0_0] hover:duration-[700ms]
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}



</style>

