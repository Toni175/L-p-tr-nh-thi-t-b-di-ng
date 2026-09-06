// A. BASICS WITH PROMISE

// Câu 1: Create a Promise that returns the string "Hello Async" after 2 seconds. 
function exercise1(): Promise<string> {
    // Khởi tạo một đối tượng Promise mới nhận callback có tham số resolve 
    return new Promise((resolve) => {
      // Thiết lập bộ đếm thời gian chờ 2000 mili-giây (2 giây) 
      setTimeout(() => {
        // Sau khi hết 2 giây, gọi resolve() để trả dữ liệu chuỗi về trạng thái fulfilled 
        resolve("Hello Async");
      }, 2000);
    });
  }
//   exercise1().then((res) => console.log("Test Câu 1:", res));
  
  
  // Câu 2: Write a function that returns a Promise resolving with the number 10 after 1 second. 
  function exercise2(): Promise<number> {
    // Trả về một đối tượng Promise với kiểu dữ liệu là number
    return new Promise((resolve) => {
      // Dùng setTimeout hoãn tác vụ lại 1000 mili-giây (1 giây) 
      setTimeout(() => {
        // Đổi trạng thái Promise thành công và truyền giá trị số 10 
        resolve(10);
      }, 1000);
    });
  }

//   exercise2().then((res) => console.log("Test Câu 2:", res));
  
  
  // Câu 3: Write a function that rejects a Promise with the error "Something went wrong" after 1 second. 
  function exercise3(): Promise<never> {
    // Tham số thứ 2 của Promise executor là reject, dùng để báo lỗi 
    return new Promise((_, reject) => {
      // Hẹn giờ thực thi sau 1000 mili-giây (1 giây) 
      setTimeout(() => {
        // Đưa Promise vào trạng thái rejected kèm đối tượng Error mô tả lỗi 
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }

//   exercise3().catch((err) => console.error("Test Câu 3:", err.message));
  
  
  // Câu 4: Use .then() and .catch() to handle a Promise that returns a random number. 
  function exercise4(): void {
    // Tạo một Promise sinh số ngẫu nhiên để mô phỏng cả 2 trường hợp thành công hoặc thất bại 
    const randomPromise = new Promise<number>((resolve, reject) => {
      // Lấy một số ngẫu nhiên trong khoảng từ 0 đến 1
      const num = Math.random();
      // Nếu số >= 0.5 coi như thành công
      if (num >= 0.5) {
        resolve(num);
      } else {
        // Nếu số < 0.5 kích hoạt lỗi để rơi vào catch
        reject(new Error(`Số quá nhỏ: ${num.toFixed(2)}`));
      }
    });
  
    // Gọi khối .then() để đón dữ liệu nếu resolve 
    randomPromise
      .then((val) => {
        // In kết quả số ngẫu nhiên ra console khi thành công
        console.log("Exercise 4 - Success:", val);
      })
      // Gọi khối .catch() để bắt ngoại lệ nếu reject xảy ra 
      .catch((err) => {
        // In thông báo lỗi ra màn hình khi thất bại
        console.error("Exercise 4 - Caught Error:", err.message);
      });
  }
//   exercise4();
  
  
  // Câu 5: Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms. 
  function simulateTask(time: number): Promise<string> {
    // Hàm nhận vào tham số thời gian chờ tính bằng mili-giây 
    return new Promise((resolve) => {
      // Đặt bộ đếm thời gian bằng đúng biến time được truyền vào 
      setTimeout(() => {
        // Trả về chuỗi kết quả "Task done" đúng theo yêu cầu 
        resolve("Task done");
      }, time);
    });
  }

//   simulateTask(1000).then((res) => console.log("Test Câu 5:", res));
  
  
  // Câu 6: Use Promise.all() to run 3 simulated Promises in parallel and print the result. 
  function exercise6(): void {
    // Tạo tác vụ 1 chạy trong 1000ms 
    const p1 = simulateTask(1000);
    // Tạo tác vụ 2 chạy trong 1500ms 
    const p2 = simulateTask(1500);
    // Tạo tác vụ 3 chạy trong 500ms 
    const p3 = simulateTask(500);
  
    // Truyền cả 3 promise vào mảng, Promise.all sẽ kích hoạt chạy song song 
    Promise.all([p1, p2, p3]).then((results) => {
      // In mảng kết quả của cả 3 tác vụ khi tất cả đều đã resolve xong 
      console.log("Exercise 6 - Parallel results:", results);
    });
  }

//   exercise6();
  
  
  // Câu 7: Use Promise.race() to return whichever Promise resolves first. 
  function exercise7(): void {
    // Tạo tác vụ nhanh nhất: hoàn thành sau 300ms
    const p1 = new Promise((res) => setTimeout(() => res("Fast task (300ms)"), 300));
    // Tạo tác vụ trung bình: hoàn thành sau 800ms
    const p2 = new Promise((res) => setTimeout(() => res("Medium task (800ms)"), 800));
    // Tạo tác vụ chậm nhất: hoàn thành sau 1500ms
    const p3 = new Promise((res) => setTimeout(() => res("Slow task (1500ms)"), 1500));
  
    // Promise.race chỉ lấy kết quả của promise về đích đầu tiên 
    Promise.race([p1, p2, p3]).then((winner) => {
      // In ra kết quả của tác vụ thắng cuộc (ở đây là p1) 
      console.log("Exercise 7 - Winner:", winner);
    });
  }

//   exercise7();
  
  
  // Câu 8: Create a Promise chain: square the number 2, then double it, then add 5. 
  function exercise8(): void {
    // Khởi tạo Promise với giá trị ban đầu là số 2 
    Promise.resolve(2)
      // Bước 1: Bình phương số 2 (2 * 2 = 4) 
      .then((num) => {
        return num * num;
      })
      // Bước 2: Nhân đôi kết quả của bước 1 (4 * 2 = 8) 
      .then((num) => {
        return num * 2;
      })
      // Bước 3: Cộng thêm 5 vào kết quả của bước 2 (8 + 5 = 13) 
      .then((num) => {
        return num + 5;
      })
      // Bước 4: Nhận kết quả cuối cùng từ chuỗi và in ra màn hình
      .then((finalResult) => {
        console.log("Exercise 8 - Final Result:", finalResult);
      });
  }

//   exercise8();
  
  
  // Câu 9: Write a Promise that reads an array after 1 second and filters even numbers. 
  function exercise9(numbers: number[]): Promise<number[]> {
    // Trả về một Promise chứa mảng các số nguyên 
    return new Promise((resolve) => {
      // Trì hoãn xử lý trong 1000ms (1 giây) 
      setTimeout(() => {
        // Dùng hàm filter giữ lại các số chia hết cho 2 (số chẵn) 
        const evens = numbers.filter((n) => n % 2 === 0);
        // Trả mảng đã lọc xong ra ngoài qua resolve 
        resolve(evens);
      }, 1000);
    });
  }

//   exercise9([1, 2, 3, 4, 5, 6, 7, 8]).then((res) => console.log("Test Câu 9:", res));
  
  
  // Câu 10: Use .finally() to log "Done" when a Promise finishes (success or failure). 
  function exercise10(): void {
    // Khởi tạo một Promise mẫu 
    const samplePromise = new Promise((resolve) => {
      // Sau 1 giây trả về chuỗi thành công
      setTimeout(() => resolve("Sample finished"), 1000);
    });
  
    samplePromise
      // Nhận dữ liệu khi Promise thành công
      .then((res) => console.log("Exercise 10 - Result:", res))
      // Bắt lỗi nếu Promise thất bại
      .catch((err) => console.error("Exercise 10 - Error:", err))
      // Khối finally luôn luôn được gọi bất kể Promise resolve hay reject 
      .finally(() => {
        // In ra dòng chữ "Done" khi kết thúc chu trình 
        console.log("Exercise 10 - Done");
      });
  }

//   exercise10();
  
  // B. ASYNC / AWAIT
  
  // Câu 11: Convert Exercise 1 into async/await. 
  async function exercise11(): Promise<void> {
    // Dùng từ khóa await để tạm dừng và chờ Promise từ exercise1 giải quyết xong 
    const result = await exercise1();
    // In kết quả nhận được ra console
    console.log("Exercise 11 - Output:", result);
  }
//   exercise11();
  
  
  // Câu 12: Write an async function that calls simulateTask(2000) and logs the result. 
  async function exercise12(): Promise<void> {
    // Chờ simulateTask chạy xong sau 2000ms bằng await 
    const result = await simulateTask(2000);
    // Log chuỗi kết quả "Task done" ra console 
    console.log("Exercise 12 - Output:", result);
  }

//   exercise12();
  
  
  // Câu 13: Handle errors using try/catch with async/await. 
  async function exercise13(): Promise<void> {
    // Mở khối try để bao bọc các đoạn code bất đồng bộ có nguy cơ phát sinh lỗi 
    try {
      // Await hàm exercise3 (hàm này chắc chắn reject sau 1 giây) 
      await exercise3();
    } catch (error: any) {
      // Bắt lỗi reject rơi vào khối catch và in ra thông báo lỗi 
      console.error("Exercise 13 - Caught via try/catch:", error.message);
    }
  }

//   exercise13();
  
  
  // Câu 14: Write an async function that takes a number, waits 1 second, and returns the number * 3. 
  async function exercise14(num: number): Promise<number> {
    // Chờ đúng 1000ms (1 giây) trước khi xử lý tiếp 
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Trả về số đầu vào nhân với 3 
    return num * 3;
  }

//   exercise14(4).then((res) => console.log("Test Câu 14:", res));
  
  
  // Câu 15: Call multiple async functions sequentially using await. 
  async function exercise15(): Promise<void> {
    console.log("Exercise 15 - Sequential start");
    // Chạy và chờ hoàn thành tác vụ 1 (500ms) 
    const r1 = await simulateTask(500);
    console.log("Task 1 finished:", r1);
  
    // Sau khi tác vụ 1 xong mới tiếp tục chạy và chờ tác vụ 2 (500ms) 
    const r2 = await simulateTask(500);
    console.log("Task 2 finished:", r2);
  
    // Sau khi tác vụ 2 xong mới tiếp tục chạy và chờ tác vụ 3 (500ms) 
    const r3 = await simulateTask(500);
    console.log("Task 3 finished:", r3);
  }

//   exercise15();
  
  
  // Câu 16: Call multiple async functions in parallel using Promise.all(). 
  async function exercise16(): Promise<void> {
    console.log("Exercise 16 - Parallel start");
    // Kích hoạt cả 3 hàm bất đồng bộ đồng thời và await kết quả chung của mảng 
    const results = await Promise.all([
      simulateTask(1000),
      simulateTask(1000),
      simulateTask(1000),
    ]);
    // Log mảng kết quả khi cả 3 tác vụ chạy xong cùng lúc 
    console.log("Exercise 16 - All parallel finished:", results);
  }

//   exercise16();
  
  
  // Câu 17: Use for await...of to iterate over an array of Promises. 
  async function exercise17(): Promise<void> {
    // Tạo một mảng gồm các Promise với độ trễ khác nhau 
    const promises = [
      simulateTask(300).then(() => "Item 1 (300ms)"),
      simulateTask(600).then(() => "Item 2 (600ms)"),
      simulateTask(200).then(() => "Item 3 (200ms)"),
    ];
  
    // Sử dụng cú pháp for await...of để duyệt tuần tự qua từng Promise 
    for await (const item of promises) {
      // In giá trị nhận được của từng item sau khi đã được resolve 
      console.log("Exercise 17 - Iterated item:", item);
    }
  }

//   exercise17();
  
  
  // Câu 18: Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second). 
  interface User {
    id: number;
    name: string;
  }
  
  async function fetchUser(id: number): Promise<User> {
    // Giả lập độ trễ mạng là 1 giây (1000ms) 
   await new Promise((res) => setTimeout(res, 1000));
    // Trả về một đối tượng đại diện cho user gồm id và name 
    return {
      id: id,
      name: `User_${id}`,
    };
  }

//   fetchUser(101).then((res) => console.log("Test Câu 18:", res));
  
  
  // Câu 19: Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID. 
  async function fetchUsers(ids: number[]): Promise<User[]> {
    // Dùng .map() chuyển từng id thành một Promise gọi hàm fetchUser 
    const userPromises = ids.map((id) => fetchUser(id));
    // Gom các Promise lại và chờ lấy toàn bộ mảng đối tượng người dùng 
    const users = await Promise.all(userPromises);
    // Trả về danh sách user đã lấy được
    return users;
  }

//   fetchUsers([1, 2, 3]).then((res) => console.log("Test Câu 19:", res));
  
  
  // Câu 20: Add a timeout: if the API call takes more than 2 seconds, throw an error. 
  async function exercise20(): Promise<void> {
    // Giả lập một tác vụ API mất đến 3 giây mới xong (lâu hơn 2s) 
    const slowApiCall = new Promise((res) => setTimeout(() => res("API Data"), 1000));
  
    // Tạo một Promise timeout: sau đúng 2 giây sẽ tự reject lỗi 
    const timeoutPromise = new Promise((_, rej) =>
      setTimeout(() => rej(new Error("Timeout: API call took more than 2 seconds")), 2000)
    );
  
    try {
      // Dùng Promise.race, nếu API mất quá 2 giây thì timeoutPromise sẽ thắng cuộc và ném lỗi 
      const data = await Promise.race([slowApiCall, timeoutPromise]);
      console.log("Exercise 20 - Result:", data);
    } catch (error: any) {
      // Bắt lỗi quá thời gian và hiển thị ra console 
      console.error("Exercise 20 - Error:", error.message);
    }
  }

//   exercise20();
  
  // C. FETCH API & SIMULATED I/O
  
  // Câu 21: Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1). 
  async function exercise21(): Promise<void> {
    // Gửi một HTTP GET request đến API mẫu và chờ phản hồi Response 
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // Chuyển đổi dữ liệu stream nhận được thành định dạng JSON
    const data = await response.json();
    // In dữ liệu lấy được ra màn hình
    console.log("Exercise 21 - Todo Data:", data);
  }
//   exercise21();
  
  
  // Câu 22: Call the API multiple times and log the results. 
  async function exercise22(): Promise<void> {
    // Khởi tạo danh sách URL cần gọi 
    const urls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2",
      "https://jsonplaceholder.typicode.com/todos/3",
    ];
  
    // Gửi request đồng thời cho cả 3 URL bằng Promise.all và map() 
    const results = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    // Log toàn bộ mảng kết quả lấy về được 
    console.log("Exercise 22 - Multiple Results:", results);
  }

//   exercise22();
  
  
  // Câu 23: Write an async function that fetches a list of todos and filters out those that are not completed. 
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  async function exercise23(): Promise<Todo[]> {
    // Gọi API lấy toàn bộ danh sách todos 
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // Parse toàn bộ dữ liệu trả về thành mảng đối tượng Todo
    const todos: Todo[] = await response.json();
    // Dùng filter loại bỏ các phần tử có completed === false, chỉ giữ lại item hoàn thành 
    return todos.filter((todo) => todo.completed === true);
  }

//   exercise23().then((res) => console.log("Test Câu 23 - Total completed:", res.length));
  
  
  // Câu 24: Write an async function postData() that sends a POST request to a test API. 
  async function postData(): Promise<void> {
    // Gửi một request với method POST đến API 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      // Khai báo phương thức là POST 
      method: "POST",
      // Thiết lập header thông báo định dạng dữ liệu gửi lên là JSON
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      // Chuyển đối tượng JavaScript thành chuỗi JSON ở thuộc tính body
      body: JSON.stringify({
        title: "Bài viết kiểm thử",
        body: "Nội dung kiểm thử",
        userId: 1,
      }),
    });
    // Chờ đọc dữ liệu phản hồi trả về từ server
    const data = await response.json();
    // In kết quả phản hồi của API POST ra console
    console.log("Exercise 24 - POST Response:", data);
  }

//   postData();
  
  
  // Câu 25: Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done. 
  async function downloadFile(fileName: string): Promise<void> {
    // In thông báo bắt đầu quá trình tải
    console.log(`Exercise 25 - Đang tải tệp: ${fileName}...`);
    // Dùng setTimeout bọc trong Promise để mô phỏng thời gian tải 3000ms (3 giây) 
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // In thông báo hoàn thành khi đã chờ đủ 3 giây 
    console.log(`Exercise 25 - Tải tệp ${fileName} thành công.`);
  }

//   downloadFile("tailieu.pdf");
  
  
  // Câu 26: Use async/await with setTimeout to simulate a 5-second wait. 
  async function exercise26(): Promise<void> {
    // Ghi log báo hiệu bắt đầu đếm thời gian
    console.log("Exercise 26 - Bắt đầu chờ 5 giây...");
    // Chờ đúng 5000 mili-giây (5 giây) bằng await 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // In thông báo khi thời gian chờ kết thúc
    console.log("Exercise 26 - Đã chờ xong 5 giây!");
  }

//   exercise26();
  
  
  // Câu 27: Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails. 
  async function fetchWithRetry(url: string, retries: number): Promise<any> {
    // Dùng vòng lặp for chạy từ lần 1 đến giới hạn retries 
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        // Gửi request lấy dữ liệu từ URL 
        const res = await fetch(url);
        // Nếu server trả status code lỗi (không nằm trong dải 200-299) thì ném ngoại lệ
        if (!res.ok) throw new Error(`HTTP Lỗi với mã trạng thái: ${res.status}`);
        // Nếu thành công thì parse JSON và trả về kết quả ngay lập tức
        return await res.json();
      } catch (err: any) {
        // In thông báo khi một lần gọi gặp thất bại
        console.log(`Lần thử ${attempt} thất bại: ${err.message}`);
        // Nếu đã dùng hết số lần thử lại quy định thì ném ra lỗi cuối cùng 
        if (attempt === retries) {
          throw new Error(`Thất bại sau ${retries} lần thử.`);
        }
      }
    }
  }

//   fetchWithRetry("https://jsonplaceholder.typicode.com/todoas/1", 3)
//     .then((res) => console.log("Test Câu 27:", res))
//     .catch((err) => console.error("Lỗi Test Câu 27:", err.message));
  
  
  // Câu 28: Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all). 
  async function batchProcess(): Promise<void> {
    // Tạo mảng gồm 5 tác vụ bất đồng bộ mô phỏng bằng simulateTask 
    const tasks = Array.from({ length: 5 }, (_, i) => simulateTask(300 * (i + 1)));
    // Sử dụng Promise.all để bắt đầu xử lý đồng loạt cả 5 tác vụ 
    const results = await Promise.all(tasks);
    // Log mảng kết quả sau khi cả nhóm 5 tác vụ đã hoàn thành 
    console.log("Exercise 28 - Batch processing hoàn thành:", results);
  }

//   batchProcess();
  
  
  // Câu 29: Write an async function queueProcess() that processes tasks sequentially in a queue. 
  async function queueProcess(): Promise<void> {
    // Tạo một danh sách (hàng đợi) gồm các hàm tạo tác vụ 
    const queue = [
      () => simulateTask(300).then(() => console.log("Hàng đợi - Tác vụ 1 xong")),
      () => simulateTask(200).then(() => console.log("Hàng đợi - Tác vụ 2 xong")),
      () => simulateTask(400).then(() => console.log("Hàng đợi - Tác vụ 3 xong")),
    ];
  
    // Dùng vòng lặp for...of để lần lượt lấy từng tác vụ trong hàng đợi 
    for (const task of queue) {
      // Phải chờ (await) tác vụ hiện tại chạy xong trước khi chuyển sang tác vụ kế 
      await task();
    }
    // In thông báo khi tất cả tác vụ trong hàng đợi đã xử lý xong hoàn toàn
    console.log("Exercise 29 - Hoàn thành toàn bộ hàng đợi.");
  }

//   queueProcess();
  
  
  // Câu 30: Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status. 
  async function exercise30(): Promise<void> {
    // Tạo 2 lời gọi API: 1 link hợp lệ và 1 link không tồn tại để mô phỏng thất bại 
    const requests = [
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.json()),
      fetch("https://invalid-api-domain-test-12345.com").then((r) => r.json()),
    ];
  
    // Dùng Promise.allSettled để chờ mọi API hoàn thành mà không bị ngắt quãng bởi lỗi 
    const results = await Promise.allSettled(requests);
  
    // Duyệt qua từng kết quả trả về để kiểm tra trạng thái fulfilled hay rejected 
    results.forEach((item, index) => {
      // Nếu trạng thái là fulfilled nghĩa là request thành công 
      if (item.status === "fulfilled") {
        console.log(`API ${index + 1} Thành công:`, item.value);
      } else {
        // Nếu trạng thái là rejected nghĩa là request thất bại 
        console.log(`API ${index + 1} Thất bại với lý do:`, item.reason.message);
      }
    });
  }

  exercise30();