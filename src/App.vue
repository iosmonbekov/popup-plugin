<template>

  <h1>Popup Plugin</h1>

  <button @click="openPopup">
    Show Popup
  </button>


  <Popup
      :open="popup"
      @close="closePopup"
  />
</template>

<script setup>
import Popup from '@/components/Popup';
import {ref} from 'vue';

const popup = ref(false);

function openPopup() {
  popup.value = true;
}

function closePopup() {
  console.log('CLOSE');
  popup.value = false;
}
</script>

<style>
</style>
