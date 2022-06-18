let databaseconnection = require('../database/index');

async function CaseData(numcase) {
    
    switch (numcase) {
        case 1:
            
            break;
        case 1:
            
            break;
        case 3:
            break;

        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        default:
            break;
    }

}

async function paginationfunction(falsedata, realdata, numpage) {
    
    for (let index = 0; index < numpage; index++) {
        await realdata.push(falsedata[index])
    }
    return realdata;

}

async function QueryUser(query, numpage) {
    try {
        let QueryRequest = await databaseconnection();
        let ResultQuery = await QueryRequest.request().query(query);
        let resuldata = [];
        let datasend = await paginationfunction(ResultQuery.recordset, resuldata, numpage);
        debugger;
        return datasend   
    } catch (error) {
        return error
    }
}


module.exports = {
    QueryUser:QueryUser
}