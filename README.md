## **Backend (Node.js + Express + MongoDB)**

### **Prerequisites**

- Node.js (>= 16.x)
- MongoDB

### **Setup & Run**

1. **Clone the repository**

   ```sh
   git clone https://github.com/data-baze/news-app-backend.git
   cd news-app-backend
   ```

2. **Navigate to backend folder**

   ```sh
   cd ../news-app-backend
   ```

3. **Install dependencies**

   ```sh
   npm install
   ```

4. **Create a `.env` file** and set up environment variables:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/newsdb
   ```

5. **Run the backend server**

   ```sh
   npm run dev
   ```

6. **API will be available at**
   ```
   http://localhost:5000/api/news
   ```

---

Now you can start developing! 🚀
