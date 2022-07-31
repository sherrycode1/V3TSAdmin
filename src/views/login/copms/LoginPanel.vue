<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane label="账号登录">
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="iskeeppswd">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./LoginAccount.vue"
import LoginPhone from "./LoginPhone.vue"

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const iskeeppswd = ref(false)
    // ref
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLogin = () => {
      // 调用login-account的登录
      accountRef.value?.loginAction(iskeeppswd.value)
    }
    return {
      iskeeppswd,
      handleLogin,
      accountRef,
    }
  },
})
</script>

<style scoped lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
