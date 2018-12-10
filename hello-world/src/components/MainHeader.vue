<template>
  <div class="mainHeader">
      <div class="mainHeader-left">
      <button class="mainHeader-uploads">Upload</button>
      <button class="mainHeader-shortcuts">shortcuts</button>
      <img alt="flag" src="../assets/flag (1).png">
      <img alt="razor" src="../assets/razor.png">
      <img alt="Cursor" src="../assets/cursor (1).png">
      <img alt="natural language processing" src="../assets/nlp.png">
      </div>
      <div class="mainHeader-right">
          <p>filename</p>
          <button class="mainHeader-export">Export</button>
          <img alt="user" src="../assets/man-user.svg">
      </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    fileName: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.mainHeader{
  border: solid black 1px;
}
.mainHeader-left{
    float: left;
}
.mainHeader-right{
    float: right;
    display: inline-flex;
}
img{
    height: 30px;
    width: 30px;
}

</style>
