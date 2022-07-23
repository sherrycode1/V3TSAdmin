<template>
  <div>main</div>
  <el-button type="primary">aa</el-button>
  <el-button type="danger">aa</el-button>
  <el-input />
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import { ElConfigProvider } from "element-plus"
export default defineComponent({
  components: {
    // ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: "small",
    }
  },
})
</script>

<style scoped></style>
