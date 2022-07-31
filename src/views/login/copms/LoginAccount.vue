<template>
  <div>
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="pswd">
        <el-input v-model="account.pswd" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm } from "element-plus"
import localCache from "@/utils/cache"

import { rules } from "../config/account-config"

export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: localCache.getCache("name") ?? "",
      pswd: localCache.getCache("pswd") ?? "",
    })
    const loginAction = (iskeeppswd: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (iskeeppswd) {
            // 判断是否要记住密码
            localCache.setCache("name", account.name)
            localCache.setCache("pswd", account.pswd)
          } else {
            localCache.deleteCache("name")
            localCache.deleteCache("pswd")
          }
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef,
    }
  },
})
</script>

<style scoped></style>
