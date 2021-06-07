

// Function to check if shop is working or not
function proveriDaLiJeOtvoreno(name, link) {
    let xml = new XMLHttpRequest();
    xml.open('GET', link, true);
    xml.responseType = 'document';

    xml.onload = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            response1 = xml.responseXML.querySelectorAll('.JjSWRd span span span')[0].innerText;
            // do a greyscale on those who are closed
            if (response1 == 'Затворено') {
                $('#' + name).css("filter", "grayscale(100%)");
            }
        }
    };
    xml.send();
}

let radnje = [{
    name: 'PizzaShop',
    link: 'https://www.google.com/search?q=pizza+shop+pancevo&sxsrf=ALeKk03-9CnNLhQTETR5Jgp0OKlnbsfZEg%3A1621417860672&ei=hN-kYNjNKMSZsAfI96aoBg&oq=pizza+shop+pancevo&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEMcBEK8BEMsBOgcIIxCwAxAnOgcIABBHELADOgQIIxAnOggIABDHARCvAToCCAA6BQgAEMsBOggIABDJAxDLAToHCAAQChDLAToGCAAQFhAeOgkIABDJAxAWEB46CAgAEBYQChAeUNsUWJkcYJkdaAFwAngAgAH8AYgBmQqSAQUwLjYuMpgBAKABAaoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwjYn_icvNXwAhXEDOwKHci7CWUQ4dUDCA4&uact=5'
    , type: 'pizza'
}, {
    name: 'BadenBaden',
    link: 'https://www.google.com/search?q=baden+baden+pancevo&sxsrf=ALeKk00RaNZQ8kfoU3WOK2I5vq8hc2Qi5w%3A1621418948173&ei=xOOkYNaKCsSzkwXTxo7oBg&oq=baden+baden&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCAAQxwEQrwEQQzICCC4yAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECCMQJzoICAAQsQMQgwE6BQgAELEDOgQIABBDOgQILhBDOgcILhCxAxBDOg4IABCxAxCDARDHARCvAToFCC4QsQM6BQguEMsBUIKhAVjErAFgtLMBaABwAngAgAGrAYgBnQ2SAQQwLjEymAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz'
    , type: 'pizza'
}, {
    name: 'PaKrilca',
    link: 'https://www.google.com/search?q=pa+krilca&oq=pa+krilca&aqs=chrome.0.69i59l2j69i60.2224j0j7&sourceid=chrome&ie=UTF-8'
    , type: 'burger'
}, {
    name: 'HaloLeskovac',
    link: 'https://www.google.com/search?q=halo+leskovac&oq=halo+lesko&aqs=chrome.0.69i59j69i57j0i402j0l7.1775j0j7&sourceid=chrome&ie=UTF-8'
    , type: 'burger'
},
{
    name: 'SoulFood',
    link: 'https://www.google.com/search?q=soul+food+pancevo&oq=soul+food&aqs=chrome.0.0j69i57j0l8.1903j0j7&sourceid=chrome&ie=UTF-8',
    type: 'pasta'
}
];

// Loop through all shops
for (i = 0; i < radnje.length; i++) {
    proveriDaLiJeOtvoreno(radnje[i].name, radnje[i].link)
};

function filterF(type) {
    if ($('#all')[0].checked) {
        $('.box').show()
    }
    else if ($('#' + type)[0].checked) {
        radnje.filter(function (e) {
            if (e.type == type) {
                $('#' + e.name).show()
            } else {
                $('#' + e.name).hide()
            }

        })
    }
};


$('.pretraga').on('click', function () {
    for (i = 0; i < radnje.length; i++) {
        filterF(radnje[i].type);
    }
});
