/*
 ============================================================================
 Name        : star.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int i,j,n;
	setbuf(stdout,NULL);
	printf("Enter the limit");
	scanf("%d",&n);
	for(i=n;i>=1;i--){
//		for(j=limit;j>=i;j--){
			printf("* ");
//		}
//		printf("\n");
	}
	return EXIT_SUCCESS;
}
