/*
 ============================================================================
 Name        : evenNosInArray.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int a[10];
	int i,count=0,n;
	setbuf(stdout,NULL);
	printf("Enter the limit:");
	scanf("%d",&n);
	printf("Enter the values:");
	for(i=0;i<n;i++){
		scanf("%d",&a[i]);
	}
	printf("No of even numbers in the array is:");
	for(i=0;i<n;i++){
		if(a[i]%2==0){
			count++;
		}
	}
	printf(" %d",count);


	return EXIT_SUCCESS;
}
