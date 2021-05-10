<template>
  <Layout class-prefix="layout">
    {{ record }}
    <!-- <NumberPad :value="record.amount" @update:value="record.amount=$event"/>
    <Types :value="record.type" @update:value="record.type=$event"/> -->
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: { NumberPad, Types, Notes, Tags },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = [];
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped></style>
