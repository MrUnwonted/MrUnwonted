#include <stdio.h>

int main() {
int a[50];
    int i,j,n,temp;
    
    printf("Enter the limit");
    scanf("%d",&n);
    printf("Enter the values");
    for(i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
        if(a[i]>a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    }
    
    printf("Result:");
    for(i=0;i<n;i++){
    printf("%d",a[i]);}
    // for(i=0;i<n;i++)
    // printf("%d",a[1]);

    return(0);
}