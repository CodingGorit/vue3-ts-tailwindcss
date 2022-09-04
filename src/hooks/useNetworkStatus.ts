import { onMounted, onUnmounted, ref } from 'vue';

/**
 * @usage
 * import { onMounted, reactive } from 'vue';
 * const network = reactive(useNetworkStatus());
 * console.log("network ", network.isOnline);  
 * @description check network avaliable
 */
export const useNetworkStatus = () => {
    let isOnline = ref(false);
    let isOffline = ref(false);
    const updateOnlineStatus = () => {
        isOnline.value = navigator.onLine;
        isOffline.value = !isOnline.value;
    }

    onMounted(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    });

    onUnmounted(() => {
        window.removeEventListener('online', updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
    });

    updateOnlineStatus();

    return {
        isOnline,
        isOffline
    }
}