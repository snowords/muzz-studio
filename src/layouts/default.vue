<template>
  <main 
    flex="~ col"
    h-screen text-gray-700 dark:text-gray-200
  >
    <div flex-grow >
      <RouterView />
    </div>
    <Footer flex-grow-0 text-center mb-4/>
  </main>
</template>
