/*
 ============================================================================
 Name        : starG.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int i,j;
	setbuf(stdout,NULL);

	for(i=1;i<=5;i++){
	for(j=1;j<=5;j++){
		if(j<=i){
			printf("* ");
		}
		else{
			printf(" ");
		}

	}
		printf("\n");
	}

	return EXIT_SUCCESS;
}
