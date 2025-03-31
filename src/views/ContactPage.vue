<template>
    <div class="h-screen w-screen flex flex-col">
        <header class="w-full bg-dark">
            <div class="flex flex-row grid-rows-1 w-full justify-start items-baseline border-b pb-4 border-bright border-opacity-50">
                <div class="text-bright text-8xl w-[33%] ml-4">
                    <h1 class="font-milker specialtext">
                        {{ 'contact' }}<strong class="font-normal pl-1 text-accent">'</strong>
                    </h1>
                </div>
                <nav class="flex flex-row justify-end gap-16 px-8 col-start-2 w-full text-2xl text-bright">
                    <router-link to="/" class="button-hover">home ></router-link>
                    <router-link 
                        to="/games" 
                        class="button-hover" 
                        >
                        games >
                    </router-link>
                    <router-link 
                        to="/music" 
                        class="button-hover" 
                    >
                        music >
                    </router-link>
                    <router-link 
                        to="/art" 
                        class="button-hover" 
                    >
                        art >
                    </router-link>
                    <router-link 
                        to="/code" 
                        class="button-hover disabled:underline disabled:opacity-50" 
                    >
                        code >
                    </router-link>
                    <button 
                        class="opacity-50 text-lg"
                    >
                        contact >
                    </button>

                </nav>
            </div>
        </header>

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