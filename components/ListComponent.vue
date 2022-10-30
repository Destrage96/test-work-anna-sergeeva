<template>
  <div class="w-full border-border shadow-3xl bg-secondary border rounded-lg lg:p-8 px-3 pt-6 pb-5">
    <h2 class="text-text-primary text-13 lg:text-15 uppercase lg:mb-12 mb-6 font-medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:
    </h2>
    <div class="sm:flex space-x-2">
      <div class="w-full lg:w-1/2 sm:w-4/6">
        <ul class="text-text-main xl:text-18 lg:text-15 sm:text-13 text-14 space-y-6 sm:mb-0 mb-6">
          <li class="flex leading-5 items-center">
            incididunt ut labore et dolore magna aliqua
          </li>
          <li class="flex leading-5 items-center">
            incididunt ut labore et
          </li>
          <li class="flex leading-5 items-center">
            incididunt ut labore et dolore
          </li>
          <li class="flex leading-5 items-center">
            labore et dolore
          </li>
          <li class="flex leading-5 items-center">
            incididunt ut
          </li>
          <li class="flex leading-5 items-center">
            incididunt ut labore et dolore
          </li>
          <li class="flex leading-5 items-center">
            incididunt ut labore
          </li>
        </ul>
      </div>
      <div
          class="w-full lg:w-1/2 sm:w-2/6 grid gap-3 lg:grid-cols-2
           lg:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 grid-rows-1 grid-cols-4"
      >
        <div class="lg:rounded-tr-none rounded-tr-15 lg:rounded-bl-none rounded-bl-15 overflow-hidden">
          <img class="w-full h-full lg:object-cover" src="../assets/images/img-1.jpg" alt="">
        </div>
        <div class="lg:rounded-tr-50 lg:rounded-tl-none rounded-tl-15 lg:rounded-br-none rounded-br-15 overflow-hidden">
          <img class="w-full h-full lg:object-cover" src="../assets/images/img-2.jpg" alt="">
        </div>
        <div class="lg:rounded-tr-none rounded-tr-15 lg:rounded-bl-50 rounded-bl-15 overflow-hidden">
          <img class="w-full h-full lg:object-cover" src="../assets/images/img-3.jpg" alt="">
        </div>
        <div class="overflow-hidden lg:rounded-tl-none lg:rounded-br-none rounded-tl-15 rounded-br-15">
          <img class="w-full h-full lg:object-cover"
               src="../assets/images/img-4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent"
}
</script>
