#import dependencies
from flask import Flask, render_template, redirect

app = Flask(__name__, template_folder="templates")

#Define routes
@app.route('/')
def bars():

    import warnings
    warnings.filterwarnings('ignore')

    import sqlalchemy
    from sqlalchemy.ext.automap import automap_base
    from sqlalchemy.orm import Session
    from sqlalchemy import create_engine
    from sqlalchemy import func
    from sqlalchemy import or_
    import pandas as pd

    engine = create_engine("sqlite:///stackedmedals.sqlite", echo=False)

    Base = automap_base()
    Base.prepare(engine, reflect=True)
    Base.classes.keys()

    olympics = Base.classes.joyce

    session = Session(engine)
    masterPull = session.query(olympics.ID, olympics.name, olympics.year, olympics.gold, olympics.silver,olympics.bronze).all()
    
    finalPull = []
    for i in masterPull:
        finalPull.append({"id": i[0], "name": i[1], "year": i[2], "gold": i[3], "silver": i[4], "bronze":i[5]})

    return render_template("joyce.html", newSet=finalPull)

@app.route('/vito')
def map():

    return render_template("/country_medals.html")
# Run App
if __name__ == "__main__":
    app.run(debug=True)