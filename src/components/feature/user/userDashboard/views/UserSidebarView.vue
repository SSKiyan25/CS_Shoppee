<template>
  <aside
    v-show="isSidebarVisible"
    :class="{
      'fixed top-0 left-0 z-30 w-64 h-full pt-20 transition-transform bg-secondary border-accent border-r sm:translate-x-0': true,
      '-translate-x-full': !isSidebarVisible,
    }"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-secondary border-accent">
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            to="/dashboard"
            class="flex items-center p-2 text-secondary-foreground rounded-lg hover:bg-primary/10 group"
            :class="{
              'text-primary-foreground bg-primary/80':
                $route.path === '/dashboard',
            }"
          >
            <svg
              class="w-5 h-5 text-secondary-foreground transition duration-75 group-hover:text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span class="ms-3">Profile</span>
          </router-link>
        </li>

        <li>
          <router-link
            to="/dashboard"
            class="flex items-center p-2 text-secondary-foreground rounded-lg hover:bg-primary/10 group"
            :class="{
              'text-primary-foreground bg-primary/80': $route.path === '/',
            }"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-secondary-foreground transition duration-75 group-hover:text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-primary-foreground bg-primary rounded-full"
              >3</span
            >
          </router-link>
        </li>
        <li>
          <router-link
            to="/dashboard/orders"
            class="flex items-center p-2 text-secondary-foreground rounded-lg hover:bg-primary/10 group"
            :class="{
              'text-primary-foreground bg-primary/80':
                $route.path === '/dashboard/orders',
            }"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-secondary-foreground transition duration-75 group-hover:text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Orders</span>
          </router-link>
        </li>
        <li>
          <hr class="my-4 border-t border-secondary-foreground opacity-20" />
        </li>
        <li>
          <a
            class="flex p-2 items-center text-secondary-foreground hover:bg-primary/10 rounded-lg group cursor-pointer"
          >
            <span
              class="material-symbols-outlined flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-primary"
              aria-hiden="true"
            >
              logout
            </span>
            <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, inject } from "vue";
import { initFlowbite } from "flowbite";

const isSidebarVisible = inject("isSidebarVisible");

onMounted(() => {
  initFlowbite();
});
</script>
