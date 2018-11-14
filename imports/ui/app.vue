<template>
  <div id="lcdscreen">
    <div id="cadpreview">
      <model-stl height=480 width=800 backgroundAlpha=0 src="/monkey.stl"></model-stl>
    </div>
    <div id="left-controls">
      <p>Left</p> 
      <v-btn large color="green">Success</v-btn>
      <v-btn large color="red">Error</v-btn>
    </div>
    <div id="right-controls">
      <p>Right</p> 
      <v-btn large color="yellow">Warning</v-btn>
      <v-btn large color="blue">Info</v-btn>
    </div>
  </div>
</template>

<script>
import { ModelStl } from 'vue-3d-model';

export default {
  data() {
    return {
      date: new Date(),
    };
  },
  mounted() {
    console.log('mounted !!! CJQ2');
  },

  components: { ModelStl },
};
</script>

<style scoped>
p {
  display: block;
  font-size: 2em;
  text-align: center;
}

#lcdscreen {
  height: 480px;
  width: 800px;
  background-color: lightgray;
  overflow: auto;
}

#cadpreview {
  position: fixed;
  left: 1px;
  top: 1px;
}

#left-controls {
  margin-top: 30px;
  float: left;
  width: 100px;
}

#right-controls {
  margin-top: 30px;
  margin-right: 50px;
  float: right;
  width: 100px;
}

button {
  display: block;
}
</style>
