type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number // 数据类型 object | string
    createdAt?: Date  // 类 / 构造函数
}
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

interface Window {
    tagList: Tag[];
    createTag: (name: string) => void
}