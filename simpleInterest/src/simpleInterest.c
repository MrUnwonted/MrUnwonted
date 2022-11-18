/*
 ============================================================================
 Name        : simpleInterest.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int P;
	float R,n,SI;
	setbuf(stdout,NULL);
	printf("Enter the principle, rate and no of years");
	scanf("%d %f %f",&P,&R,&n);
	SI = (P*R*n)/100;
	printf("The Simple interest is %f",SI);
	return EXIT_SUCCESS;
}
