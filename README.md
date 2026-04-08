# JS-Assignment



## Problem 1: Digit Gatekeeper

### Approach:
We iterate through all numbers from L to R.
For each number:
- Check if it is divisible by K
- Ensure it does not contain digit 0
- Find the sum of its digits
- Check if the sum is a prime number

If all conditions are satisfied, we increase the count.

### Time Complexity:
O(n × d) where n is range size and d is number of digits

---

## Problem 2: Roll-Seed Lock

### Approach:
We start with number N and apply transformation 3 times:
- If number is even → divide by 2 and add seed
- If odd → multiply by 3 and subtract seed

After 3 steps:
- Check if number is a 3-digit number
- Extract middle digit and compare with seed

Return YES or NO accordingly.

### Time Complexity:
O(1)

---

## Problem 3: Mirror Corridor

### Approach:
We try values of X from 0 to 100000:
- Compute N + X
- Check if it is divisible by K
- Check if it is a palindrome

The first X that satisfies both conditions is returned.
If none found, return -1.

### Time Complexity:
O(n)

---

## Problem 4: Fare Calculator

### Approach:
- Start with base fare + 7 × distance
- Add 20 if late > 15 minutes
- Add 10% of fare if distance > 10
- Adjust fare based on seed (odd/even)
- Finally, round up to nearest multiple of 5

### Time Complexity:
O(1)

---

## Problem 5: Skipping Numbers

### Approach:
We keep adding numbers from 1 onwards:
- Skip numbers divisible by (seed + 2)
- Keep adding until sum ≥ N
- Return the value of m and the sum

### Time Complexity:
O(n)

---

## Problem 6: Contest Score Judge

### Approach:
- Calculate score using formula: 3a + b - 2c
- If score is negative → make it 0
- If total attempts > 50 → subtract 10
- Decide PASS or FAIL based on final score

### Time Complexity:
O(1)
