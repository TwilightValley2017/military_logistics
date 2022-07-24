<template>
  <div>
    <fz-form :form="form" @submit="handleSubmit">
      <fz-form-item label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <fz-input
          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </fz-form-item>
      <fz-form-item 
        label="Rule Name" 
        :label-col="{ span: 5 }" 
        :wrapper-col="{ span: 12 }"
        :validate-status="ruleName.validateStatus"
        :help="ruleName.help"
        >
        <fz-input
          v-decorator="[
          'ruleName'
        ]"
        placeholder="请输入规则名称"
        />
      </fz-form-item>
      <fz-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <fz-button type="primary" html-type="submit">
          Submit
        </fz-button>
      </fz-form-item>
    </fz-form>
  </div>
</template>

<script>
export default {
    name: "form-slide",
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { 
        name: 'coordinated',
        onFieldsChange: (props, fields) => {
          if (fields.ruleName && this.ruleName.isDuplicated) {
            console.log(fields.ruleName.value)
            this.ruleName = {
              isDuplicated: false
            }
          }
        },
      }),
      ruleName: {
        isDuplicated: false,
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err) => {
        if (!err) {
          setTimeout(() => {
            this.ruleName = {
              validateStatus: 'error',
              help: '重复了',
              isDuplicated: true,
            }
            this.$nextTick(() => {
              this.form.validateFields(['ruleName'])
            })
          }, 500)
        }
      })
    },
  },
}
</script>