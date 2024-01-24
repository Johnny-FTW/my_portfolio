import requests
from flask import jsonify, render_template
from portfolio import app
from binance.client import Client
from portfolio.config import config

client = Client(config['api_key'], config['api_secret'])
ASSETS = config['assets']


def get_crypto_price_in_usdt(symbol):
    trading_pair = symbol + 'USDT'

    try:
        ticker = client.get_ticker(symbol=trading_pair)
        usdt_price = float(ticker['lastPrice'])
    except requests.RequestException as e:
        print(f"Error fetching data: {e}")
        usdt_price = 1.0

    return usdt_price


def get_asset_data(asset):
    balance = client.get_asset_balance(asset=asset)
    usdt_price = get_crypto_price_in_usdt(asset)
    total_value_usdt = float(balance['free']) * usdt_price
    coin_count = float(balance['free'])
    return total_value_usdt, coin_count, usdt_price


@app.route('/')
def chart():
    return render_template('index.html')


@app.route('/data')
def wallet():
    data = {}
    for asset in ASSETS:
        total_value_usdt, coin_count, usdt_price = get_asset_data(asset)
        data[f'{asset.lower()}_total_value_usdt'] = total_value_usdt
        data[f'{asset.lower()}_coin_count'] = coin_count
        data[f'{asset.lower()}_usdt_price'] = usdt_price
    return jsonify(data)
