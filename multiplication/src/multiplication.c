/*
 ============================================================================
 Name        : multiplication.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	int i,num,result=0;
	setbuf(stdout,NULL);
	printf("Enter a number:");
	scanf("%d",&num);
	printf("The table is:\n");
	for(i=1;i<=10;i++){
		result = i*num;
		printf("%d * %d = %d\n",num,i,result);
	}
	return EXIT_SUCCESS;
}
