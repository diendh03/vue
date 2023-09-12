import { h } from "vue";
import { ElMessageBox } from "element-plus";
const messageBox = (msg: string) => {
  ElMessageBox({
    title: "Thông báo!",
    message: h("p", null, [h("span", null, msg)]),
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    beforeClose: (action, instance, done) => {
      if (action === "confirm") {
        instance.confirmButtonLoading = true;
        instance.confirmButtonText = "Loading...";
        setTimeout(() => {
          done();
          setTimeout(() => {
            instance.confirmButtonLoading = false;
          }, 100);
        }, 500);
      } else {
        done();
      }
    },
  });
};
export default messageBox;
