/*
 ============================================================================
 Name        : pattern1.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int i,j,n=1;
	setbuf(stdout,NULL);
	for(i=5;i>=n;i--){
		for(j=5;j>=i;j--){
			printf("%d",1);
		}
		printf("\n");
	}

	return EXIT_SUCCESS;
}
