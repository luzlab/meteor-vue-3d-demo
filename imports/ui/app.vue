<template>
  <div>
    <p>This is a Vue component and below is the current date:<br />{{date}}</p>
    <!-- <p>This is a VueGL component and below is a ThreeJS renderer:<br ></p>
    <vgl-renderer antialias style="height: 100vh;">
      <vgl-scene>
        <vgl-sphere-geometry name="sphere"></vgl-sphere-geometry>
        <vgl-mesh-standard-material name="std"></vgl-mesh-standard-material>
        <vgl-mesh geometry="sphere" material="std"></vgl-mesh>
        <vgl-ambient-light color="#ffeecc"></vgl-ambient-light>
        <vgl-directional-light position="0 1 1"></vgl-directional-light>
      </vgl-scene>
      <vgl-perspective-camera orbit-position="5 1 1;"></vgl-perspective-camera>
    </vgl-renderer> -->
    <p>This is another Vue-3d-Model component and below is a ThreeJS renderer:<br ></p>
    <model-stl src="/monkey2.stl"></model-stl>
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
  font-size: 2em;
  text-align: center;
}
</style>
