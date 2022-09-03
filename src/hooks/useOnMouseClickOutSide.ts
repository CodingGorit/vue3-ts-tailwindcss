import { ref, onMounted, onUnmounted, Ref } from 'vue';

/**
 * 点击事件是否超出了元素外部
 * @param elementRef 
 */
const useOnMouseClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false);

    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false;
            } else {
                isClickOutside.value = true;
            }
        }
    }

    onMounted(() => {
        document.addEventListener('click', handler);
    })

    onUnmounted(() => {
        document.removeEventListener('click', handler);
    })

    return isClickOutside;
}

export default useOnMouseClickOutSide;