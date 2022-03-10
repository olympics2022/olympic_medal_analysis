from flask import Flask, render_template, redirect, url_for
# from flask_pymongo import PyMongo

# Flask instance
app = Flask(__name__)

# # Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "http://localhost:5500/homepage.html"
# # mongo = PyMongo(app)


@app.route("/")
def home():
   
   return render_template("homepage.html")

@app.route("/map")
def map():
   return render_template("index.html", code=302)
   # return redirect('/', code=302)
if __name__ == "__main__":
   app.run(debug=True)