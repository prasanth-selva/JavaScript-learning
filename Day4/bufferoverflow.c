#include <stdio.h>
#include <string.h>

int main() {
    char name[5];

    printf("Enter name: ");
    scanf("%s", name);

    printf("You entered: %s\n", name);

    return 0;
}