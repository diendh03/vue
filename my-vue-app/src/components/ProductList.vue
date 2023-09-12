<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="id" prop="id" />
    <el-table-column label="productName" prop="productName" />
    <el-table-column align="right">
      <template #header>
        <el-input size="small" placeholder="Type to search" />
        <router-link to="/add-product">
          <el-button size="small" type="primary" icon="el-icon-search"
            >AddProduct</el-button
          >
        </router-link>
      </template>
      <template #default="scope">
        <router-link :to="`/update-product/${scope.row.id}`">
          <el-button size="small">Edit</el-button>
        </router-link>

        <el-button size="small" type="danger" @click="handleDelete(scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, onMounted, h } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
const tableData = ref([]);
const GetListProduct = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    tableData.value = data;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  GetListProduct();
});

interface User {
  id: string;
  productName: string;
  price: string;
}

console.log(tableData);

const handleDelete = async (row: User) => {
  const isChecked = confirm("Are you sure you want to delete?");
  if (isChecked) {
    await axios.delete(`http://localhost:3000/products/${row.id}`);
    ElMessage({
      message: h("p", null, [
        h("span", { style: "color:red" }, "Xóa sản phẩm thành công "),
      ]),
    });
    tableData.value = tableData.value.filter((item: any) => item.id != row.id);
  }
};
</script>
