export class Anime{
    constructor(id=0,title="",description="",thumbnail=""){
        this.id=id
        this.title=title
        this.description=description
        this.thumbnail=thumbnail
    }

    isItEmpty = ()=>{
        return this.title==="" || this.description==="" || this.thumbnail==="" 
    }
}