<template>
  <div>
    <category-content>
      <category-header :to="{ name: 'MyComment'}">
        <div slot="title">
          <span>我的評論</span>
        </div>
      </category-header>
    </category-content>
  </div>
</template>

<script>
import categoryContent from '@/components/category/content'
import categoryHeader from '@/components/category/header'
export default {
  components: {
    categoryHeader,
    categoryContent
  }
}
</script>

<style>

</style>