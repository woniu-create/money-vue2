const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListmodel = {
    data: Tag[]
    fetch: ()=>Tag[]
    create:(name:string) => 'susscess' | 'duplicated'
    update: (id: string,name: string)=> 'susscess' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
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
    update(id,name){
        const idList = this.data.map(item => item.id);
        if(idList.indexOf(id) >= 0){
            const names = this.data.map(item => item.name);
            if(names.indexOf(name) >= 0){
                return 'duplicated'
            }else{
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name
                this.save();
                return 'susscess'
            }
        }else {
            return 'not found';
        }
    },
    remove(id: string){
     let index = -1
     for(let i=0;i<this.data.length;i++){
         if(this.data[i].id === id){
             index = i;
             break;
         }
     }
     this.data.splice(index,1);
     this.save();
     return true
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default tagListmodel;