// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let distance = someValue - 42
    if (distance > 0)
    return distance
else (distance < 0)
    return distance * -1
}

distanceFromHqInBlocks

function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    let block = 264
    let distance = someValue - 42
    let blockDistance = distance * block
        if (blockDistance > 0)
            return blockDistance
        else (blockDistance < 0)
            return blockDistance * -1
}

distanceFromHqInFeet

function distanceTravelledInFeet(start, destination){
    let block = 264
    let totalBlocks = destination - start
    let totalDistance = totalBlocks * block
        if (totalDistance > 0)
            return totalDistance
        else return totalDistance * -1
}

function calculatesFarePrice(start, destination){
        let totalDistance = distanceTravelledInFeet(start, destination)
        let message = 'cannot travel that far'
        if (totalDistance <= 400){
            return 0
        }
        if (totalDistance <= 2000){
            return (totalDistance -400) * .02
        }
        else if (totalDistance > 2500){
            return message
        }
        else if (totalDistance > 2000){
            return 25
        }
}
