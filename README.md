# Word Frequency Table Generator

This project allows you to generate a word frequency table from a provided URL or pasted text. It uses a Node.js server with Puppeteer to fetch and render the content of a URL, and a client-side HTML file to display the word frequency table.

It is intended for Microsoft Job Postings to get the top words to include in your resume when applying for such a job.

## Features

- Fetch and process content from a URL
- Paste text directly for processing
- Define custom stop words to exclude from the word frequency table
- Display the top 20 most used words in a table

## Prerequisites

- Node.js and npm installed on your machine

## Setup

1. Clone the repository or download the project files.

2. Navigate to the project directory.

3. Install the required npm packages:

    ```sh
    npm install express puppeteer cors
    ```

## Running the Server

1. Start the Node.js server:

    ```sh
    node server.js
    ```

    The server will run on `http://localhost:3000`.

## Using the Client-Side HTML File

1. Open the `index.html` file in your web browser.

2. You have two options to generate the word frequency table:
    - **Generate Table from URL**: Enter a URL in the input field and click the "Generate Table from URL" button.
    - **Generate Table from Text**: Paste text into the textarea and click the "Generate Table from Text" button.

3. Optionally, you can enter custom stop words in the provided textarea, separated by commas. These stop words will be excluded from the word frequency table.

## Project Structure

- [server.js](http://_vscodecontentref_/0): Node.js server file that uses Puppeteer to fetch and render content from a URL.
- `index.html`: Client-side HTML file that allows users to input a URL or paste text, and displays the word frequency table.
- `README.md`: This README file.

## Example

1. Start the server:

    ```sh
    node server.js
    ```

2. Open `index.html` in your web browser.

3. Enter a URL (e.g., `https://jobs.careers.microsoft.com/global/en/job/1730260/`) and click "Generate Table from URL".

4. Alternatively, paste some text into the textarea and click "Generate Table from Text".

5. Optionally, enter custom stop words in the provided textarea, separated by commas.

Example:
![image](https://github.com/user-attachments/assets/58b1e411-1112-4fa0-b4d7-8b5a77a07609)


## License

This project is licensed under the MIT License.
