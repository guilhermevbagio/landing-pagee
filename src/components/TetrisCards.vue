<template>
    <div class="grid grid-cols-3 grid-rows-3 transition-all duration-150 ease-in-out gap-3">

            <Card v-for="(card, index) in shuffledCards" :class="getClass(index)" :key="index">
                <template v-if="card">{{ card }}</template>
            </Card>
        
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Card from './Card.vue';

let shuffledCards = ref(shuffle([1, 2, 3, 4, 5, 6, null, null, null]));

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function getRowAndCol(index) {
    let colindex = index % 3;
    return {
        row: Math.ceil(index / 3),
        col: colindex === 0 ? 3 : colindex
    };
}

function getClass(index) {
    const { row, col } = getRowAndCol(index);
    return `col-start-${col} row-start-${row}`;
}

onMounted(() => {
    const intervalId = setInterval(() => {
        shuffledCards.value = shuffle([1, 2, 3, 4, 5, 6, null, null, null]);
    }, 500);

    onBeforeUnmount(() => {
        clearInterval(intervalId);
    });
});
</script>

