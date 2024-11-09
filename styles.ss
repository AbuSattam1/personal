body {
    font-family: 'Tahoma', sans-serif;
    direction: rtl;
    background-color: #eef2f3;
    margin: 0;
    padding: 0;
}
h1 {
    text-align: center;
    color: #4CAF50;
    margin: 20px 0;
    font-size: 2.5em;
}
.container {
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
label {
    font-weight: bold;
    color: #333;
    margin-top: 10px;
    display: block;
}
input, select, button {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}
input:focus, select:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    outline: none;
}
button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-top: 15px;
    transition: background-color 0.3s, transform 0.3s;
}
button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
}
.hidden { display: none; }
footer {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 30px;
    padding: 10px 0;
}
.message {
    color: green;
    margin-top: 10px;
    text-align: center;
}
.error {
    color: red;
    text-align: center;
    margin-top: 10px;
}
.section-header {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 8px;
    margin: 10px 0;
    font-weight: bold;
    color: #333;
}
