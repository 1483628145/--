<template>
  <div>
    Search
    <div>params参数： {{ keyword }} query参数： {{ id }}</div>
  </div>
</template>

<script>
export default {
  props: ["id", "keyword"],
};
</script>

<style></style>
