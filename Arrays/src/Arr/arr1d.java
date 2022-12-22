package Arr;

//import javax.swing.Spring;

class student{
	int rollno;
	String name;
}
public class arr1d {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		student s1 = new student();
		student s2 = new student();
		student s3 = new student();
		student s4 = new student();
		
		int a=s1.rollno=1;
		s1.name="arj";
		
		 int b= s2.rollno=2;
		s2.name="aj";
					int c=s3.rollno=3;
		s3.name="ar";
				int d=s4.rollno=4;
		s4.name="rj";
		
//		System.out.println(s2);
		
		
//		 int arr1[]= {a,b,c,d};
		
		student arr1[] = {s1,s2,s3,s4};
		
//		for(int i=0;i<arr1.length;i++)
			System.out.println(arr1[1]);
		
//		for(int i=0;i<arr1.length;i++)
//			System.out.println(arr1[i]);
	}

}
