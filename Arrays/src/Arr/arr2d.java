package Arr;

public class arr2d {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		1D array for each method
		int arr1[] = {2,4,6,7};
		for(int k: arr1) {
			System.out.print(" "+k);
		}
		
		System.out.println();
		
//		2D array for each method
		int arr[][] = {
				{1,2,3,4},
				{2,3,4},
				{5,6,7,8}
		};
		
		for(int k[]: arr) {
			for (int l: k) {
				System.out.print(" "+ l);
			}
			System.out.println();
		}
		
//		for(int i=0;i<arr.length;i++) {
//			for(int j=0;j<arr[i].length;j++) {
//			System.out.print(" "+arr[i][j]);
//			}
//			System.out.println();
//		}
		
		
		
	}

}
