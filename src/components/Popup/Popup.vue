<template>
  <div class="popup-wrapper" v-show="open">
    <div class="popup-back" @click="closePopup"></div>
    <div class="popup">
      <!--THERE YOU CAN PASTE ANY HTML YOU WANT. START-->
      <h1>{{ title }}</h1>
      <p>Click on black area out of popup to exit.</p>
      <!--THERE YOU CAN PASTE ANY HTML YOU WANT. END-->
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps(['open', 'title']);
const emit = defineEmits(['close']);

function closePopup() {
  emit('close');
}
</script>

<style scoped>
.popup-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.popup-back {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  backdrop-filter: blur(4px);
  background: rgba(24, 10, 31, 0.7);
  z-index: 1;
}

.popup {
  width: fit-content;
  background: white;
  padding: 1rem;
  box-shadow: 0 .4rem 2.6rem rgba(0, 0, 0, 0.12);
  border-radius: 1.6rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

@media (max-width: 720px) {
  .popup {
    width: calc(100% - 3.2rem);
    height: max-content;
    border-radius: 1.6rem;
  }
}
</style>

