/*
 ============================================================================
 Name        : arrSort.c
 Author      : 
 Version     :
 Copyright   : Your copyright notice
 Description : Hello World in C, Ansi-style
 ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

int main(void) {

	int i,j,temp,a[20];
	setbuf(stdout,NULL);
	printf("Enter the values:");
	for(i=0;i<5;i++){
		scanf("%d",&a[i]);
	}
	printf("The sorted array is:");
	for(i=0;i<5;i++){
	for(j=i+1;j<5;j++){
		if(a[i]<a[j]){
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
//			printf("I=%d, J=%d",i,j);
			}

		}/*printf("%d ",a[i]);*/
	}
	printf("the sorted array:");
	for(i=0;i<5;i++){
		printf("%d",a[i]);
	}
	return EXIT_SUCCESS;
}
