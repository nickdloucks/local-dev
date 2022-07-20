class CSVObject {
    public rows: string[]
    headers: string[]

    constructor(data: string){
        this.rows = data.split('/n');
        this.rows.forEach((row: string) =>{
            row.split(','); // now a 2-D array of data points ?
        })
        this.headers = this.rows[0].split(',');
    }

    public toJSON = function(data: string[] = this.rows){
        // loop thru headers and create the fields.
        let jsonObj = {}; 
        data.forEach(row => {
            // jsonObj['key'] = value
// Add to list of rows so they can be indexed too
        });

        // then assign all values to the correct headers and populate a matrix of row objects
    }
}
