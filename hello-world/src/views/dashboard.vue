<template>
    <div class="dashboardView">
        <div class="header">
            <MainHeader />
        </div>
        <div class="dashboard">
            <MainDashboard />
        </div>
        <div class="footer">
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import MainDashboard from '@/components/MainDashboard.vue';

export default {
  name: 'dashboard',
  components: {
    MainHeader,
    MainDashboard,
  },
};
</script>

<style scoped>

.header {
    display: block;
    width: 100vw;
    height: 25%vh;
}
</style>
