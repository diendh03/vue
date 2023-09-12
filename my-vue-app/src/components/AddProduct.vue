<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import messageBox from "../config/messageBox";
const addForm = reactive({
  productName: "",
  price: 0,
});

const router = useRouter();
const onHandleSubmit = async () => {
  let isChecked = true;
  const errors = {
    productName: "",
    price: "",
  };
  if (addForm.productName.trim() === "") {
    errors.productName = "Không được để trống";
    isChecked = false;
  }
  if (addForm.price <= 0) {
    errors.price = "Không được để trống";
    isChecked = false;
  }
  if (isChecked == false) {
    watchEffect(() => {
      (errors.productName = errors.productName || ""),
        (errors.price = errors.price || "");
    });
  }
  if (isChecked) {
    const data = await axios.post("http://localhost:3000/products", addForm);
    if (!data) {
      messageBox("Thêm sản phẩm thất bại");
    } else {
      messageBox("Thêm sản phẩm thành công");
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
