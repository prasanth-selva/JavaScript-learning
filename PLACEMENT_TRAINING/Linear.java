public class Linear{
    
    public static void main(String[] args){

        int[] arr = {10,20,30,40,50,60};

        int key = 50;

        for(int i=0; i<arr.length;i++){
            if(key==arr[i]){
                System.out.println("Element found at index :" +i);
                return;
            }
        }
        
                System.out.println("Kadalea ellaiyaam");
            
        
    }
}