// 编写规则
export const rules = {
  name: [
    {
      required: true,
      message: "用户名是必传内容~",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5~10个字母或者数字~",
      trigger: "blur",
    },
  ],
  pswd: [
    { required: true, message: "密码是必传内容", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: "密码是大于5位的数字和字母组合",
      trigger: "blur",
    },
  ],
}
export const phonerls = {
  phone: [
    {
      required: true,
      message: "用户名是必传内容~",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{11}$/,
      message: "您的手机号不符合规则，请确认",
      trigger: "blur",
    },
  ],
  code: [
    { required: true, message: "密码是必传内容", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: "验证码为6位数",
      trigger: "blur",
    },
  ],
}
