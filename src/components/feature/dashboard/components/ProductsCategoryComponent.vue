<template>
  <div v-for="category in categories" :key="category" class="mx-auto w-11/12">
    <div
      class="flex flex-col md:flex-row pt-12 pb-2 px-2 justify-between border-b-2 border-primary/40 mx-auto"
    >
      <div class="flex flex-row items-center text-primary space-x-1 md:mb:0">
        <span><Shirt /></span>
        <span
          class="font-semibold text-secondary-foreground tracking-wide text-3xl uppercase"
          >{{ category }}</span
        >
      </div>
      <div class="flex flex-col">
        <form>
          <div class="min-w-xl mx-auto">
            <Popover v-model:open="open">
              <PopoverTrigger as-child>
                <Button
                  variant="outline"
                  role="combobox"
                  :aria-expanded="open"
                  class="w-full md:w-[200px] justify-between"
                >
                  {{
                    value
                      ? frameworks.find(
                          (framework) => framework.value === value
                        )?.label
                      : "Select Department"
                  }}
                  <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-full md:w-[200px]">
                <Command>
                  <CommandInput class="h-9" placeholder="Search Category" />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="framework in frameworks"
                        :key="framework.value"
                        :value="framework.value"
                        @select="
                          (ev) => {
                            if (typeof ev.detail.value === 'string') {
                              value = ev.detail.value;
                            }
                            open = false;
                          }
                        "
                        class="cursor-pointer"
                      >
                        {{ framework.label }}
                        <Check
                          :class="
                            cn(
                              'ml-auto h-4 w-4',
                              value === framework.value
                                ? 'opacity-100'
                                : 'opacity-0'
                            )
                          "
                        />
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </form>
      </div>
    </div>
    <div class="flex flex-row pt-4 px-4 md:px-16 bg-secondary/40">
      <Carousel class="w-full max-w-5/6" :opts="{ align: 'start' }">
        <CarouselContent>
          <CarouselItem>
            <div
              v-for="product in productsByCategory[category]"
              :key="product.id"
              class="flex flex-row px-4 md:px-16 pt-4 pb-8 justify-center"
            >
              <div class="max-w-[75rem] justify-center items-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div
                    class="group flex flex-col bg-background border border-primary/50 shadow-sm rounded-b-xl"
                  >
                    <div
                      class="h-full flex flex-col border-b-2 border-primary/60 justify-center items-center max-h-[22rem]"
                    >
                      <router-link :to="`/product/${product.id}`">
                        <img
                          :src="product.coverPhoto"
                          class="hover:opacity-70 max-h-[20rem] md:max-h-[22rem]"
                        />
                      </router-link>
                    </div>
                    <div class="p-4 md:p-6">
                      <div class="flex flex-row">
                        <span
                          class="block pb-2 pt-1 text-xs md:text-sm font-semibold uppercase text-secondary-foreground/30"
                        >
                          {{ category }}
                        </span>
                        <span
                          class="block pb-2 pl-2 pt-1 text-xs md:text-sm font-semibold uppercase text-primary"
                        >
                          {{ product.price }}
                        </span>
                      </div>
                      <h3
                        class="text-xl md:text-2xl font-semibold text-secondary-foreground text-wrap"
                      >
                        {{ product.name }}
                      </h3>
                      <p
                        class="mt-3 text-secondary-foreground/30 text-xs md:text-sm whitespace-wrap text-justify truncate"
                      >
                        {{ product.description }}
                      </p>
                    </div>
                    <div
                      class="mt-auto flex border-t border-secondary divide-x divide-secondary"
                    >
                      <router-link
                        :to="`/product/${product.id}`"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm md:text-base font-medium rounded-es-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        View Product
                      </router-link>
                      <Sheet>
                        <SheetTrigger as-child>
                          <button
                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm md:text-base font-medium rounded-ee-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Order Now
                          </button>
                        </SheetTrigger>
                        <Cart :productId="product.id" />
                      </Sheet>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="ml-6 md:ml-8 opacity-40 hover:opacity-100" />
        <CarouselNext class="mr-6 md:mr-8 opacity-40 hover:opacity-100" />
      </Carousel>
    </div>
  </div>

  <div class="pb-12"></div>
</template>

<script setup lang="ts">
import { ref, computed, provide } from "vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/carousel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Shirt } from "lucide-vue-next";
import { Button } from "../../../ui/button";
import { Check, ChevronsUpDown } from "lucide-vue-next";
import { cn } from "../../../../lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { setup as setupProductController } from "../controllers/productsController.ts";
import Cart from "../../../feature/user/userOrder/views/AddToCartView.vue";

const open = ref(false);
const value = ref<string>("");

const { products } = setupProductController();

const getProductById = (id: string) => {
  return products.value.find((product) => product.id === id);
};

const publishedProducts = computed(() => {
  return products.value.filter((product) => product.isPublished === true);
});

provide("getProductById", getProductById);

const categories = [
  "T-Shirt",
  "Polo-Shirt",
  "Lace",
  "Hoodie",
  "Stickers",
  "Other",
];

const productsByCategory = computed(() => {
  return categories.reduce(
    (acc: { [key: string]: typeof products.value }, category) => {
      acc[category] = publishedProducts.value.filter(
        (product) => product.category === category
      );
      return acc;
    },
    {}
  );
});

const frameworks = [
  { value: "T-Shirt", label: "T-Shirt" },
  { value: "Polo-Shirt", label: "Polo-Shirt" },
  { value: "Lace", label: "Lace" },
  { value: "Hoodie", label: "Hoodie" },
  { value: "Stickers", label: "Stickers" },
  { value: "", label: "All" },
];
</script>