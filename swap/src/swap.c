/*
 ============================================================================
 Name        : swap.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int numa=10,numb=20,temp;
	setbuf(stdout, NULL);


	temp = numa;
	numa = numb;
	numb = temp;

	printf("numa %d, numb %d",numa,numb);

	return EXIT_SUCCESS;
}
