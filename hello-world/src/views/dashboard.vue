<template>
    <div class="dashboard">
    <MainHeader />
    </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';

export default {
  name: 'dashboard',
  components: {
    MainHeader,
  },
};
</script>