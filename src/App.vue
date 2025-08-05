<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/detail">Detail</RouterLink>|
    <RouterLink to="/todo">ToDo</RouterLink>
  </nav>

  <RouterView />
</template>
