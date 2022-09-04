/**
 * @Copyright 2022
 */
// 将一些相关配置配置成常量后在引入使用
// 将配置和调用解耦，如果需要修改，直接修改常量的值即可
export const TIME_OUT = 6000;
export const USE_MOCK = false;

export const BASE_URL = USE_MOCK ? 'http://localhost:9999' : 'https://httpbin.org/';


