<template>
        <header class="w-full bg-dark">
            <div class="flex flex-row grid-rows-1 w-full justify-start items-baseline border-b pb-4 border-bright border-opacity-50">
                <div class="text-bright text-8xl w-[33%] ml-8">
                    <h1 class="font-milker specialtext flex flex-row gap-2">
                        Contact <strong class="font-normal text-accent">'</strong>
                    </h1>
                </div>
                <nav class="flex flex-row justify-end gap-16 px-8 col-start-2 w-full text-2xl text-bright">
                    <router-link to="/" class="button-hover">home ></router-link>
                    <router-link  to="/music" class="button-hover">music ></router-link>
                    <router-link to="/games" class="button-hover">games ></router-link>

                    <router-link to="/art" class="button-hover">art ></router-link>
                    <router-link to="/code" class="button-hover">code ></router-link>
                </nav>
            </div>
        </header>
</template>