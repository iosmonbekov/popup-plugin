<template>

  <h1>Popup Plugin</h1>

  <button @click="openPopup">
    Show Popup
  </button>

  <button @click="openPopup2">
    Show Popup2
  </button>

  <Popup
      :title="'First Popup'"
      :open="popup"
      @close="closePopup"
  />
  <Popup
      :title="'Second Popup'"
      :open="popup2"
      @close="closePopup2"
  />
</template>

<script setup>
import Popup from '@/components/Popup/Popup';
import {usePopup} from "@/components/Popup/usePopup";

const {state: popup, open: openPopup, close: closePopup} = usePopup();
const {state: popup2, open: openPopup2, close: closePopup2} = usePopup();
</script>

<style>
</style>
