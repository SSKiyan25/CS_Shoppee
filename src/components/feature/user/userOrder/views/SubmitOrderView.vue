<template>
  <div class="pt-20 md:pt-24 px-2 md:px-8">
    <div class="flex flex-row items-center">
      <router-link to="/" class="cursor-pointer text-primary/50">
        <div class="flex flex-row items-center pt-0.5 hover:text-primary">
          <span class="material-symbols-outlined text-sm">
            keyboard_backspace </span
          ><span class="text-xs hover:underline pl-1"> Home</span>
        </div>
      </router-link>
      <div class="flex flex-row items-center text-primary/50 pt-0.5">
        <span class="material-symbols-outlined text-sm pt-0.5">
          navigate_next
        </span>
        <span class="text-xs">Order</span>
        <span class="material-symbols-outlined text-sm pt-0.5">
          navigate_next
        </span>
        <router-link
          :to="`/confirmorder/${route.params.id}`"
          class="flex items-center"
        >
          <span class="text-xs text-primary/50"> Cart</span>
        </router-link>
        <span class="material-symbols-outlined text-sm pt-0.5">
          navigate_next
        </span>
        <span class="text-xs text-primary"> SubmitOrder </span>
      </div>
    </div>
  </div>

  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-8 mx-auto">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-secondary-foreground sm:text-4xl">
          Submit Order
        </h1>
        <p class="mt-1 text-secondary-foreground">
          Please fill out the form below to submit your order.
        </p>
      </div>
    </div>

    <div class="mt-8 max-w-xl mx-auto">
      <!-- Card -->
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
        <div class="border-b-2 pb-2">
          <h2 class="text-xl font-semibold text-primary">Fill in the form</h2>
        </div>
        <form @submit.prevent="submitOrder(formData)">
          <div class="grid gap-4 lg:gap-6 pt-8">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  class="block mb-2 text-sm text-secondary-foreground font-medium"
                  >First Name</label
                >
                <input
                  type="text"
                  v-model="formData.firstName"
                  class="py-3 px-4 block w-full bg-secondary border-primary/40 rounded-lg text-sm focus:border-primary/70 focus:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none"
                  required
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-secondary-foreground font-medium"
                  >Last Name</label
                >
                <input
                  type="text"
                  v-model="formData.lastName"
                  class="py-3 px-4 block w-full bg-secondary border-primary/40 rounded-lg text-sm focus:border-primary/70 focus:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none"
                  required
                />
              </div>
            </div>
            <!-- End Grid -->

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  class="block mb-2 text-sm text-secondary-foreground font-medium"
                  >Preferred Email</label
                >
                <input
                  type="email"
                  v-model="formData.emailAddress"
                  class="py-3 px-4 block w-full bg-secondary border-primary/40 rounded-lg text-sm focus:border-primary/70 focus:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none"
                  required
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-secondary-foreground font-medium"
                  >Phone Number
                  <span class="opacity-50">(Optional)</span></label
                >
                <input
                  type="text"
                  v-model="formData.phoneNumber"
                  class="py-3 px-4 block w-full bg-secondary border-primary/40 rounded-lg text-sm focus:border-primary/70 focus:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
            </div>
            <!-- End Grid -->

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  class="block mb-2 text-sm text-secondary-foreground font-medium"
                  >Student ID
                  <span class="opacity-50">(For Students)</span></label
                >
                <input
                  type="text"
                  placeholder="Optional"
                  v-model="formData.studentId"
                  class="py-3 px-4 block w-full bg-secondary border-primary/40 rounded-lg text-sm focus:border-primary/70 focus:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-secondary-foreground font-medium"
                  >Payment Method</label
                >
                <select
                  v-model="formData.paymentMethod"
                  class="py-3 px-4 block w-full bg-secondary border-primary/40 rounded-lg text-sm focus:border-primary/70 focus:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none"
                  required
                >
                  <option value="cash">Cash</option>
                  <option value="gcash">GCash</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label
                class="block mb-2 text-sm text-secondary-foreground font-medium"
                >Products:</label
              >
              <div
                v-for="product in products"
                :key="product.productId"
                class="pl-4"
              >
                <label class="text-sm opacity-80"
                  >{{ product.details.name }} ({{ product.quantity }}) -
                  {{ product.totalPrice }}</label
                >
              </div>
            </div>
            <div>
              <label
                class="block mb-2 text-sm text-secondary-foreground font-medium"
              >
                Total Amount:
                <span class="text-primary underline"> {{ totalPrice }}</span>
              </label>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-6 grid">
            <button
              type="submit"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-50 disabled:pointer-events-none"
            >
              Send Order
            </button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-secondary-foreground/70">
              After sending your order, wait for your order reference number.
            </p>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
  <div class="pb-24"></div>
  <div
    v-if="loading"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80"
  >
    <LoadingComponent />
  </div>
  <div
    v-if="ifSuccess"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80"
  >
    <div class="flex flex-col items-center justify-center h-full">
      <div
        class="flex flex-col items-center justify-center rounded-sm bg-secondary p-8"
      >
        <span><img src="/cartSuccessful.gif" class="h-32 w-auto" /></span>
        <span class="text-lg text-secondary-foreground/90 text-wrap"
          >Your Order has been successfully processed!
        </span>
        <span class="text-base text-secondary-foreground/90 pt-4"
          >This is your order's reference number:
        </span>
        <span class="text-4xl text-primary underline">
          {{ order?.orderRefNum }}
        </span>
        <span class="text-sm text-secondary-foreground/70 pt-2">
          (Show this to the CS3 treasurer for your payment.)
        </span>
        <div class="flex pt-4 space-x-2">
          <router-link
            to="/contactUs"
            class="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-background/70 hover:text-secondary-foreground/80"
            ><span class="text-secondary-foreground"> Contact Us </span>
          </router-link>
          <router-link
            to="/"
            class="bg-primary/80 text-primary/90 px-4 py-2 rounded-lg hover:bg-primary/90 hover:text-primary/80"
            ><span class="text-primary-foreground"> Done </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { db, auth } from "@/firebase/init.ts";
import {
  getDoc,
  doc,
  DocumentData,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import LoadingComponent from "../components/LoadingComponent.vue";
const route = useRoute();
const loading = ref(false);
const order = ref<DocumentData | null | undefined>(null);
const cache = new Map();
const products = ref<any[]>([]);
const ifSuccess = ref(false);

const formData = ref({
  firstName: "",
  lastName: "",
  emailAddress: "",
  phoneNumber: "",
  studentId: "",
  paymentMethod: "",
});

const fetchProductDetails = async (productId: string) => {
  try {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

const fetchOrder = async () => {
  try {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("User not logged in");

    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const user = userSnap.data();
      const latestOrder = user.orders
        .reverse()
        .find((order: any) => order.status === "OnQueue");
      if (!latestOrder) throw new Error("No order in queue");

      const docRef = doc(db, "userOrder", latestOrder.userOrderID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const fetchedOrder = docSnap.data();
        for (let product of fetchedOrder.cart) {
          const productDetails = await fetchProductDetails(product.productId);
          product.details = productDetails;
          products.value.push(product);
        }
        return fetchedOrder;
      } else {
        console.log("No such document!");
      }
    } else {
      console.log("No such user!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

const totalPrice = computed(() => {
  if (order.value && order.value.cart) {
    return parseFloat(
      order.value.cart
        .reduce(
          (
            total: number,
            item: { details: { price: number }; quantity: number }
          ) => total + item.details.price * item.quantity,
          0
        )
        .toFixed(2)
    );
  } else {
    return 0;
  }
});

const getNumberOfOrders = async () => {
  const querySnapshot = await getDocs(collection(db, "userOrder"));
  return querySnapshot.size;
};

async function generateOrderRefNum() {
  const now = new Date();
  const months = [
    "J", // January
    "F", // February
    "M", // March
    "A", // April
    "M", // May
    "J", // June
    "J", // July
    "A", // August
    "S", // September
    "O", // October
    "N", // November
    "D", // December
  ];
  const year = now.getFullYear().toString().slice(-2);
  const month = months[now.getMonth()];
  const day = now.getDate();

  const numberOfOrders = await getNumberOfOrders();

  // Combine all parts and return as a string
  return `${month}${day}${year}${numberOfOrders + 1}`;
}

const submitOrder = async (formData: any) => {
  try {
    loading.value = true;
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("User not logged in");

    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const user = userSnap.data();
      const latestOrder = user.orders
        .reverse()
        .find((order: any) => order.status === "OnQueue");
      if (!latestOrder) throw new Error("No order in queue");

      const docRef = doc(db, "userOrder", latestOrder.userOrderID);
      const orderRefNum = await generateOrderRefNum();
      await updateDoc(docRef, {
        orderRefNum,
        userName: formData.lastName + ", " + formData.firstName,
        userContactNumber: formData.phoneNumber,
        studentId: formData.studentId,
        totalPrice: totalPrice.value,
        userEmailAddress: formData.emailAddress,
        paymentMethod: formData.paymentMethod,
        paymentStatus: "pending",
        orderStatus: "processing",
        dateOrdered: new Date().toDateString(),
      });
      if (order.value) {
        order.value.orderRefNum = orderRefNum;
      }
      // Update user's order status and payment status
      latestOrder.status = "done";
      latestOrder.paymentStatus = "paid";
      await updateDoc(userRef, user);
    } else {
      console.log("No such user!");
    }
    loading.value = false;
    ifSuccess.value = true;
  } catch (error) {
    console.error("Error updating document:", error);
    loading.value = false;
  }
};

watch(
  () => route.params.id,
  async (newId, oldId) => {
    loading.value = true;
    if (typeof newId === "string" && newId !== oldId) {
      if (cache.has(newId)) {
        order.value = cache.get(newId);
      } else {
        const fetchedOrder = await fetchOrder();
        if (fetchedOrder) {
          order.value = fetchedOrder;
          cache.set(newId, order.value);
        }
      }
    }
    loading.value = false;
  },
  { immediate: true }
);
</script>
