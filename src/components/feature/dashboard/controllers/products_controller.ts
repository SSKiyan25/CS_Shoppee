import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import { db } from "@/firebase/init.ts";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useRoute } from "vue-router";

export const setup = () => {
  const route = useRoute();
  const products = ref<any[]>([]);
  const product = ref<any>(null);

  onMounted(async () => {
    initFlowbite();

    const productCollection = collection(db, "products");
    const productSnapshot = await getDocs(productCollection);
    products.value = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // Check if route has id parameter
    if (route.params.id) {
      const id = route.params.id as string;
      const productRef = doc(db, "products", id);
      const singleProductSnapshot = await getDoc(productRef);
      if (singleProductSnapshot.exists()) {
        product.value = {
          id: singleProductSnapshot.id,
          ...singleProductSnapshot.data(),
        };
      }
    }
  });
  return { products, product };
};
