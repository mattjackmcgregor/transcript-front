<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <div class="landing-buttons">
     <router-link to="/signup"><button class="signup">Sign Up</button></router-link>
     <router-link to="/login"><button class="login">Login</button></router-link>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

a {
  color: #42b983;
}
</style>
