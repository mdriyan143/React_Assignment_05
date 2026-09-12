# 🚀 Dev Stack

📝 **Dev Stack** is a modern web application where users can explore different technologies and build their own development stack. Users can view technology details, add technologies to their stack, and remove them when needed.

## 🌐 Live Site

https://dev-stack-riyan.netlify.app/

## 💻 GitHub Repository

https://github.com/mdriyan143/React_Assignment_05

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON

## ✨ Features

- Browse different technologies with category, difficulty, rating, and badge information.
- Add technologies to a personal stack and prevent duplicate selections.
- Remove individual technologies or remove all technologies from the stack.

---

# 🧠 React Questions

## 📌 1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us create the UI in a simple way.

## 🔄 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component. State is used to store data inside a component, and it can change when the user interacts with the application.

## 💾 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data that can change. In this project, I used it to keep track of the technologies selected by the user.

## ⚡ 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to do tasks such as loading or fetching data. It can run after a component is rendered, so it is commonly used to load data from an API or JSON file. In this project, I used `Suspense` and `use()` to handle the JSON data.

## 🔑 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. This makes it easier for React to know which item has changed, been added, or been removed.

## 🔀 6. What is conditional rendering?

Conditional rendering means showing different content depending on a condition. In this project, I used it to show the message "Your stack is empty" when the user has not selected any technology.

## 🔗 7. How do you pass data between parent and child components?

We can pass data from a parent component to a child component using props. To send something back, the parent can pass a function as a prop, and the child can call that function.

---

## 👨‍💻 Author

**Md Riyan Biswas**

Developed as part of **React Assignment 05 – Dev Stack**, a practical React project for exploring technologies and building a personal development stack.