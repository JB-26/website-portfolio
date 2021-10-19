---
title: "Coding Problems - Part 1"
date: "2021-10-19"
description: "Solving coding problems!"
image: https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80
---

![Problem solving](https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80)

This week, I decided to take a look at solving (or trying to) coding problems!

It's all well and good understanding the syntax and building applications but I wanted to challenge myself by attempting to solve some coding problems. In the first part of this series, I'll be taking a look at some problems and showing you how I solved them.

If you want to take a look at the code for each of the problems, check out the repo on [GitHub!](https://github.com/JB-26/DailyCodingProblem) The language used to solve these problems is Python.

If you solve these problems, please do share your solution!

Let's jump in with the first problem!

### Get products of all elements in an Array

_The problem_
> Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i
>
> Example: an array of 1, 2, 3, 4, 5 will return 120, 60, 40, 30, 24

Okay, shouldn't be too bad.

Here's how I solved this problem.

```
arry = [1,2,3,4,5]
# this will return 120, 60, 40, 30, 24

# function 
def productArray(arry):
    # array for calculations
    calculateArry = []
    arryLength = len(arry)
    print(f"Length of array - {arryLength}")

    for position in arry:
        print("Print integer in position")
        print(position)

        # copy the array
        arryCopy = arry.copy()

        # get the index position of element
        indexPostion = arryCopy.index(position)

        # remove the appropriate element in the array
        arryCopy.pop(indexPostion)

        # length of the copied array
        arryCopyLength = len(arryCopy)

        timesMultiplied = 1
        arryPostion = 0

        print("First calculation!")
        print(f"Value 1 - {arryCopy[arryPostion]}")
        print(f"Value 2 - {arryCopy[arryPostion + 1]}")
        newValue = arryCopy[arryPostion] * arryCopy[arryPostion + 1]

        while timesMultiplied < arryCopyLength - 1:
            print(f"Multiplying {newValue} by {arryCopy[arryPostion + 2]}")
            newValue = newValue * arryCopy[arryPostion + 2]
            timesMultiplied += 1
            arryPostion += 1
    
        # add the calculated value to a new array
        calculateArry.append(newValue)

    # return new array
    return calculateArry
    

# call function and print new array
sortedArry = productArray(arry)
print(sortedArry)
```

This might be a lot to take in so I'll break it down.

Here's how my thinking went for this:
- Copy the array to a new array and remove the element that we're using in the for loop. This prevents using the element in the loop in any calculations
- Store the length of the copied array in a new variable
- Create new variables to track the array position and the number of times multiplied
- Do a first calculation of the first two elements and store the result in a variable
- In a while loop, multiply the value by other elements in the array (and increment the times multiplied and the array position)
- Add the new value to the empty array
- After the loop has complete, return the new array!

This isn't the best way of solving it. There are _much_ better ways. But I'm glad that I was able to solve it!