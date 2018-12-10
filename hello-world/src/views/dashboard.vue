<template>
    <div class="dashboard">
    <MainHeader />
    <!-- <MainDashboard /> -->
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