const localStorageKeyName = 'tagList';
type TagListmodel = {
    data: string[]
    fetch: ()=>string[]
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
     if(this.data.indexOf(name) >= 0) {return 'duplicated'}
     this.data.push(name);
     this.save();
     return 'susscess'
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default tagListmodel;