import os

config = {
    'api_key': os.getenv("API_KEY"),
    'api_secret': os.getenv("API_SECRET"),
    'assets': ['ENS', 'BNB']  # add your assets here
}
