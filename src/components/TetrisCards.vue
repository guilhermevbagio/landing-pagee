<template>
    <TransitionGroup 
        name="shuffle" 
        tag="div" 
        class="grid grid-cols-3 grid-rows-3 gap-3 relative"
    >
        <div  v-for="(card, index) in board" :key="card || `empty-${index}`">
            <Card 
                v-if="card"
                :class="getClass(index)"
                class="transition-all duration-300 ease-in-out font-raleway"
            >
            </Card>
        </div>
    </TransitionGroup>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Card from './CardTetris.vue';

const board = ref([]);

function initialShuffle() {
    board.value = shuffle([1, 2, 3, 4, null, null, null, null, null]);
}

function shuffle(array) {
    const newArray = [...array];
    let currentIndex = newArray.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}

function getRowAndCol(index) {
    return {
        row: Math.floor(index / 3),
        col: index % 3
    };
}

function getClass(index) {
    const { row, col } = getRowAndCol(index);
    return `col-start-${col + 1} row-start-${row + 1}`;
}

function getAdjacentCells(index) {
    const { row, col } = getRowAndCol(index);
    const adjacent = [];
    
    if (row > 0) adjacent.push(index - 3);
    if (row < 2) adjacent.push(index + 3);
    if (col > 0) adjacent.push(index - 1);
    if (col < 2) adjacent.push(index + 1);
    
    return adjacent;
}

function moveOneCard() {
    const filledIndices = board.value.map((cell, index) => cell ? index : -1).filter(i => i !== -1);
    const emptyIndices = board.value.map((cell, index) => cell === null ? index : -1).filter(i => i !== -1);
    
    const randomFilledIndex = filledIndices[Math.floor(Math.random() * filledIndices.length)];
    
    const adjacentCells = getAdjacentCells(randomFilledIndex);
    
    const validMoves = adjacentCells.filter(index => board.value[index] === null);
    
    if (validMoves.length > 0) {
        const targetIndex = validMoves[Math.floor(Math.random() * validMoves.length)];
        
        const newBoard = [...board.value];
        [newBoard[randomFilledIndex], newBoard[targetIndex]] = 
        [newBoard[targetIndex], newBoard[randomFilledIndex]];
        
        board.value = newBoard;
    }
}

onMounted(() => {
    initialShuffle();
    
    const intervalId = setInterval(() => {
        moveOneCard();
    }, 500);
    
    onBeforeUnmount(() => {
        clearInterval(intervalId);
    });
});
</script>

<style scoped>
.shuffle-move {
    transition: transform 0.2s ease-in-out;
}

.shuffle-enter-active,
.shuffle-leave-active {
    transition: all 0.2s ease-in-out;
}

.shuffle-enter-from,
.shuffle-leave-to {
    opacity: 0;
}

.shuffle-leave-active {
    position: absolute;
}
</style>