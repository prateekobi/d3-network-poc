<template>
  <div>
    <d3-network :net-nodes="nodes" :net-links="links" :options="options" />
  </div>
</template>

<script>
import D3Network from "vue-d3-network";

export default {
  name: "d3",
  components: {
    D3Network
  },
  data () {
    return {
      nodes: [
        { id: 1, name: 'Passion' },
        { id: 2, name: 'Preference' },
        { id: 3, name: 'Explore' , _color:'orange' },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
      ],
      links: [
        { sid: 1, tid: 2, _color:'red' },
        { sid: 2, tid: 8, _color:'f0f' },
        { sid: 3, tid: 4,_color:'rebeccapurple' },
        { sid: 4, tid: 5 },
        { sid: 5, tid: 6 },
        { sid: 7, tid: 8 },
        { sid: 5, tid: 8 },
        { sid: 3, tid: 8 },
        { sid: 7, tid: 9 },
        { sid: 9, tid: 1, _color: 'darkgreen'},
        { sid: 6, tid: 1 },
        { sid: 6, tid: 2 }
      ],
      options:
      {
        force: 3000,
        nodeSize: 20,
        nodeLabels: true,
        linkWidth:5
      }
    }
  },
};
</script>