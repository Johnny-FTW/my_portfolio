[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


# My portfolio (Binance)
![image](https://github.com/Johnny-FTW/my_portfolio/blob/main/scr.png)
## Introduction
This coin value tracker is a simple single-page application that displays the details of your cryptocurrency holdings on Binance, presented in an interactive graph. The application utilizes the Binance API to fetch real-time data and visualizes it for a quick overview of your coin values.
### Built With
* [![Python][Python.org]][Python-url]
* [![Flask][Flask.com]][Flask-url]
* [![HTML][HTML.com]][HTML-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JS][JS.com]][JS-url]

## Getting Started

Follow the steps below to set up and run coin value tracker on your local machine.

### Prerequisites

- Python 3.x
- Git

### Installation and set up

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Johnny-FTW/my_portfolio.git
   
2. Navigate to the project directory:
    ```bash
    cd my_portfolio

3. Install project dependencies:
   ```bash
    pip install -r requirements.txt

4. Create a .env file in the project directory and add your Binance API key and secret:
    ```bash
    API_KEY='your_api_key'
    API_SECRET='your_api_secret'
   
Important Security Note: Do not share or expose your API key and secret. Keep your credentials confidential to prevent 
unauthorized access to your Binance account and potential security risks. Additionally, refrain from committing the .env 
file containing your keys to version control systems to ensure the safety of your sensitive information.

5. Open config.py and update the assets list with the cryptocurrencies you own:
    ```bash
    config = {
    'api_key': os.getenv("API_KEY"),
    'api_secret': os.getenv("API_SECRET"),
    'assets': ['ENS', 'BNB']  # Add your assets here
    }
   
6. Customize the chart appearance by modifying chart_data.js:
   ```bash
   // Modify background and hover colors as desired
      datasets: [{
         data: assetKeys.map(key => data[key]),
         backgroundColor: ["#FFE633", "#33D1FF"],
         hoverBackgroundColor: ["#F9FF33","#33E0FF"]
      }]
   ```

## Running the Application
Run the following command to start the application:
```bash
python run.py 
```
Open your web browser and visit http://localhost:5000 to view your portfolio.

## License
This project is licensed under the MIT License.


[Python.org]: https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/

[Flask.com]: https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/

[HTML.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://https://html.com//

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

[JS.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JS-url]: https://www.javascript.com/



[contributors-shield]: https://img.shields.io/github/contributors/Johnny-FTW/my_portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/Johnny-FTW/my_portfolio/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/Johnny-FTW/my_portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/Johnny-FTW/my_portfolio/network/members

[stars-shield]: https://img.shields.io/github/stars/Johnny-FTW/my_portfolio.svg?style=for-the-badge
[stars-url]: https://github.com/Johnny-FTW/my_portfolio/stargazers

[issues-shield]: https://img.shields.io/github/issues/Johnny-FTW/my_portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/Johnny-FTW/my_portfolio/issues

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/Johnny-FTW/my_portfolio/blob/main/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jan-hatapka-6b970b205/



