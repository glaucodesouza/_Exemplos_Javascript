// In this case, API receives the format of:
// there is an myArray with records.
// data: {}
// So we need to put data and myArray in the same JSON:
// JSON.stringify({ data: dadosFinaisTab })
async function converterCsvNoCpi() {
    try {
        console.log(`Send records to API`);
        let arquivoCsvCPI = await destination.send({
            method: 'POST',
            path: '/Convert_to_CSV',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ data: dadosFinaisTab })
        })
        console.log(`Records has been sent`);
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
