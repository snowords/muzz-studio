<template>
  <main 
    flex="~ col"
    px-4 py-10 h-screen text-center text-gray-700 dark:text-gray-200
  >
    <div flex-grow >
      <RouterView />
    </div>
    <Footer flex-grow-0 />
  </main>
</template>
