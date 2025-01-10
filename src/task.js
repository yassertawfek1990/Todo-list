export default class Task{
    constructor(title,category,description,date,done = false){
        this.title = title
        this.category = category
        this.description = description
        this.date = date
        this.done = done
    }
}
