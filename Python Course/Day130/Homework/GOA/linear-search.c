#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1; // Not found
}

int main() {
    int numbers[] = {10, 5, 20, 8, 15};
    int target = 8;
    int n = sizeof(numbers) / sizeof(numbers[0]);
    int result = linearSearch(numbers, n, target);
    if (result != -1) {
        printf("Found value in place %d.\n", result);
    } else {
        printf("Value not found.\n");
    }
    return 0;
}
