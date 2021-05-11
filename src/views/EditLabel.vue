<template>
    <Layout>
        编辑标签
    </Layout>
</template>
<script lang="ts">
import tagListmodel from '@/models/tagListModel';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class EditLabel extends Vue {
  created() {
    //   console.log(this.$route.params);
    const id = this.$route.params.id;
    tagListmodel.fetch();
    const tags=tagListmodel.data;
    const tag = tags.filter(t=>t.id===id)[0]
    if(tag){
        console.log(tag);
    }else{
        this.$router.replace('/404')
    }
      
  }  
}
</script>
<style lang="scss" scoped>
    
</style>