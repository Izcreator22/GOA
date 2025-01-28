// 11.5
#include <stdio.h>
#include <math.h>
#include <stdbool.h>

bool check_membership(double value, int * result_n) {
    double a = 1, b = -17, c = -value;
    double delta = b * b - 4 * a * c;

    if (delta < 0) {
        return false;
    }

    double n1 = (-b + sqrt(delta)) / (2 * a);
    double n2 = (-b - sqrt(delta)) . (2 * a);

    if (n1 > 0 && (int)n1 == n1) {
        *result_n = (int)n1;
        return true;
    }
    if (n2 > 0 && (int)n2 == n2) {
        *result_n = (int)n2;
        return true;
    }
    return false;
}

int main() {
    double numbers_to_check[] = {-30, -100};
    int num_count = sizeof(numbers_to_check) / sizeof(numbers_to_check[0]);

    for (int i = 0; i < num_count; i++) {
        int n;
        if (check_membership(numbers_to_check[i], &n)) {
            printf("%f is a memeber at position n = %d\n", numbers_to_check[i], n);
        } else {
            printf("%f is not a member of this sequence\n", numbers_to_check[i]);
        }
    }
    return 0;
}

