<template>
    <TransitionGroup 
        name="shuffle" 
        tag="div" 
        class="grid grid-cols-3 grid-rows-3 gap-3 relative"
    >
        <Card 
            v-for="(card, index) in board" 
            :key="card || `empty-${index}`"
            :class="getClass(index)"
            class="transition-all duration-300 ease-in-out"
        >
            <template v-if="card">{{ card }}</template>
        </Card>
    </TransitionGroup>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Card from './Card.vue';

const board = ref([]);

// Initial shuffle
function initialShuffle() {
    board.value = shuffle([1, 2, 3, 4, 5, 6, null, null, null]);
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
    
    // Check up
    if (row > 0) adjacent.push(index - 3);
    // Check down
    if (row < 2) adjacent.push(index + 3);
    // Check left
    if (col > 0) adjacent.push(index - 1);
    // Check right
    if (col < 2) adjacent.push(index + 1);
    
    return adjacent;
}

function moveOneCard() {
    // Find indices of non-null and null cells
    const filledIndices = board.value.map((cell, index) => cell ? index : -1).filter(i => i !== -1);
    const emptyIndices = board.value.map((cell, index) => cell === null ? index : -1).filter(i => i !== -1);
    
    // Randomly select a filled cell
    const randomFilledIndex = filledIndices[Math.floor(Math.random() * filledIndices.length)];
    
    // Get adjacent cells
    const adjacentCells = getAdjacentCells(randomFilledIndex);
    
    // Filter for adjacent empty cells
    const validMoves = adjacentCells.filter(index => board.value[index] === null);
    
    if (validMoves.length > 0) {
        // Choose random valid move
        const targetIndex = validMoves[Math.floor(Math.random() * validMoves.length)];
        
        // Create new array and swap values
        const newBoard = [...board.value];
        [newBoard[randomFilledIndex], newBoard[targetIndex]] = 
        [newBoard[targetIndex], newBoard[randomFilledIndex]];
        
        board.value = newBoard;
    }
}

onMounted(() => {
    // Initial full shuffle
    initialShuffle();
    
    // Start moving one card at a time
    const intervalId = setInterval(() => {
        moveOneCard();
    }, 1000);
    
    onBeforeUnmount(() => {
        clearInterval(intervalId);
    });
});
</script>

<style scoped>
.shuffle-move {
    transition: transform 0.3s ease-in-out;
}

.shuffle-enter-active,
.shuffle-leave-active {
    transition: all 0.3s ease-in-out;
}

.shuffle-enter-from,
.shuffle-leave-to {
    opacity: 0;
    transform: scale(0.3);
}

.shuffle-leave-active {
    position: absolute;
}
</style>