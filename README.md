# minPlanesToReachLastAirport

## Overview
The `minPlanesToReachLastAirport` function calculates the minimum number of planes needed to reach the last airport in a given list of airports. Each element in the list represents the maximum number of airports you can fly to from that airport.

## Approach

1. **Initialization**:
   - `N` is initialized to the length of the `airports` array.
   - If `N` is 0 or the first element of `airports` is 0, it returns `-1` because it's impossible to reach even the first airport.

2. **Iteration**:
   - A variable `planes` is initialized to 0, representing the number of planes used.
   - The loop starts from the first airport and continues until the last airport is reached or surpassed.
   - For each airport, `planes` is incremented by 1, and the farthest airport that can be reached from the current airport is calculated.
   - If the farthest airport (`reach`) is beyond or at the last airport, it returns the number of planes used.
   - Within the reachable range, the airport that can fly the farthest is selected as the next airport.

3. **Edge Case Handling**:
   - If at any point, the maximum reachable airport (`maxReach`) is the same as the current airport (`i`), it means no progress can be made, and the function returns `-1`.

## Time Complexity

The time complexity of this function is **O(N)**, where N is the number of airports. This is because, in the worst case, each airport is visited once to determine the farthest reachable airport.

## Space Complexity

The space complexity of this function is **O(1)**, as it uses a constant amount of extra space regardless of the input size.

## Important Points

- The function ensures that the journey starts only if the initial airport allows for a move.
- It uses a greedy approach to always choose the airport that allows reaching the farthest distance.
- The function handles cases where no progress can be made, returning `-1` appropriately.

## Example

For an input `airports = [2, 3, 1, 1, 4]`, the function would return `2` as it requires a minimum of 2 planes to reach the last airport. The steps would be:
- From airport 0, you can reach airport 1 or 2.
- From airport 1 (since it allows reaching farther), you can then reach airport 4 directly, which is the last airport.

