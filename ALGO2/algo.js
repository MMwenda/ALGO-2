function insertionSort(arr) {  
    for (let i = 1; i < arr.length; i++) {  // Start from the second element (index 1)
        let key = arr[i];  
        let j = i - 1;  

        
        while (j >= 0 && arr[j] > key) {  // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
            arr[j + 1] = arr[j];  // Move the elements to the right
            j--;  // Decrement j
        }  
        arr[j + 1] = key;  // Insert the key in its correct position
    }  
    return arr; 
}  

console.log(insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]


