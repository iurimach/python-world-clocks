from flask import Flask, render_template,  request, redirect, session
from datetime import datetime, timedelta


import random


app = Flask(__name__)


app.config['SECRET_KEY'] = 'your_secret_key'

@app.route('/')
def index():
    if 'number' not in session:
        # Generate a random number between 1 and 100
        session['number'] = random.randint(1, 100)
        session['attempts'] = 0

    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    guess = int(request.form['guess'])
    session['attempts'] += 1

    if guess == session['number']:
        result = 'Congratulations! You guessed the correct number.'
        session.pop('number')  # Reset the number after correct guess
    elif guess < session['number']:
        result = 'Try a higher number.'
    else:
        result = 'Try a lower number.'

    return render_template('index.html', result=result)

@app.route('/reset')
def reset():
    session.pop('number', None)
    session.pop('attempts', None)
    return redirect('/')




@app.route('/gallery')
def gallery():
    # Fetching 10 dummy items for demonstration purposes
    items = [
        {'name': 'Laptop', 'image': 'laptop.jpg'},
        {'name': 'Mobile', 'image': 'mobile.jpg'},
        # Add more items as needed
    ]
    return render_template('gallery.html', items=items)

@app.route('/calculator')
def calculator():
    return render_template('calculator.html')

@app.route('/about')
def about():
    # Information about you
    about_me_info = {
        'address': 'New York',
        'phone': 'xxxx',
        'email': 'your_email@example.com',
        # Add more information as needed
    }
    return render_template('about.html', about_me_info=about_me_info)

if __name__ == '__main__':
    app.run(debug=True)
