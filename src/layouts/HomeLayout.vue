<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/detail">Detail</RouterLink> |
    <RouterLink to="/todo">ToDo</RouterLink> |
    <RouterLink to="/user">User</RouterLink> 
  </nav>

   <RouterView />
   <!-- hien thi noi dung page con can cos router view -->
</template>
