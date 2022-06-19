<template>

  <h1>Popup Plugin</h1>

  <button @click="open">
    Show Popup
  </button>

  <Popup
      :open="state"
      @close="close"
  />
</template>

<script setup>
import Popup from '@/components/Popup/Popup';
import {usePopup} from "@/components/Popup/usePopup";

const {state, open, close} = usePopup();
</script>

<style>
</style>
