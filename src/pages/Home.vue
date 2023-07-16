<template>
    <div class="bg-gray-50 dark:bg-slate-900">

        <Banners></Banners>

        <div class="container h-screen">

            <BlockQuote content="I love coding"></BlockQuote>

            <!-- End Navigation Toggle -->
            <div class="grid grid-cols-4 gap-12 mt-12 mb-24">
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <Card title="Card" desc="介绍" :to="{ to: '/aaa', path: 'Card link' }"></Card>
                <!-- grid end -->
            </div>

            <Pageination></Pageination>
        </div>

    </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SideMenu/index.vue';
import Banners from '@/components/Banners/index.vue';
import Card from '@/components/widget/Card/index.vue';
import BlockQuote from '@/components/BlockQuote/index.vue';
import Pageination from '@/components/Navigation/Pageination/index.vue';
</script>