<script setup lang="ts">
import { computed } from "vue";

interface TimelineItem {
  id: string;
  label: string;
  color: string;
  start: string; // YYYY-MM
  end: string; // YYYY-MM
  row: number;
}

const startYear = 2012;
const endYear = 2026;

const items: TimelineItem[] = [
  {
    id: "1",
    label: "STRATOCASTER",
    color: "#0019a8",
    start: "2013-01",
    end: "2026-06",
    row: 0,
  },
  {
    id: "2",
    label: "STRATOCASTER",
    color: "#333333",
    start: "2015-06",
    end: "2026-06",
    row: 1,
  },
  {
    id: "3",
    label: "LES PAUL",
    color: "#555555",
    start: "2018-01",
    end: "2020-06",
    row: 2,
  },
  {
    id: "4",
    label: "LES PAUL",
    color: "#e66a00",
    start: "2018-04",
    end: "2026-06",
    row: 3,
  },
  {
    id: "5",
    label: "LES PAUL",
    color: "#00aeb3",
    start: "2018-10",
    end: "2026-06",
    row: 4,
  },
  {
    id: "6",
    label: "LES PAUL",
    color: "#f6c100",
    start: "2019-01",
    end: "2026-06",
    row: 5,
  },
  {
    id: "7",
    label: "EXPLORER",
    color: "#444",
    start: "2021-02",
    end: "2025-03",
    row: 6,
  },
  {
    id: "8",
    label: "FLYING V",
    color: "#333",
    start: "2021-03",
    end: "2026-06",
    row: 7,
  },
  {
    id: "9",
    label: "LES PAUL",
    color: "#9fd3ca",
    start: "2021-08",
    end: "2026-06",
    row: 8,
  },
  {
    id: "10",
    label: "TELECASTER",
    color: "#ef7d00",
    start: "2023-11",
    end: "2026-06",
    row: 9,
  },
];

const years = computed(() =>
  Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i),
);

const totalMonths = computed(() => (endYear - startYear + 1) * 12);

function monthIndex(date: string) {
  const [year, month] = date.split("-").map(Number);

  return (year - startYear) * 12 + (month - 1);
}

function itemStyle(item: TimelineItem) {
  const start = monthIndex(item.start);
  const end = monthIndex(item.end);

  return {
    gridColumn: `${start + 1} / ${end + 1}`,
    gridRow: `${item.row + 1}`,
  };
}

const rowCount = computed(() => Math.max(...items.map((i) => i.row)) + 1);
</script>

<template>
  <div class="w-full overflow-x-auto">
    <div class="relative min-w-[1400px]">
      <!-- YEAR HEADER -->

      <div
        class="grid border-b border-accent font-poppins"
        :style="{
          gridTemplateColumns: `repeat(${years.length}, minmax(0, 1fr))`,
        }"
      >
        <div
          v-for="year in years"
          :key="year"
          class="py-1 text-center italic text-accent"
        >
          {{ year }}
        </div>
      </div>

      <!-- TIMELINE BODY -->

      <div
        class="relative"
        :style="{
          height: `${rowCount * 38 + 20}px`,
        }"
      >
        <!-- Year separators -->

        <div
          class="absolute inset-0 grid"
          :style="{
            gridTemplateColumns: `repeat(${totalMonths}, minmax(0, 1fr))`,
          }"
        >
          <template v-for="year in years" :key="year">
            <div
              class=""
              :style="{
                gridColumn: (year - startYear) * 12 + 1,
                gridRow: `1 / span ${rowCount + 20}`,
              }"
            />
          </template>
        </div>

        <!-- Bars -->

        <div
          class="absolute inset-0 grid p-2"
          :style="{
            gridTemplateColumns: `repeat(${totalMonths}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rowCount}, 34px)`,
          }"
        >
          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="timeline-bar flex h-7 transition rounded-sm duration-200 bg-accent/50 hover:bg-accent items-center overflow-hidden whitespace-nowrap px-2 font-mono text-xs font-bold uppercase text-white shadow-sm"
            :style="{
              ...itemStyle(item),
              animationDelay: `${index * 250}ms`,
            }"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-bar {
  animation: wave 6s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
  }
}
</style>
