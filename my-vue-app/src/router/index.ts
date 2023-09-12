import { createRouter, createWebHashHistory } from "vue-router";
import LayoutAdminVue from "../layout/LayoutAdmin.vue";
import AddProductVue from "../components/AddProduct.vue";
import ProductListVue from "../components/ProductList.vue";
import UpdateProductVue from "../components/UpdateProduct.vue";
const routes: any = [
  {
    path: "/",
    component: LayoutAdminVue,
    redirect: "/product-manager",
    children: [
      { path: "product-manager", component: ProductListVue },
      { path: "add-product", component: AddProductVue },
      {
        path: "update-product/:id",
        component: UpdateProductVue,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
