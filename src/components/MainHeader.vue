<template>
  <div class="flex flex-col gap-2 drop-shadow-lg w-[70%] cursor-default select-none">
    <div class="flex flex-row -mb-2">
      <h1 class="text-8xl font-milker text-bright">OPIA</h1>
      <h1 class="text-8xl font-milker specialtext -ml-2 text-accent">'</h1>
    </div>
    <div class="flex flex-row items-baseline">
      <h2 class="text-4xl font-playfair font-thin text-bright">The Ambiguous Intensity of Eye Contact* &nbsp;  </h2>
      <a
        target="_blank"
        href="https://www.thedictionaryofobscuresorrows.com/concept/opia"
        class="text-4xl font-playfair italic hover:underline transition-all duration-100 ease-in-out hover:opacity-50 font-thin text-bright opacity-30"
      >
        The Dictionary of Obscure Sorrows.
      </a>
    </div>

    <p class="text-lg font-playfair drop-shadow-lg italic text-accent text-pretty">
      "n. the ambiguous intensity of looking someone in the eye, which can feel simultaneously invasive and vulnerable—their pupils glittering, bottomless and opaque—as if you were peering through a hole in the door of a house, able to tell that there’s someone standing there, but unable to tell if you’re looking in or looking out."
    </p>

    <p class="text-2xl font-poppins text-bright w-full text-justify">
      A&nbsp; w e b s i t e&nbsp; f o r&nbsp; guilhermevbagio's&nbsp; p r o j e c t s
    </p>

        <div class="flex flex-row justify-between text-lg mt-2 border-t pt-4 w-full font-poppins border-bright border-opacity-50 text-bright">
          <button class="button-hover">games ></button>
          <button class="button-hover">music ></button>
          <button class="button-hover">art ></button>
          <button class="button-hover">code ></button>
          <button class="button-hover">contact ></button>
        </div>
  </div>
</template>

<style scoped>
.specialtext
{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
}

.button-hover{
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  @apply hover:opacity-50
}
</style>