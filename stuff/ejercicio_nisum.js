/*
You are in charge of a display advertising program. Your ads are displayed
on websites all over the internet. You have some CSV input data that counts
how many times you showed an ad on each individual domain. Every line consists
of a count and a domain name. It looks like this:
*/

const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "2,en.wikipedia.org",
  "1,es.wikipedia.org",
  "1,mobile.sports"
]

function getTotalbyDomain (counts) { 
    
    for (let i=0; i < counts.length; i++) {
        var clicksAndDomain = counts[i].split(','); // ['900', 'google.com']
        let clicks = clicksAndDomain[0];
        // console.log(clicks[0]);
        
        var IndiceClicks = counts[i].split(','); // ['900', 'google.com']
        let clicksIndice = IndiceClicks[1];
        console.log(clicks, clicksIndice);
        
        // mobile.sports.yahoo.com => mobile.sports.yahoo.com , sports.yahoo.com , yahoo.com , com
    }

}

function extractDomains(domain) {
    var listado = domain.split('.');
    var resultado = [];
    for (let i=0; i< listado.length; i++) {
        resultado.push(listado.slice(i).join('.'));
    }
    return resultado;
}

// extractDomains("mobile.sports.yahoo.com")// => ['mobile.sports.yahoo.com', 'sports.yahoo.com', 'yahoo.com', 'com']

getTotalbyDomain(counts);
/*
Write a function that takes this input as a parameter and returns a data
structure containing the number of hits that were recorded on each domain
AND each domain under it. For example, an impression on "mail.yahoo.com"
counts for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added
to the left of their parent domain. So "mail" and "mail.yahoo" are not
valid domains.)
*/

// Sample output (in any order):

// getTotalsByDomain(counts)

/*
1320 com
900 google.com
410 yahoo.com
60 mail.yahoo.com
10 mobile.sports.yahoo.com
50 sports.yahoo.com
10 stackoverflow.com
3 org
3 wikipedia.org
2 en.wikipedia.org
1 es.wikipedia.org
1 mobile.sports
1 sports
*/