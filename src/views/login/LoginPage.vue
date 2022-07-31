<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginPanel from "./copms/LoginPanel.vue"

export default defineComponent({
  setup() {
    return {}
  },
  components: { LoginPanel },
})
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/imgs/bg.jpeg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
