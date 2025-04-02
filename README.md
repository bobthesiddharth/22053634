<img width="834" alt="Screenshot 2025-04-02 at 6 49 15 AM" src="https://github.com/user-attachments/assets/8771dd14-a08b-45a4-a8f1-e675b331f096" />Social Media Analytics Frontend
🌟 About the Project
This is a React-based web app that provides real-time social media insights using platform APIs. It helps businesses track user activity, trending posts, and live updates—without needing authentication!

✨ Key Features
✅ Top Users: Highlights the top 5 users based on post count.
✅ Trending Posts: Displays posts with the most comments at the moment.
✅ Live Feed: Updates dynamically with real-time posts.
✅ Smart API Usage: Keeps things fast & cost-efficient.
✅ Random Profile & Post Images: Keeps the UI fresh with random images.
✅ Fully Responsive UI: Built with Material UI, Tailwind CSS, and Bootstrap.

🚀 Get Started
🔧 What You Need
Before running the app, make sure you have:

Node.js (v16 or newer)

npm or yarn

Git (for cloning the repo)

🛠 Installation
1️⃣ Clone the Repository:

sh
Copy
Edit
git clone https://github.com/your-username/social-media-analytics.git
cd social-media-analytics
2️⃣ Install Dependencies:

sh
Copy
Edit
npm install
# OR
yarn install
3️⃣ Start the App:

sh
Copy
Edit
npm start
Now, open http://localhost:3000 in your browser! 🎉

📡 API Endpoints!

Here’s how the app fetches data:

![Uploading Screenshot 2025-<img width="686" alt="Screenshot 2025-04-02 at 8 03 57 PM" src="https://github.com/user-attachments/assets/e60d0a74-7724-41c2-aa79-499420bf2b71" />
04-02 at 6.49.15 AM.png…]()






🔹 Get Users:

sh
Copy
Edit
GET http://20.244.56.144/evaluation-service/users
🔹 Get Posts by a User:

sh
Copy
Edit
GET http://20.244.56.144/evaluation-service/users/:userid/posts
🔹 Get Comments on a Post:

sh
Copy
Edit
GET http://20.244.56.144/evaluation-service/posts/:postid/comments
🔹 Number APIs (Prime, Fibonacci, Even, Random):

sh
Copy
Edit
GET http://20.244.56.144/evaluation-service/primes
GET http://20.244.56.144/evaluation-service/fibo
GET http://20.244.56.144/evaluation-service/even
GET http://20.244.56.144/evaluation-service/rand
🔍 How It Works
💡 Top Users: Fetches all users → Counts posts → Sorts & displays the top 5.
💡 Trending Posts: Fetches posts → Sorts by highest comments.
💡 Live Feed: Periodically polls the API<img width="686" alt="Screenshot 2025-04-02 at 8 04 09 PM" src="https://github.com/user-attachments/assets/95114c8c-a93e-438f-a1d6-8a1f7ee82627" />
 for new posts.![Uploading Screenshot 2025-04-02 at 8.04.17 PM.png…]()





📜 License
This project is open-source under the MIT License.

🤝 Want to Contribute?
We’d love your help! Here’s how:

1️⃣ Fork the repo
2️⃣ Create a branch (feature-xyz)
3️⃣ Make changes & commit
4️⃣ Push & open a Pull Request
