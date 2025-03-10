from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/tarifs')
def tarifs():
    return render_template("tarifs.html")

@app.route('/formations')
def formations():
    return render_template("formations.html")

if __name__ == '__main__':
    app.run(debug=True)