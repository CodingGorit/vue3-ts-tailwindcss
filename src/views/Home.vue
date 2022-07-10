<template>
    <div>
        <table class="table-fixed">
            <thead>
                <tr>
                    <th class="w-1/4">事件</th>
                    <th class="w-1/4">date</th>
                    <th class="w-1/4">cost</th>
                    <th class="w-1/4">type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) of page.list" :key="item.lifeEventId" :class="(index + 1) % 2 === 0 ? 'bg-blue-200': 'bg-red-200'">
                    <td>{{item.lifeEventName}}</td>
                    <td>{{item.lifeEventDate}}</td>
                    <td>{{item.lifeEventCost}}</td>
                    <td>
                        <span v-if="item.lifeEventType === 1">家庭</span>
                        <span v-else-if="item.lifeEventType === 2">朋友</span>
                        <span v-else-if="item.lifeEventType === 3">同学</span>
                        <span v-else-if="item.lifeEventType === 4">高中同学</span>
                        <span v-else-if="item.lifeEventType === 5">工作</span>
                        <span v-else-if="item.lifeEventType === 6">个人</span>
                        <span v-else="item.lifeEventType">其他</span>
                    </td>
                </tr>
                <tr>
                    <td>Intro to CSS</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                <tr class="bg-blue-200">
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                    <td>112</td>
                </tr>
                <tr>
                    <td>Intro to JavaScript</td>
                    <td>Chris</td>
                    <td>1,280</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import request from '../utils/http-utils';
// import axios from 'axios';

// const data = ref({});
const page = ref({
    currentPage: 1, // 当前页
    pageSize: 5, // 每页显示条数
    totalPage: 0, // 总页数
    totalCount: 0, // 总条数
    params: {
        lifeEventType: 4,
    }, // 查询参数对象
    list: [], // 数据
    sortColumn: "isTop", // 排序列
    sortMethod: "desc", // 排序方式
});

onMounted(() => {
    // this.initList();
    console.log("load");
    initList();
});

const initList = async () => {
    // loading.value = true;
    const { data: res } = await request({
        url: "/life/event/page/list",
        method: "post",
        data: page.value
    });

    // console.log(res.data);
    // if (res.code !== 20005) return message.error("数据初始化出错");
    page.value = res.data;
    // page.value.index = undefined;
    console.log(page.value);
};

</script>

<style>
</style>