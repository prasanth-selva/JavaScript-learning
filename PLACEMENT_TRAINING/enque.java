class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    Node front;
    Node rear;

    Queue() {
        front = null;
        rear = null;
    }

    // Insert element
    void enqueue(int value) {
        Node newNode = new Node(value);

        if (rear == null) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }

        System.out.println(value + " inserted");
    }

    // Remove element
    void dequeue() {
        if (front == null) {
            System.out.println("Queue is empty");
            return;
        }

        System.out.println(front.data + " removed");
        front = front.next;

        if (front == null) {
            rear = null;
        }
    }

    // Display queue
    void display() {
        if (front == null) {
            System.out.println("Queue is empty");
            return;
        }

        Node temp = front;

        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }

        System.out.println();
    }
}

public class enque {
    public static void main(String[] args) {

        Queue q = new Queue();

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);

        System.out.println("Queue:");
        q.display();

        q.dequeue();

        System.out.println("After dequeue:");
        q.display();
    }
}