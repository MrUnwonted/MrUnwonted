/*
 ============================================================================
 Name        : swapArray.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int i,n,arr1[10],arr2[10],temp[10];
	setbuf(stdout,NULL);
	printf("Enter the limit:");
	scanf("%d",&n);
	printf("Enter the values of 1st array:");
	for(i=0;i<n;i++){
		scanf("%d",&arr1[i]);
	}
	printf("Enter the values of 2nd array:");
		for(i=0;i<n;i++){
			scanf("%d",&arr2[i]);
		}

		printf("Before swapping:\n");
		for(i=0;i<n;i++){
			printf(" %d ",arr1[i]);
		}
		printf("\n");
		for(i=0;i<n;i++){
			printf(" %d ",arr2[i]);
				}

		printf("\nArray after swapping:\n");
		for(i=0;i<n;i++){
			temp[i]=arr1[i];
			arr1[i]=arr2[i];
			arr2[i]=temp[i];
		}
		for(i=0;i<n;i++){
				printf(" %d ",arr1[i]);
			}
			printf("\n");
			for(i=0;i<n;i++){
				printf(" %d ",arr2[i]);
					}

	return EXIT_SUCCESS;
}
