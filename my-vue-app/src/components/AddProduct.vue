<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const addForm = reactive({
  productName: "",
  price: 0,
});
const router = useRouter();
const onHandleSubmit = async () => {
  let isChecked = true;
  if (addForm.productName.trim() === "") {
    alert("Không được để trống");
    isChecked = false;
  }
  if (addForm.price <= 0) {
    alert("Không được để trống");
    isChecked = false;
  }
  if (isChecked) {
    const data = await axios.post("http://localhost:3000/products", addForm);
    if (!data) {
      alert("Thêm sản phẩm thất bại");
    } else {
      alert("Thêm sản phẩm thành công");
      router.push("/product-manager");
    }
  }
};
</script>

<template>
  <el-form ref="form" :model="addForm">
    <el-form-item label="Tên sản phẩm">
      <el-input v-model="addForm.productName"></el-input>
    </el-form-item>
    <el-form-item label="Giá sản phẩm">
      <el-input type="text" v-model="addForm.price"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onHandleSubmit"
        >Thêm sản phẩm</el-button
      >
    </el-form-item>
  </el-form>
  <br />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
