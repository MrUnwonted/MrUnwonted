/*
 ============================================================================
 Name        : starG6.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int i,j,k;
	setbuf(stdout,NULL);
	for(i=1;i<=5;i++){
		k=1;
		for(j=1;j<=9;j++){
			if(j>=6-i && j<=4+i &&k){
				printf("*");
				k=0;
			}
			else{
				printf(" ");
				k=1;
			}
		}printf("\n");
	}
	return EXIT_SUCCESS;
}
