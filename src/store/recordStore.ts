// import recordListModel from "@/models/recordListModel";
import clone from '@/lib/clone';
// export default {
    // record store
//   recordList: recordListModel.fetch(),
//   createRecord: (record: RecordItem) => recordListModel.create(record),

// }
const localStorageKeyName = 'recordList';
const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.recordList;
    },
    saveRecord() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
    },
    createRecord(record: RecordItem){
       const record2: RecordItem = clone(record);
       record2.createdAt = new Date();
      this.recordList&&this.recordList.push(record2)
       this.saveRecord();
    }
}
export default recordStore