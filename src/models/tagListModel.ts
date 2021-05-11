const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListmodel = {
    data: Tag[]
    fetch: ()=>Tag[]
    create:(name:string) => 'susscess' | 'duplicated'
    save: () => void
}
const tagListmodel: TagListmodel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data
    },
    create(name) {
    // this.data = [{id:'1', name:'1'}, {id:'2', name:'2'}]
     const names = this.data.map(item => item.name);
     if(names.indexOf(name) >= 0) {return 'duplicated'}
     this.data.push({id: name, name: name});
     this.save();
     return 'susscess'
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default tagListmodel;