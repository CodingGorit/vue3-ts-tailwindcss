import { onMounted, onUnmounted } from 'vue';

/**
 * @usage
 * useNetworkStatus((status) => { 
 *    console.log(`Your network status is ${status}`);
 * }
 * @param callback 
 */
export const useNetworkStatus = (callback = (status: string) => { }) => {
    const updateOnlineStatus = () => {
        const status = navigator.onLine ? 'online' : 'offline';
        callback(status);
    }

    onMounted(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    });

    onUnmounted(() => {
        window.removeEventListener('online', updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
    })
}