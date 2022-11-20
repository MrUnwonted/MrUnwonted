/*
 ============================================================================
 Name        : multiArray.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int i,j,a[10][10];
	setbuf(stdout,NULL);
	printf("Enter the values:");
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			scanf("%d",&a[i][j]);
		}
	}
	printf("the values are\n");
	for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				printf(" %d ",a[i][j]);
			}
			printf("\n");
		}

	return EXIT_SUCCESS;
}
