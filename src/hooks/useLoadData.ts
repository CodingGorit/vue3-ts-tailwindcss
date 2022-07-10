import axios from 'axios';
import { onMounted, ref } from 'vue';

/**
 * use hooks load local json data
 * @param url
 */
function useLoadData (url: string) {
    const data = ref({});

    onMounted(() => {
        const jsonData = axios.get(url).then(res => {
            if (jsonData) {
                data.value = jsonData;
            }
        });
    })

    return data;
}

export default useLoadData;