<template>
  <div>
    <el-form :rules="phonerls" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="getcode">
          <el-input v-model="account.code" />
          <el-button type="primary" class="getverfify">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { phonerls } from "../config/account-config"
export default defineComponent({
  setup() {
    const account = reactive({
      phone: "",
      code: "",
    })

    return {
      account,
      phonerls,
    }
  },
})
</script>

<style scoped lang="less">
.getcode {
  display: flex;
  .getverfify {
    margin-left: 8px;
  }
}
</style>
