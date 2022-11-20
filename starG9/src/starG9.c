/*
 ============================================================================
 Name        : starG9.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int i,j,k=0;
		setbuf(stdout,NULL);

		for(i=1;i<=7;i++){
			i<=4?k++:k--;
		for(j=1;j<=7;j++){
			if(j>=5-k && j<=3+k){
				printf("*");
			}
			else{
				printf(" ");
			}

		}
			printf("\n");
		}
	return EXIT_SUCCESS;
}
