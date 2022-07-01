<script setup lang="ts">
import request from '@/utils/request'
const getList = async () => {
  const res =await request.get(`/home/index`)
  console.log(res)
}

getList()

</script>


<template>
  <div>
    app组件asd as 
  </div>
</template>