#include<stdio.h>
#include<string.h>

int main(){
   char source[] = "First string";
   char destination[20];

    strncpy(destination,source,sizeof(destination) -1);
    destination[sizeof(destination) - 1] = '\0';
    printf("%s\n",destination);
    return 0;
}


