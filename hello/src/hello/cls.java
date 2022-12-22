package hello;

 class outer{
	int a;
	void show(int a) {
		System.out.println("Outer class called"+" "+a);
	}
	outer(int b){
		System.out.println("Outer constructor called"+" "+a);
	}
	class inner extends outer{
		void display() {
			super.show(10);
			System.out.println("Inner class called");
		}
	}
}

public class cls{
	
	public static void main(String[] args) {
		
		outer ob1 = new outer(11);
		outer.inner ob2 = ob1.new inner();
//		ob1.show();
		ob2.display();
		
		
	}
}
