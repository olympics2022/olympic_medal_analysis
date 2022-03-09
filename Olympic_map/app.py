from flask import Flask, render_template, redirect, jsonify,  url_for
from flask_pymongo import PyMongo
import pandas as pd
import numpy as np

# Flask instance
app = Flask(__name__)
# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/mars_app"
mongo = PyMongo(app)


@app.route("/")
def home():
   return render_template("homepage.html")

@app.route("/map")
def map():
   return render_template("index.html")
   
if __name__ == "__main__":
   app.run(debug=True)