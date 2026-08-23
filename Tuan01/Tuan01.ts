// 1. Create a class Person with attributes name and age. Write a method to display this information. 
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    
    display(): void {
      console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
    }
  }

//   const person1 = new Person("Nguyễn Văn A", 20);
//   person1.display();
  
  // 2. Write a class Student extending Person with an additional attribute grade. Add a method to display all info. 
  class Student extends Person {
    grade: string;
  
    constructor(name: string, age: number, grade: string) {
      super(name, age);
      this.grade = grade;
    }
  
    displayAll(): void {
      console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }
  }
  
//   const student1 = new Student("Trần Thị B", 16, "10A1");
//   student1.displayAll();
  
  // 3. Create a class Car with properties brand, model, year. Write a method to show car info. 
  class Car {
    brand: string;
    model: string;
    year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    showInfo(): void {
      console.log(`Xe: ${this.brand} ${this.model} - Năm: ${this.year}`);
    }
  }
  
//   const car1 = new Car("Toyota", "Camry", 2023);
//   car1.showInfo();
  
  // 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter. 
  class Rectangle {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
//   const rect = new Rectangle(5, 10);
//   console.log(`Diện tích: ${rect.calculateArea()}, Chu vi: ${rect.calculatePerimeter()}`);
  
  // 5. Create a class BankAccount with balance. Add methods deposit() and withdraw(). 
  class BankAccount {
    balance: number;
  
    constructor(initialBalance: number = 0) {
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Nạp ${amount} -> Số dư: ${this.balance}`);
      }
    }
  
    withdraw(amount: number): void {
      if (amount > this.balance) {
        console.log("Số dư không đủ để rút tiền!");
      } else if (amount > 0) {
        this.balance -= amount;
        console.log(`Rút ${amount} -> Số dư còn: ${this.balance}`);
      }
    }
  }
  
//   const acc = new BankAccount(1000);
//   acc.deposit(500);
//   acc.withdraw(300);
  
  // 6. Create a class Book with attributes title, author, year. 
  class Book {
    title: string;
    author: string;
    year: number;
  
    constructor(title: string, author: string, year: number) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  
//   const book = new Book("Clean Code", "Robert C. Martin", 2008);
//   console.log(`Sách: ${book.title} bởi tác giả ${book.author} (${book.year})`);
  
  // 7. Write a class User with private property name and getter/setter. 
  class User {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(newName: string) {
      if (newName.trim().length > 0) {
        this._name = newName;
      }
    }
  }
  
//   const user = new User("Toan");
//   console.log(`Getter ban đầu: ${user.name}`);
//   user.name = "Tuan";
//   console.log(`Getter sau khi set: ${user.name}`);
  
  // 8. Create a Product class with name, price. Create an array of products and filter products with price > 100. 
  class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  
  const products: Product[] = [
    new Product("Chuột", 45),
    new Product("Bàn phím cơ", 150),
    new Product("Màn hình 4K", 400),
    new Product("Lót chuột", 15)
  ];
//   const expensiveProducts = products.filter(p => p.price > 100);
//   console.log("Danh sách sản phẩm > 100:", expensiveProducts);
  
  // 9. Define an interface Animal with name and method sound(). 
  interface Animal {
    name: string;
    sound(): void;
  }
  
  class Duck implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sound(): void {
      console.log(`${this.name} kêu Quạc quạc`);
    }
  }
//   const duck = new Duck("Vịt Donald");
//   duck.sound();
  
  // 10. Create a class Account with public, private and readonly fields. 
  class Account {
    public username: string;
    private secretPin: number;
    readonly accountId: string;
  
    constructor(username: string, secretPin: number, accountId: string) {
      this.username = username;
      this.secretPin = secretPin;
      this.accountId = accountId;
    }
  
    verifyPin(inputPin: number): boolean {
      return this.secretPin === inputPin;
    }
  }
  
//   const myAccount = new Account("admin_user", 1234, "ACC-9988");
//   console.log(`D: ${myAccount.accountId}, User: ${myAccount.username}, PIN đúng: ${myAccount.verifyPin(1234)}`);
  
  // 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow(). 
  class AnimalBase {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Dog extends AnimalBase {
    bark(): void {
      console.log(`Chó ${this.name} sủa: Gâu gâu!`);
    }
  }
  
  class Cat extends AnimalBase {
    meow(): void {
      console.log(`Mèo ${this.name} kêu: Meo meo!`);
    }
  }
  
//   new Dog("Kiki").bark();
//   new Cat("Miu").meow();
  
  // 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes. 
  interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }
  
  class Bird implements Flyable {
    fly(): void {
      console.log("Chim bay.");
    }
  }
  
  class Fish implements Swimmable {
    swim(): void {
      console.log("Cá lượn");
    }
  }
  
//   new Bird().fly();
//   new Fish().swim();
  
  // 13. Create an abstract class Shape with method area(). Implement Square and Circle. 
  abstract class Shape {
    abstract area(): number;
  }
  
  class Square extends Shape {
    side: number;
    constructor(side: number) {
      super();
      this.side = side;
    }
    area(): number {
      return this.side * this.side;
    }
  }
  
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
//   console.log(`Diện tích vuông (side=4): ${new Square(4).area()}`);
//   console.log(`Diện tích tròn (r=3): ${new Circle(3).area().toFixed(2)}`);
  
  // 14. Create a base class Employee. Extend Manager and Developer with specific methods. 
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Manager extends Employee {
    assignTask(): void {
      console.log(`Quản lý ${this.name} đang giao việc cho team.`);
    }
  }
  
  class Developer extends Employee {
    writeCode(): void {
      console.log(`Lập trình viên ${this.name} đang phát triển tính năng mới.`);
    }
  }
  
//   new Manager("Sếp Toàn").assignTask();
//   new Developer("Dev Tuấn").writeCode();
  
  // 15. Create a Library class that can store Book and User objects. Add method to add books. 
  class Library {
    books: Book[] = [];
    users: User[] = [];
  
    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Đã thêm sách "${book.title}" vào thư viện.`);
    }
  
    addUser(user: User): void {
      this.users.push(user);
    }
  }
  
//   const myLib = new Library();
//   myLib.addBook(new Book("TypeScript Deep Dive", "Basarat", 2020));
//   myLib.addUser(new User("Hải Đăng"));
  
  // 16. Create a generic class Box that can store any type of value. 
 class Box<T> {
    data: T

    constructor(data: T) {
        this.data = data
    }

    getTypeData() : string {
        return `Đây là kiểu: ${typeof this.data}`
    }
 }

//  const numBox = new Box<number>(100);
//  const strBox = new Box<string>("String");

//  console.log(numBox.getTypeData)
//  console.log(numBox.getTypeData)
  
  // 17. Write a singleton Logger class that logs messages to console. 
  class Logger {
    private static instance: Logger;
    private constructor() {}
  
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    log(msg: string): void {
      console.log(`[LOGGER] ${msg}`);
    }
  }
  
//   const logger1 = Logger.getInstance();
//   const logger2 = Logger.getInstance();
//   logger1.log("Đây là log từ singleton instance");
//   console.log(`2 biến cùng 1 instance: ${logger1 === logger2}`);
  
  // 18. Create a static class Math Util with methods add(), subtract(), multiply(), divide(). 
  class MathUtil {
    static add(a: number, b: number): number { return a + b; }
    static subtract(a: number, b: number): number { return a - b; }
    static multiply(a: number, b: number): number { return a * b; }
    static divide(a: number, b: number): number {
      if (b === 0) throw new Error("Không thể chia cho 0");
      return a / b;
    }
  }
  
//   console.log(`MathUtil: 10 + 5 = ${MathUtil.add(10, 5)}, 10 / 2 = ${MathUtil.divide(10, 2)}`);
  
  // 19. Demonstrate method overriding using polymorphism with Animal and subclasses. 
  class PolyAnimalBase {
    makeSound(): void {
      console.log("Âm thanh động vật chung");
    }
  }
  
  class PolyDog extends PolyAnimalBase {
    override makeSound(): void {
      console.log("PolyDog: Gâu gâu!");
    }
  }
  
  class PolyCat extends PolyAnimalBase {
    override makeSound(): void {
      console.log("PolyCat: Meo meo!");
    }
  }
  
//   const zoo: PolyAnimalBase[] = [new PolyAnimalBase(), new PolyDog(), new PolyCat()];
//   zoo.forEach(animal => animal.makeSound());
  
  // 20. Write a Vehicle interface and implement it in Car and Bike classes. 
  interface Vehicle {
    drive(): void;
  }
  
  class CarVehicle implements Vehicle {
    drive(): void {
      console.log("Lái ô tô bằng vô lăng và bàn đạp");
    }
  }
  
  class BikeVehicle implements Vehicle {
    drive(): void {
      console.log("Đạp xe bằng bàn đạp và điều khiển ghi-đông");
    }
  }
  
//   new CarVehicle().drive();
//   new BikeVehicle().drive();
  
  // 21. Create a generic Repository class with methods add(), getAll(). 
  class Repository<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    getAll(): T[] {
      return this.items;
    }
  }
  
//   const userRepo = new Repository<string>();
//   userRepo.add("Alice");
//   userRepo.add("Bob");
//   console.log("Repository data:", userRepo.getAll());
  
  // 22. Create a class Stack with push, pop, peek, isEmpty methods. 
  class Stack<T> {
    private items: T[] = [];
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }
  
//   const stack = new Stack<number>();
//   stack.push(100);
//   stack.push(200);
//   console.log(`Top stack: ${stack.peek()}`);
//   console.log(`Pop: ${stack.pop()}`);
//   console.log(`Trống hay không: ${stack.isEmpty()}`);
  
  // 23. Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment. 
  interface Payment {
    pay(amount: number): void
  }
  
  class CashPayment implements Payment {
    pay(amount: number): void {
      console.log(`Thanh toán ${amount} VND bằng tiền mặt`);
    }
  }
  
  class CardPayment implements Payment {
    pay(amount: number): void {
      console.log(`Thanh toán ${amount} VND qua thẻ ngân hàng`);
    }
  }
  
//   new CashPayment().pay(50000);
//   new CardPayment().pay(150000);
  
  // 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner. 
  abstract class Appliance {
    abstract turnOn(): void;
  }

  class Fan implements Appliance {
    turnOn(): void {
        console.log("Quạt đang thổi gió.")
    }
  }

  class AirConditioner implements Appliance {
    turnOn(): void {
        console.log("Máy lạnh đang làm mát.")
    }
  }

//   new Fan().turnOn();
//   new AirConditioner().turnOn()
  
  // 25. Create a class Shape with a static method describe(). 
  class ShapeWithStaticMethod {
    static describe(): void {
      console.log("Shape là cấu trúc biểu diễn hình học 2D/3D");
    }
  }
  
//   ShapeWithStaticMethod.describe();
  
  // 26. Create a class Order with list of products. Add method to calculate total price. 
  class Order {
    products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    calculateTotal(): number {
      return this.products.reduce((total, p) => total + p.price, 0);
    }
  }
  
//   const myOrder = new Order();
//   myOrder.addProduct(new Product("Bút chì", 5));
//   myOrder.addProduct(new Product("Vở kẻ ngang", 15));
//   console.log(`Tổng giá trị đơn hàng: ${myOrder.calculateTotal()}`);
  
  // 27. Create a class Teacher that extends Person. Add subject attribute and introduce method. 
  class Teacher extends Person {
    subject: string;
  
    constructor(name: string, age: number, subject: string) {
      super(name, age);
      this.subject = subject;
    }
  
    introduce(): void {
      console.log(`Tôi là giáo viên ${this.name}, ${this.age} tuổi, dạy môn ${this.subject}`);
    }
  }
  
//   const teacher = new Teacher("Thầy Minh", 35, "Vật Lý");
//   teacher.introduce();
  
  // 28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it. 
  class ProtectedAnimalBase {
    protected makeSound(): string {
      return "Âm thanh động vật gốc";
    }
  }
  
  class SubDog extends ProtectedAnimalBase {
    public triggerSound(): void {
      console.log(`SubDog phát ra tiếng: ${this.makeSound()}`);
    }
  
    protected override makeSound(): string {
      return "Gâu Gâu";
    }
  }
  
  class SubCat extends ProtectedAnimalBase {
    public triggerSound(): void {
      console.log(`SubCat phát ra tiếng: ${this.makeSound()}`);
    }
  
    protected override makeSound(): string {
      return "Meo Meo";
    }
  }
  
//   new SubDog().triggerSound();
//   new SubCat().triggerSound();
  
  // 29. Create an interface Movable with method move(). Implement it in Car and Robot. 
  interface Movable {
    move(): void;
  }
  
  class MovableCar implements Movable {
    move(): void {
      console.log("Xe di chuyển bằng bánh xe trên đường nhựa.");
    }
  }
  
  class MovableRobot implements Movable {
    move(): void {
      console.log("Robot di chuyển bằng chân trợ lực cơ khí.");
    }
  }
  
//   new MovableCar().move();
//   new MovableRobot().move();
  
  // 30. Create a class School with list of Students and Teachers. Add method to display info. 
  class School {
    name: string;
    students: Student[] = [];
    teachers: Teacher[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    addStudent(student: Student): void {
      this.students.push(student);
    }
  
    addTeacher(teacher: Teacher): void {
      this.teachers.push(teacher);
    }
  
    displaySchoolInfo(): void {
      console.log(`=== TRƯỜNG HỌC: ${this.name} ===`);
      console.log(`Số lượng giáo viên: ${this.teachers.length}`);
      this.teachers.forEach(t => t.introduce());
      console.log(`Số lượng học sinh: ${this.students.length}`);
      this.students.forEach(s => s.displayAll());
    }
  }
  
  const school = new School("THPT Chuyên Tuyên Quang - Amsterdam");
  school.addTeacher(new Teacher("Cô Lan", 28, "Tiếng Anh"));
  school.addStudent(new Student("Bảo Long", 17, "12 Chuyên Toán"));
  school.displaySchoolInfo();