/*
 ============================================================================
 Name        : input.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int anum;
	setbuf(stdout,NULL);
	puts("Enter the number");
	scanf("%d", &anum);
	printf("You have entered %d", anum);

	return EXIT_SUCCESS;
}
