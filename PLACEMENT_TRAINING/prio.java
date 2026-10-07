import java.util.PriorityQueue;

public class prio{
    public static void main(String[] args) {

        PriorityQueue<Integer> pq = new PriorityQueue<>();

        pq.add(30);
        pq.add(10);
        pq.add(20);
        pq.add(5);

        System.out.println(pq);
        
        System.out.println("Removed: " + pq.poll());
        System.out.println("Top: " + pq.peek());
    }
}