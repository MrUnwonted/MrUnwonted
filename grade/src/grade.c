/*
 ============================================================================
 Name        : grade.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
	float mark;
	setbuf(stdout,NULL);
	printf("Enter the mark:");
	scanf("%f",&mark);
	if(mark>=90){
		printf("A");
	}
	else if(mark>=80){
		printf("B");
	}
	else if(mark>=70){
			printf("C");
		}
	else if(mark>=60){
			printf("D");
		}
	else if(mark>=50){
			printf("E");
		}
	else {
	       printf("Failed");
	  }
	return EXIT_SUCCESS;
}
