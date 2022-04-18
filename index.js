const soap = require("soap")

const url = "https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL";
let args = {
    "TCKimlikNo": "12345678901",
    "Ad": "BORA",
    "Soyad": "FIRLANGEÇ",
    "DogumYili": "1995"
}
soap.createClient(url, (err, client) => {
    client.TCKimlikNoDogrula(args, (err, result) => {
        console.log(result);
    })
})