/*
 ============================================================================
 Name        : array.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int i,n,a[100],b[100];
	setbuf(stdout,NULL);
	printf("Enter the limit of array: \n");
	scanf("%d",&n);
	printf("Enter the values of 1st: \n");
	for(i=0;i<n;i++){
		scanf("%d",&a[i]);
	}

	printf("Enter the values of 2nd: \n");
		for(i=0;i<n;i++){
			scanf("%d",&b[i]);
		}
	printf("The values are: \n");
	for(i=0;i<n;i++){
			printf("%d\t",a[i]);
		}
	printf(",");
	for(i=0;i<n;i++){
				printf("%d\t",b[i]);
			}
	return EXIT_SUCCESS;
}
