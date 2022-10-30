<template>
  <div class="flex sm:flex-nowrap flex-wrap mb-16 xl:mb-26 font-bold
              text-20 text-text-primary py-8 items-center sm:space-x-8 px-8 w-full bg-gray rounded-16">
    <svg-icon
        name="Info"
        color="#0F4471"
        class="mb-8 sm:mb-0"
    />
    <p>
      Телефон:
      <a class="cursor-pointer" href="tel:88008889028">
        8 (800) 888-90-28
      </a>,
      email:&nbsp;<a class="cursor-pointer" href="mailto:info@example.ru">info@example.ru</a>
    </p>
  </div>
</template>

<script>
import SvgIcon from "../components/SvgIcon";
export default {
  name: "FooterCurrency",
  components: {
    SvgIcon,
  }
}
</script>
