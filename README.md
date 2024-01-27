# My portfolio (Binance)
## Introduction
This coin value tracker is a simple single-page application that displays the details of your cryptocurrency holdings on Binance, presented in an interactive graph. The application utilizes the Binance API to fetch real-time data and visualizes it for a quick overview of your coin values.
## Getting Started

Follow the steps below to set up and run Coin Value Tracker on your local machine.

### Prerequisites

- Python 3.x
- Git

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/coin-value-tracker.git
   
2. Navigate to the project directory:
    ```bash
    cd my_portfolio

3. Create a .env file in the project directory and add your Binance API key and secret:
    ```bash
    API_KEY='your_api_key'
    API_SECRET='your_api_secret'
Note: Ensure your API key has the necessary permissions to access account information.

4. Open config.py and update the assets list with the cryptocurrencies you own:
    ```bash
    config = {
    'api_key': os.getenv("API_KEY"),
    'api_secret': os.getenv("API_SECRET"),
    'assets': ['ENS', 'BNB']  # Add your assets here
    }
   
5. Customize the chart appearance by modifying chart_data.js:
    ```bash
    // Modify background and hover colors as desired
    const chartColors = {
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
    };

##Running the Application
Run the following command to start the application:

bash
python run.py

Open your web browser and visit http://localhost:5000 to view the Coin Value Tracker.

##License
This project is licensed under the MIT License.

vbnet



Make sure to replace placeholder values (like `your-username`) with the actual details relevant to your project. Additionally, feel free to modify the content based on your preferences and additional information you'd like to provide in the README.
