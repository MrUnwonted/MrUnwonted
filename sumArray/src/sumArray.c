/*
 ============================================================================
 Name        : sumArray.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int a[50];
	int i,sum=0;
	setbuf(stdout,NULL);
	printf("Enter the values:");
	for(i=0;i<5;i++){
		scanf("%d",&a[i]);
	}
	printf("The values are:");
	for(i=0;i<5;i++){
		printf("%d ",a[i]);
//			sum+=a[i];
	}
	for(i=0;i<5;i++){
			sum+=a[i];
			}
	printf("\nThe sum is: %d",sum);

	return EXIT_SUCCESS;
}
