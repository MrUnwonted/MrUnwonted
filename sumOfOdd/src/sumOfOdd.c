/*
 ============================================================================
 Name        : sumOfOdd.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int num,result=0,i;
	setbuf(stdout,NULL);
	printf("Enter the number:");
	scanf("%d",&num);
	for(i=1;i<num;i+=2){
		result+=i;
	}
	printf("Result is:%d", result);
	return EXIT_SUCCESS;
}
