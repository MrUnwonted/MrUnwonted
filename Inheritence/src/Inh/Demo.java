package Inh;

class A{
	A(){
		System.out.println("in A");
	}
	A(int i){
		System.out.println("in Int A"+i);
	}
}
class B extends A{
	B(){
		super();
		System.out.println("in B");
	}
	B(int i){
		System.out.println("in Int B"+i);
	}
}
public class Demo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		B ob = new B();
	}

}
