<template>
  <main 
    flex="~ col"
    h-screen text-gray-700 dark:text-gray-200 
    class="bg-[url(https://onedrive-vercel-index-git-main-snowords.vercel.app/api/raw/?path=/Muzz/bg.jpg)] dark:bg-[url(https://onedrive-vercel-index-git-main-snowords.vercel.app/api/raw/?path=/Muzz/bg-dark.jpg)]  bg-no-repeat bg-cover bg-center"
  >
    <div flex-grow >
      <RouterView />
    </div>
    <Footer flex-grow-0 text-center mb-6/>
  </main>
</template>
