import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        //Declare variables
        double balance = 100;
        boolean isRunning = true;
        int choice;

        // Display menu

        while (isRunning) {
        System.out.println("##############");
        System.out.println("BANKING SYSTEM");
        System.out.println("##############");
        System.out.println("1. Show Balance");
        System.out.println("2. Deposit");
        System.out.println("3. Withdraw");
        System.out.println("4. Exit");
        System.out.println("##############");

        System.out.println("Enter your choice(1-4): ");
        choice = scanner.nextInt();

        // Get and process user choice

        switch (choice) {
            case 1 -> showBalance(balance);
            case 2 -> balance += deposit(scanner);
            case 3 -> balance -= withdraw(balance, scanner);
            case 4 -> isRunning = false;
            default -> System.out.println("Invalid choice");
        }
        }  
        scanner.close();      
    }  

    static void showBalance(double balance) {
        System.out.printf("Your balance is: $%.2f\n", balance);
    }

    static double deposit(Scanner scanner) {
        System.out.println("Enter amount to deposit: ");
        double deposit = scanner.nextDouble();
        if(deposit >= 0) {
            return deposit;
        }
        else {
            System.out.println("Invalid amount");
            return 0;
        }
    }

    static double withdraw(double balance, Scanner scanner) {
        System.out.println("Enter amount to withdraw: ");
        double withdraw = scanner.nextDouble();
        if(withdraw < 0) {
            System.out.println("Invalid amount");
            return 0;
        }else{
            if(withdraw > balance) {
                System.out.println("Insufficient funds");
                return 0;
            }
            else {
                return withdraw;
            }
        }
    }
}
