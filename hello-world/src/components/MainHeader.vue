<template>
  <nav>
          <ul class="list-left">
            <li><button class="mainHeader-uploads">Upload</button></li>
            <li><button class="mainHeader-shortcuts">shortcuts</button></li>
            <li><img alt="flag" src="../assets/flag (1).png"></li>
            <li><img alt="razor" src="../assets/razor.png"></li>
            <li><img alt="Cursor" src="../assets/cursor (1).png"></li>
            <li><img alt="natural language processing" src="../assets/nlp.png"></li>
          </ul>
      
      
          <ul class="list-right">
          <li><p>filename</p></li>
          <li><button class="mainHeader-export">Export</button></li>
          <li><img alt="user" src="../assets/man-user.svg"></li>
          </ul>
      
  </nav>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

nav {
  border-bottom: solid black 1px;
  height: 100px;
  position: relative;
}
img {
    height: 30px;
    width: 30px;
}
ul {
    list-style: none;
}
.list-left {
    position: absolute;
    width: auto;  
    left: 1%;  
}
.list-right {
    position: relative;
    width: fit-content;
    float: right;

}
li {
    display: inline-block;
    padding: 10px;
    
}


</style>
