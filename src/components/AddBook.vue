<script setup lang="ts">
import type{ FormInstance, FormRules } from 'element-plus';

const showDialog = ref(false)

const bookRef = ref<FormInstance>()

const bookModel = ref({
  name: '',
  auther: '',
  word: '',
  cover: '',
})

const bookRules = ref<FormRules>({
  name: [{ required: true, message: '请输入书名', trigger: 'blur' }],
  auther: [{ required: true, message: '请输入作者', trigger: 'blur' }],
  word: [{ required: true, message: '请输入字数', trigger: 'blur' }],
  cover: [{ required: true, message: '请上传封面', trigger: 'blur' }],
})

const openModel = () => {
  showDialog.value = true
}

const submitFrom = async (formRef: FormInstance | undefined) => {
  if (!formRef) return
  await formRef.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', fields)
    } else {
      console.log('error submit!', fields)
    }
  })
  console.log("submit")
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <el-button @click="openModel">添加书籍</el-button>

  <el-dialog
    v-model="showDialog"
    title="添加书籍"
    width="30%"
  >
    <el-form
      ref="bookRef"
      :model="bookModel"
      :rules="bookRules"
      status-icon
    >
      <el-form-item label="书名" prop="name">
        <el-input v-model="bookModel.name" />
      </el-form-item>
      <el-form-item label="作者" prop="auther">
        <el-input v-model="bookModel.auther" />
      </el-form-item>
      <el-form-item label="字数" prop="word">
        <el-input v-model="bookModel.word" />
      </el-form-item>
      <el-form-item label="封面" prop="cover">
        <ImageUpload v-model="bookModel.cover" limit=1 />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="showDialog = false">取 消</el-button>
      <el-button @click="resetForm(bookRef)">清 空</el-button>
      <el-button type="primary" @click="submitFrom(bookRef)">提 交</el-button>
    </template>
  </el-dialog>
</template>
