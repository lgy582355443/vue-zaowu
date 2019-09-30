<template>
  <div class="search-main">这是搜索页</div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    //重新计算baseSroll
    setTimeout(() => {
      this.$refs.baseLayer.$scroll.refresh();
    }, 1000);
  }
};
</script>
<style lang="scss" scoped>
</style>