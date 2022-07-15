class CSVObject {
    rows: string[]
    headers: string[]

    constructor(data: string){
        this.rows = data.split('/n');
        this.headers = this.rows[0].split(',');
    }

    public toJSON = function(){
        // loop thru headers and create the fields.
        // then assign all values to the correct headers and populate a matrix of row objects
    }
}