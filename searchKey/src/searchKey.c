/*
 ============================================================================
 Name        : searchKey.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int arr[50];
	int i,sk,flag=0;
	setbuf(stdout,NULL);
	printf("Enter the values:");
	for(i=0;i<5;i++){
		scanf("%d",&arr[i]);
	}
	printf("Enter the value to search: ");
	scanf("%d",&sk);
	for(i=0;i<5;i++){
		if(sk==arr[i]){
			flag=1;
			break;
		}
	}
	if(flag==1){
		printf("Item found at position - %d", i+1);
	}
	else{
		printf("Item not found");
	}
	return EXIT_SUCCESS;
}
