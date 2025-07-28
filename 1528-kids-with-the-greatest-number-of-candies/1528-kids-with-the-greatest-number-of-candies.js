/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let results = []
    let highest = 0

    candies.forEach(c => {
        if (c > highest){
            highest = c
        }
    } )

    candies.forEach(c => {
        if(c + extraCandies >= highest) {
            results.push(true)
        }else{
            results.push(false)
        }
    })
    
    return results
};