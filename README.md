# Dynamic Quote Generator  
By : Soeng senghorng 

## 📖 Project Overview  
The Dynamic Quote Generator is a small web application that shows a **random quote** whenever you click a button.  
This project was made to practice connecting:  
- **Frontend** (HTML, CSS, JavaScript)  
- **Backend** (Node.js + Express)  
- **Database** (quotes.json file) instead of SQLlite and it more convinient since im not familar with Backend. 
## Flow of Data
User clicks the "Get Quote" button → Frontend triggers a JavaScript fetch() request.

Frontend request sent to backend → Express server receives the request at /quote.

Backend reads quotes.json → Picks a random quote → Sends it back as JSON.

Frontend receives JSON → Updates the HTML to display the quote and author.
It is a simple example of how websites and servers work together.  

---
## 🚀 How to Run the Project  
1. Install backend dependencies
    - cd backend
    - npm install
2.Start the server
    - node server.js
3.Open the frontend
    - Go to the frontend folder and open index.html in your browser.
    - Click the "Get Quote" button → a random quote will appear.
### Project Architecture Explanation
The Dynamic Quote Generator follows a simple frontend-backend-database architecture:

Frontend (User Interface)

Built with HTML, CSS, and JavaScript.

The user sees a button and a quote display area on the page.

When the user clicks the button, the frontend sends a request to the backend to get a random quote.

JavaScript handles the request using the fetch API and updates the page with the quote received from the backend.

Backend (Server)

Built with Node.js and Express.

The backend provides a REST API endpoint (/quote) that responds to requests from the frontend.

When the endpoint is called, the backend reads quotes from the quotes.json file and selects one quote randomly.

The selected quote is then sent back to the frontend in JSON format.

Database (quotes.json file)

Instead of a traditional database, this project uses a simple JSON file to store quotes.

Each quote object has a quote and author.

The backend reads this file every time a new quote is requested.
####1. Clone or download the project  
```bash
git clone https://github.com/Renn-1205/Dynamic-quote-generator.git
Project Architecture Explanation.
###

