package hello;

public class hello {

	public static void main(String[] args) {
//		System.out.println("Hello World");
		
		int i, j;  
		
		for(i=1; i<=5; i++)   {
//			char a='A';
			for(j=1; j<=5; j++)	{
				if(i==1||j==1||i==5||j==5)
				System.out.print("$");
				
				else
					System.out.print("");					
//				a++;
					}
			System.out.println();   
			}   
		
		
	}
}
