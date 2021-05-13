<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value="type" v-on:update:value="type=$event"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value="interval" v-on:update:value="interval=$event"/>
    type: {{type}}
    <br/>
    interval: {{interval}}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList'


@Component({
   components: {Tabs}
})
export default class Statistics extends Vue{
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style scoped lang="scss">
  ::v-deep .type-tabs-item{
    background: white;
    height:48px;
    &.selected {
      background: #c4c4c4;
      &::after{
        display: none;
      }
    }
  }
</style>