import { ref, onMounted, onUnmounted } from 'vue';

/**
 * @description 鼠标跟踪器
 * @returns 
 */
export const useMousePosition = () => {
    const x = ref(0);
    const y = ref(0);
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };

    onMounted(() => {
        document.addEventListener('click', updateMouse);
    })

    onUnmounted(() => {
        document.removeEventListener('click', updateMouse);
    })

    return {
        x,
        y
    }
}