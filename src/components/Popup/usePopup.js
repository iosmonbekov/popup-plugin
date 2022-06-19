import { ref } from 'vue'

export function usePopup() {
    const state = ref(false);

    function open() {
        state.value = true;
    }
    function close() {
        state.value = false;
    }
    return { state, open, close }
}
