import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        StudentManager manager = new StudentManager();

        while (true) {
            System.out.println("\n===== STUDENT MANAGEMENT SYSTEM =====");
            System.out.println("1. Add Student");
            System.out.println("2. View Students");
            System.out.println("3. Search Student");
            System.out.println("4. Update Student");
            System.out.println("5. Delete Student");
            System.out.println("6. Exit");
            System.out.print("Enter choice: ");

            int choice = input.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter ID: ");
                    int id = input.nextInt();
                    input.nextLine();

                    System.out.print("Enter Name: ");
                    String name = input.nextLine();

                    System.out.print("Enter Age: ");
                    int age = input.nextInt();
                    input.nextLine();

                    System.out.print("Enter Course: ");
                    String course = input.nextLine();

                    manager.addStudent(new Student(id, name, age, course));
                    break;

                case 2:
                    manager.viewStudents();
                    break;

                case 3:
                    System.out.print("Enter ID: ");
                    int searchId = input.nextInt();

                    Student found = manager.searchStudent(searchId);
                    if (found != null) {
                        found.display();
                    } else {
                        System.out.println("Student not found.");
                    }
                    break;

                case 4:
                    System.out.print("Enter ID to update: ");
                    int updateId = input.nextInt();
                    input.nextLine();

                    System.out.print("Enter new Name: ");
                    String newName = input.nextLine();

                    System.out.print("Enter new Age: ");
                    int newAge = input.nextInt();
                    input.nextLine();

                    System.out.print("Enter new Course: ");
                    String newCourse = input.nextLine();

                    manager.updateStudent(updateId, newName, newAge, newCourse);
                    break;

                case 5:
                    System.out.print("Enter ID to delete: ");
                    int deleteId = input.nextInt();
                    manager.deleteStudent(deleteId);
                    break;

                case 6:
                    System.out.println("Goodbye!");
                    return;

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}