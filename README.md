Social Media Analytics Frontend
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

📡 API Endpoints
Here’s how the app fetches data:





<img width="686" alt="Screenshot 2025-04-02 at 8 04 22 PM" src="https://github.com/user-attachments/assets/5a89a1a0-839b-40f1-b4de-8d304a8dbf95" />
<img width="686" alt="Screenshot 2025-04-02 at 8 04 17 PM" src="https://github.com/user-attachments/assets/5e38f1e1-9e07-4bdc-98f4-19774d28435a" />
<img width="686" alt="Screenshot 2025-04-02 at 8 04 09 PM" src="https://github.com/user-attachments/assets/3dfa0c71-1fcc-43ad-a09e-983bfe99ff3e" />
<img width="686" alt="Screenshot 2025-04-02 at 8 03 57 PM" src="https://github.com/user-attachments/assets/2ba2efbc-a9e8-4b7b-87ed-123e99fff0f2" />



















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
💡 Live Feed: Periodically polls the API for new posts.

📜 License
This project is open-source under the MIT License.

🤝 Want to Contribute?
We’d love your help! Here’s how:

1️⃣ Fork the repo
2️⃣ Create a branch (feature-xyz)
3️⃣ Make changes & commit
4️⃣ Push & open a Pull Request
