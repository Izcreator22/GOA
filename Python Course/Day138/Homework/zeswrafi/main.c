#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    register int i = 0;
    for ( i = 0; i < n; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1; // Not found
}


int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 23;
    int result = linearSearch(arr, n, key);
    if(result == -1){
        printf("The item was not found!\n");
    }
    else{
        printf("The item was found at index %d\n", result);
    }

    return 0;
}
