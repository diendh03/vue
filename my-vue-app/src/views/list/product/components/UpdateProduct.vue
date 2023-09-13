<script setup lang="ts">
import { reactive, onMounted, ref, watchEffect } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const product = ref<any>({});
const GetProductById = async () => {
  try {
    const id = route.params.id;
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    product.value = data;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  GetProductById();
});
const addForm = reactive({
  productName: "",
  price: 0,
});
watchEffect(() => {
  addForm.productName = product.value.productName || "";
  addForm.price = product.value.price || 0;
});
const onHandleUpdate = async () => {
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
    const data = await axios.put(
      `http://localhost:3000/products/${route.params.id}`,
      addForm
    );
    if (!data) {
      alert("Sửa sản phẩm thất bại");
    } else {
      alert("Sửa sản phẩm thành công");
      router.push("/product-manager");
    }
  }
};
</script>

<template>
  <el-h1>Thêm sản phẩm </el-h1>
  <el-form class="m-5" ref="form" :model="addForm">
    <el-form-item label="Tên sản phẩm">
      <el-input v-model="addForm.productName"></el-input>
    </el-form-item>
    <el-form-item label="Giá sản phẩm">
      <el-input type="text" v-model="addForm.price"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="bg-blue-500" @click="onHandleUpdate"
        >Sửa sản phẩm</el-button
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
