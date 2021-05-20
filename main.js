

// Function to check if shop is working or not
function proveriDaLiJeOtvoreno(name, link) {
    let xml = new XMLHttpRequest();
    xml.open('GET', link, true);
    xml.responseType = 'document';

    xml.onload = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            response1 = xml.responseXML.querySelectorAll('.JjSWRd span span span')[0].innerText
            response2 = xml.responseXML.querySelectorAll('.JjSWRd span span')[0].innerText
            console.log(name + " " + response2)
        }
    };
    xml.send();
}

let radnje = [{
    name: 'Pizza Shop',
    link: 'https://www.google.com/search?q=pizza+shop+pancevo&sxsrf=ALeKk03-9CnNLhQTETR5Jgp0OKlnbsfZEg%3A1621417860672&ei=hN-kYNjNKMSZsAfI96aoBg&oq=pizza+shop+pancevo&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEMcBEK8BEMsBOgcIIxCwAxAnOgcIABBHELADOgQIIxAnOggIABDHARCvAToCCAA6BQgAEMsBOggIABDJAxDLAToHCAAQChDLAToGCAAQFhAeOgkIABDJAxAWEB46CAgAEBYQChAeUNsUWJkcYJkdaAFwAngAgAH8AYgBmQqSAQUwLjYuMpgBAKABAaoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjYn_icvNXwAhXEDOwKHci7CWUQ4dUDCA4&uact=5'
}, {
    name: 'Baden Baden',
    link: 'https://www.google.com/search?q=baden+baden+pancevo&sxsrf=ALeKk00RaNZQ8kfoU3WOK2I5vq8hc2Qi5w%3A1621418948173&ei=xOOkYNaKCsSzkwXTxo7oBg&oq=baden+baden&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCAAQxwEQrwEQQzICCC4yAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECCMQJzoICAAQsQMQgwE6BQgAELEDOgQIABBDOgQILhBDOgcILhCxAxBDOg4IABCxAxCDARDHARCvAToFCC4QsQM6BQguEMsBUIKhAVjErAFgtLMBaABwAngAgAGrAYgBnQ2SAQQwLjEymAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz'
}]

// Loop through all shops
for (i = 0; i < radnje.length; i++) {
    proveriDaLiJeOtvoreno(radnje[i].name, radnje[i].link)
}