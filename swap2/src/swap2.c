/*
 ============================================================================
 Name        : swap2.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int num1=10,num2=20;
	num1= num1+num2;
	num2= num1-num2;
	num1= num1-num2;

	printf("num1: %d, num2: %d",num1,num2);

	return EXIT_SUCCESS;
}
