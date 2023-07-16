<template>
    <div class="bg-gray-50 dark:bg-slate-900">

        <Banners></Banners>

        <div class="container h-screen">

            <BlockQuote content="Widgets"></BlockQuote>

            <!-- End Navigation Toggle -->
            <div class="grid grid-cols-4 gap-12 mt-12 mb-24">
                <Card title="小组件 widget" desc="主要 widget 页面" :to="{ to: '/widget', path: 'Widget' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <!-- grid end -->
            </div>

            <Pageination></Pageination>

            <Footer></Footer>
        </div>

    </div>
</template>

<script setup lang="ts">
import Card from '@/components/widget/Card/index.vue';
import BlockQuote from '@/components/BlockQuote/index.vue';
import Pageination from '@/components/Navigation/Pageination/index.vue';
</script>