let cities=['London', 'New York', 'Paris', 'Tokyo', 'aaa','bbbbbbbbbbbbbbbb'];

const cities_sorted=optimizeRoute(cities);
console.log(cities_sorted);


function optimizeRoute(cities)
{
    const sorted= cities.sort((a,b)=>a.length-b.length);   
    return sorted;
}
