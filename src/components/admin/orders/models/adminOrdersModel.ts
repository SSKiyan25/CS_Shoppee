import { db } from "@/firebase/init.ts";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export interface Order {
  id: string;
  cart: any[];
  dateOrdered: string;
  orderNumber: number;
  orderRefNum: string;
  orderStatus: string;
  paymentMethod: string;
  paymentStatus: string;
  totalPrice: number;
  userContactNumber: string;
  userEmailAddress: string;
  userId: string;
  userName: string;
  studentId: string;
  showDetails?: boolean;
}

export const getProductDetails = async (productId: string) => {
  const productDoc = doc(db, "products", productId);
  const productSnapshot = await getDoc(productDoc);
  return productSnapshot.exists() ? productSnapshot.data() : {};
};

export const fetchOrders = async () => {
  const ordersCollection = collection(db, "userOrder");
  const ordersSnapshot = await getDocs(ordersCollection);
  return (
    await Promise.all(
      ordersSnapshot.docs.map(async (doc) => {
        const orderData = doc.data() as Order;
        orderData.cart = await Promise.all(
          orderData.cart.map(async (product: any) => {
            product.details = await getProductDetails(product.productId);
            return product;
          })
        );
        return {
          ...orderData,
          id: doc.id,
          showDetails: false,
        };
      })
    )
  ).filter((order: Order) => order.orderStatus === "done");
};
