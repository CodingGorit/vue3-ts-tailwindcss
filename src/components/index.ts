/**
 * Created Date: Sunday, July 16th 2023, 2:06:30 pm
 * Author: CodingGorit
 * -----
 * Last Modified: Sun Jul 16 2023
 * Modified By: CodingGorit
 * -----
 * Copyright © 2019 —— 2023 fmin-courses TP Center All Rights Reserved
 * ------------------------------------
 * Javascript will save your soul!
 */

import { App } from "vue";
import Banners from './Banners/index.vue';
import Footer from './Footer.vue';


export default {
    install(app: App) {
        app.component("Banners", Banners)
           .component("Footer", Footer)
    }
}