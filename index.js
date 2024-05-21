const minPlanesToReachLastAirport = (airports) => {
    let N = airports.length; // total fuels
    if (N === 0 || airports[0] === 0) { // handling condition where its not possible to go to atleast one airport
        return -1;
    }

    let planes = 0; // no of planes needed to reach the last airport
    let i = 0; // stores the current airport
    while (i < N) {
        planes += 1;
        let reach = i + airports[i]; // reach stores the farthest airport
        if (reach >= N - 1) { // this means that its possible to reach the last airport, so returning planes
            return planes;
        }

        let maxReach = i;
        //  Finding the airport within the reach that can fly the farthest and setting max_reach to its index
        for (let j = i + 1; j <= reach; j++) {
            if (j + airports[j] > maxReach + airports[maxReach]) {
                maxReach = j;
            }
        }

        if (i === maxReach) { // we can't move forward if condition is true
            return -1;
        }

        i = maxReach;
    }

    return planes;
}
