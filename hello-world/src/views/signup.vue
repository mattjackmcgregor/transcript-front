<template>
  <div class="sigup">
    <h1>sing up</h1>
   <form class="signup-form">
       <input class="signup-name" placeholder="name"><br>
       <input class="signup-email" placeholder="email"><br>
       <input class="signup-password" placeholder="password"><br>
       <input class="signup-confirm-password" placeholder="confirm password"><br>
       <input type=checkbox>I accept <a href=#>terms & conditions</a>
   </form>
   <router-link to="/login"><button class="signup">Sign Up</button></router-link>
  </div>
</template>
