<template>
  <NavBar />
  <AdminSidebar />
  <div class="p-4 ml-2 sm:ml-64 py-16">
    <div class="flex flex-row justify-start py-10">
      <div class="flex">
        <span class="material-symbols-outlined py-2 px-2 text-5xl">
          add_ad
        </span>
      </div>
      <div class="flex flex-col">
        <h1 class="text-2xl text-primary">Add a Product</h1>
        <p class="text-sm py-1">
          Add a new product to the inventory. You can add a product by providing
          the product name, description, price, and any others.
        </p>
      </div>
    </div>
    <div class="flex flex-col p-4 border-2 rounded-lg py-5">
      <div class="flex flex-row border-b-2">
        <h1 class="font-bold text-primary text-xl tracking-wide mb-2">
          Input All Required Fields
        </h1>
      </div>
      <div class="p-1">
        <form @submit.prevent="handleFormSubmit">
          <div class="flex flex-row">
            <div class="flex flex-col w-1/2 pr-2">
              <label for="product-name" class="text-sm font-medium py-2">
                Product Name
                <span class="text-red-400 font-bold text-sm">*</span>
              </label>
              <input
                type="text"
                id="product-name"
                v-model="newProduct.name"
                class="p-2 border text-sm rounded-lg bg-secondary border-primary/40 text-secondary-foreground"
                placeholder="Enter product name"
                required
              />
            </div>
            <div class="flex flex-col w-1/2 pl-2">
              <label for="product-faction" class="text-sm font-medium py-2">
                Product Faction
                <span class="text-red-400 font-bold text-sm">*</span>
              </label>
              <select
                id="product-faction"
                v-model="newProduct.faction"
                class="p-2 border text-sm rounded-lg bg-secondary border-primary/40 text-secondary-foreground"
                required
              >
                <option disabled value="">Please select a faction</option>
                <option value="CET">CET</option>
                <option value="BSCS">BSCS</option>
                <option value="BSCE">BSCE</option>
                <option value="BSGE">BSGE</option>
                <option value="BSME">BSME</option>
                <option value="BSMet">BSMet</option>
                <option value="BSABE">BSABE</option>
              </select>
            </div>
          </div>
          <div class="flex mt-4">
            <div class="flex flex-col w-1/2 pr-2">
              <label for="product-category" class="text-sm font-medium py-2">
                Product Category
                <span class="text-red-400 font-bold text-sm">*</span>
                <span class="text-xs text-secondary-foreground/70"
                  >(T-Shirt, Polo-Shirt, Hoodie, Stickers, Other)</span
                >
              </label>
              <select
                id="product-category"
                v-model="newProduct.category"
                class="p-2 border text-sm rounded-lg bg-secondary border-primary/40 text-secondary-foreground"
                required
              >
                <option disabled value="">Please select a category</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Polo-Shirt">Polo-Shirt</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Lanyard">Lanyard</option>
                <option value="Stickers">Stickers</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="flex flex-col w-1/2 pl-2">
              <label for="product-price" class="text-sm font-medium py-2">
                Product Price
                <span class="text-red-400 font-bold text-sm">*</span>
              </label>
              <input
                type="number"
                id="product-price"
                v-model="newProduct.price"
                step="0.01"
                class="p-2 border text-sm rounded-lg bg-secondary border-primary/40 text-secondary-foreground"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>
          <div class="flex flex-col mt-4">
            <label for="product-quantity" class="text-sm font-medium py-2">
              Sizes
              <span class="opacity-50 text-xs"
                >(One at a Time if adding other sizes)</span
              >
            </label>
            <div class="flex flex-row flex-wrap">
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-na"
                  type="checkbox"
                  value="none"
                  v-model="naChecked"
                  class="w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2"
                />
                <label
                  for="inline-checkbox-xs"
                  class="ms-2 text-sm font-medium text-secondary-foreground"
                  >N/A</label
                >
              </div>
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-xs"
                  type="checkbox"
                  value="XS"
                  v-model="newProduct.sizes"
                  v-bind:disabled="naChecked"
                  :class="`w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                />
                <label
                  for="inline-checkbox-xs"
                  :class="`ms-2 text-sm font-medium text-secondary-foreground ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                  >XS</label
                >
              </div>
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-s"
                  type="checkbox"
                  value="S"
                  v-model="newProduct.sizes"
                  v-bind:disabled="naChecked"
                  :class="`w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                />
                <label
                  for="inline-checkbox-s"
                  :class="`ms-2 text-sm font-medium text-secondary-foreground ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                  >S</label
                >
              </div>
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-m"
                  type="checkbox"
                  value="M"
                  v-model="newProduct.sizes"
                  v-bind:disabled="naChecked"
                  :class="`w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                />
                <label
                  for="inline-checkbox-m"
                  :class="`ms-2 text-sm font-medium text-secondary-foreground ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                  >M</label
                >
              </div>
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-l"
                  type="checkbox"
                  value="L"
                  v-model="newProduct.sizes"
                  v-bind:disabled="naChecked"
                  :class="`w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                />
                <label
                  for="inline-checkbox-l"
                  :class="`ms-2 text-sm font-medium text-secondary-foreground ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                  >L</label
                >
              </div>
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-xl"
                  type="checkbox"
                  value="XL"
                  v-model="newProduct.sizes"
                  v-bind:disabled="naChecked"
                  :class="`w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                />
                <label
                  for="inline-checkbox-xl"
                  :class="`ms-2 text-sm font-medium text-secondary-foreground ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                  >XL</label
                >
              </div>
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-2xl"
                  type="checkbox"
                  value="2XL"
                  v-model="newProduct.sizes"
                  v-bind:disabled="naChecked"
                  :class="`w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                />
                <label
                  for="inline-checkbox-2xl"
                  :class="`ms-2 text-sm font-medium text-secondary-foreground ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                  >2XL</label
                >
              </div>
              <div class="flex items-center me-4">
                <input
                  id="inline-checkbox-3xl"
                  type="checkbox"
                  value="3XL"
                  v-model="newProduct.sizes"
                  v-bind:disabled="naChecked"
                  :class="`w-4 h-4 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                />
                <label
                  for="inline-checkbox-3xl"
                  :class="`ms-2 text-sm font-medium text-secondary-foreground ${
                    naChecked ? 'opacity-50' : ''
                  }`"
                  >3XL</label
                >
              </div>
              <div
                :class="`flex flex-row space-x-1 items-center me-4 ${
                  naChecked ? 'opacity-50' : ''
                }`"
              >
                <label class="text-xs">Other: </label>
                <div v-for="(size, index) in otherSizes" :key="index">
                  <input
                    type="text"
                    v-model="size.value"
                    v-bind:disabled="naChecked"
                    class="w-12 h-8 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2 text-xs"
                    pattern="\S+"
                    title="This field should not contain spaces."
                  />
                </div>
                <Button
                  title="Click to add more options"
                  variant="default"
                  class="w-2/5"
                  @click.prevent="addSize"
                  v-bind:disabled="naChecked"
                >
                  <span class="text-xs font-semibold">Add</span>
                </Button>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-4">
            <label for="product-description" class="text-sm font-medium py-2">
              Product Description
            </label>
            <textarea
              id="product-description"
              rows="5"
              v-model="newProduct.description"
              class="p-2 border rounded-lg text-xs bg-secondary border-primary/40 text-secondary-foreground"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <div class="flex flex-col mt-4">
            <label for="product-image" class="text-sm font-medium py-2">
              Product Cover Photo
              <span class="text-red-400 font-bold text-sm">*</span>
            </label>
            <input
              type="file"
              id="product-image"
              required
              accept="image/*"
              ref="coverPhotoInput"
              class="border-2 rounded-lg h-10 text-sm"
            />
          </div>
          <div class="flex flex-col mt-4">
            <label class="block py-2 text-sm font-medium" for="multiple_files"
              >Upload Product Photos
              <span class="opacity-50 text-xs"
                >(Add Additional Photos like its Sizes or other Colors)</span
              ></label
            >
            <input
              class="block w-full text-xs border-2 rounded-lg h-10"
              id="multiple_files"
              accept="image/*"
              type="file"
              ref="productPhotosInput"
              required
              multiple
            />
          </div>
          <div class="flex items-center justify-between pt-6">
            <div class="flex items-center">
              <input
                id="is-hidden"
                type="checkbox"
                v-model="newProduct.isPublished"
                class="w-8 h-8 text-primary/80 bg-secondary border-primary/40 rounded focus:ring-primary focus:ring-2"
              />
              <label
                for="is-hidden"
                class="ms-2 text-sm font-medium text-secondary-foreground"
              >
                Publish Product
              </label>
            </div>
            <div class="flex items-center justify-end space-x-2">
              <button
                type="submit"
                class="p-2 bg-primary text-sm text-primary-foreground hover:bg-primary/80 font-semibold rounded-lg"
              >
                Add Product
              </button>
              <button
                class="p-2 pr-2 rounded-lg text-sm border-none border-secondary-foreground/40"
              >
                <router-link
                  to="/admin/products"
                  class="p-2 text-sm text-secondary-foreground font-semibold rounded-lg"
                  >Cancel</router-link
                >
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--File Uploading-->
  <div
    v-if="isLoading && !isUploadSuccessful"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <div class="p-8 bg-secondary rounded-xl shadow space-y-4">
      <div class="flex flex-row">
        <span class="text-xl font-bold text-secondary-foreground pt-4 pl-8"
          >Uploading</span
        >
        <span><img src="/upload_fire.gif" class="h-16 w-auto" /></span>
      </div>

      <Progress
        v-model="progress"
        class="w-full border-2 border-background/20"
      />
    </div>
  </div>
  <!--File Uploading Sucessfully-->
  <div
    v-if="isUploadSuccessful"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <div class="p-8 bg-secondary rounded-xl shadow space-y-4">
      <div class="flex flex-col justify-center items-center">
        <span class="text-xl font-bold text-secondary-foreground pt-4"
          >Product Added Successfully</span
        >
        <span><img src="/upload_successful.gif" class="h-32 w-auto" /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "../AdminNavBar.vue";
import AdminSidebar from "../AdminSidebar.vue";
import { onMounted, ref, watchEffect, watch } from "vue";
import { initFlowbite } from "flowbite";
import { storage, db } from "@/firebase/init.ts";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { Progress } from "@/components/ui/progress";
import { Button } from "../../../../ui/button";

const router = useRouter();

onMounted(() => {
  initFlowbite();
});

interface ProductData {
  id?: string;
  name: string;
  category: string;
  faction: string;
  price: number;
  sizes: string[];
  description: string;
  coverPhoto: File;
  photos: File[];
  isPublished: boolean;
  isArchived: boolean;
  status: string;
}

const newProduct = ref<ProductData>({
  name: "",
  category: "",
  faction: "",
  price: 0,
  sizes: [],
  description: "",
  coverPhoto: new File([], ""),
  photos: [],
  isPublished: false,
  isArchived: false,
  status: "",
});

const coverPhotoInput = ref<HTMLInputElement | null>(null);
const productPhotosInput = ref<HTMLInputElement | null>(null);

let isLoading = ref(false);
let isUploadSuccessful = ref(false);

const progress = ref(13);

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => (progress.value = 66), 500);
  cleanupFn(() => clearTimeout(timer));
});

watch(
  newProduct,
  (newValue) => {
    newValue.status = newValue.isPublished ? "Published" : "Hidden";
  },
  { deep: true }
);

const naChecked = ref(false);
const otherSizes = ref([{ value: "" }]);

const addSize = () => {
  otherSizes.value = [...otherSizes.value, { value: "" }];
};

watch(
  () => naChecked.value,
  (newNaChecked) => {
    if (newNaChecked) {
      newProduct.value.sizes = [];
      otherSizes.value = [{ value: "" }];
    }
  }
);

const handleFormSubmit = async (): Promise<boolean> => {
  console.log("Form submitted");

  try {
    isLoading.value = true;
    console.log("Cover photo files:", coverPhotoInput.value?.files); // Check the cover photo input
    console.log("Product photos files:", productPhotosInput.value?.files); // Check the product photos input

    if (coverPhotoInput.value?.files) {
      const originalCoverPhoto = coverPhotoInput.value.files[0];
      newProduct.value.coverPhoto = new File(
        [originalCoverPhoto],
        `${newProduct.value.name}_coverPhoto`,
        { type: originalCoverPhoto.type }
      );
    } else {
      newProduct.value.coverPhoto = new File([], "");
    }

    if (productPhotosInput.value?.files) {
      newProduct.value.photos = Array.from(productPhotosInput.value.files).map(
        (originalPhoto, index) =>
          new File(
            [originalPhoto],
            `${newProduct.value.name}_Photo[${index}]${originalPhoto.name.slice(
              originalPhoto.name.lastIndexOf(".")
            )}`,
            { type: originalPhoto.type }
          )
      );
    } else {
      newProduct.value.photos = [];
    }

    // Upload cover photo
    const coverPhotoRef = storageRef(
      storage,
      `gs://csshoppee-76342.appspot.com/products/${newProduct.value.name}/${newProduct.value.coverPhoto.name}`
    );
    const coverPhotoUploadTask = uploadBytesResumable(
      coverPhotoRef,
      newProduct.value.coverPhoto
    );

    let coverPhotoURL = "";
    coverPhotoUploadTask.on(
      "state_changed",
      (snapshot: UploadTaskSnapshot) => {
        const progressValue =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress.value = progressValue;
        console.log("Upload is " + progressValue + "% done");
      },
      (error) => {
        console.error("Error uploading files: ", error);
      },
      async () => {
        coverPhotoURL = await getDownloadURL(coverPhotoRef);
        console.log("Cover photo URL:", coverPhotoURL);
      }
    );

    // Wait for the upload to complete
    await coverPhotoUploadTask;

    console.log("Cover photo URL after upload:", coverPhotoURL);

    // Upload other product photos
    const photosUploadPromises = newProduct.value.photos.map((photo: File) => {
      return new Promise(async (resolve, reject) => {
        const photoRef = storageRef(
          storage,
          `gs://csshoppee-76342.appspot.com/products/${newProduct.value.name}/${photo.name}`
        );
        const photoUploadTask = uploadBytesResumable(photoRef, photo);

        photoUploadTask.on(
          "state_changed",
          (snapshot: UploadTaskSnapshot) => {
            const progressValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progress.value = progressValue;
            console.log("Upload is " + progressValue + "% done");
          },
          (error) => {
            console.error("Error uploading files: ", error);
            reject(error);
          },
          async () => {
            const photoURL = await getDownloadURL(photoRef);
            console.log("Photo URL:", photoURL);
            resolve(photoURL);
          }
        );
      });
    });

    const photosURLs = await Promise.all(photosUploadPromises);
    console.log("Photo URLs:", photosURLs);

    // Add product data to Firestore
    const productData = {
      name: newProduct.value.name,
      category: newProduct.value.category,
      faction: newProduct.value.faction,
      price: newProduct.value.price,
      sizes: [
        ...new Set([
          ...newProduct.value.sizes,
          ...otherSizes.value.map((size) => size.value),
        ]),
      ],
      description: newProduct.value.description,
      coverPhoto: coverPhotoURL,
      photos: photosURLs,
      isPublished: newProduct.value.isPublished,
      isArchived: false,
      status: newProduct.value.status,
    };
    const docRef = await addDoc(collection(db, "products"), productData);
    await setDoc(docRef, { id: docRef.id }, { merge: true });
    console.log("Document reference:", docRef);

    // Reset form
    newProduct.value = {
      name: "",
      category: "",
      faction: "",
      price: 0,
      sizes: [],
      description: "",
      coverPhoto: new File([], ""),
      photos: [],
      isPublished: false,
      isArchived: false,
      status: "",
    };
    isLoading.value = false;
    isUploadSuccessful.value = true;
    setTimeout(() => {
      router.push("/admin/products");
    }, 3000);
    return true;
  } catch (error) {
    isLoading.value = false;
    isUploadSuccessful.value = false;
    console.error("Error uploading files: ", error);
    alert("Product addition failed");
    return false;
  }
};
</script>
