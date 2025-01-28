// 11.1
#include <stdio.h>
#include <math.h>

double calculate_sequence(int formula, int n) {
    switch (formula) {
        case 1: return 3 + 2 * n;
        case 2: return pow(-1, n);
        case 3: return pow(2, n-1);
        case 4: return pow(2, -n);
        case 5: return 8 - pow(n, 2);
        case 6: return 2 * pow(n, 2) - n + 3;
        case 7: return (double)(n + 2) / n;
        case 8: return (double)1/n;
        case 9: return (1+pow(-1, n))/2;
        case 10: return (1+pow(-1, n))/n;
        default: return 0;
    }
}

void print_first_six(int formula) {
    double terms[6];
    for (int i = 0; i < 6; i++) {
        terms[i] = calculate_sequence(formula, i + 1);
    }
    printf("Sequence %d: [", formula);
    for (int i = 0; i < 6; i++) {
        printf("%f", terms[i]);
        if (i < 5) {
            printf(", ");
        }
    }
    printf("]\n");
}

int main() {
    for (int i = 1; i < 11; i++) {
        print_first_six(i);
    }
    return 0;
}
