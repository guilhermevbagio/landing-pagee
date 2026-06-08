<script setup lang="ts">
import AsciiCanvas from "@/components/AsciiCanvas.vue";
import TimelineChart from "@/components/TimelineChart.vue";
import TopicHeader from "@/components/TopicHeader.vue";
</script>

<template>
  <div class="h-screen w-screen pt-2">
    <TopicHeader title="timeline" current-page="timeline" />

    <main class="flex justify-center items-center h-full w-full">
      <TimelineChart />
      <AsciiCanvas
        class="-z-10 absolute top-0 left-0 opacity-30 h-full w-full overflow-clip background"
      ></AsciiCanvas>
    </main>
  </div>
</template>

<style lang="css" scoped></style>
