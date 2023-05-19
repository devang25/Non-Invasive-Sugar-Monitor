from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import util

app = Flask(_name_)
CORS(app)


@app.route('/predict_sugar', methods=['POST'])
def predict_sugar():
    data = request.get_json()
    print(data)
    age = int(data['age'])
    bmi = float(data['bmi'])
    acetone = float(data['acetone'])
    humidity = float(data['humidity'])
    gender = int(data['gender'])

    estimated_sugar = util.get_estimated_sugar(age, bmi, acetone, humidity, gender)

    response = jsonify({'estimated_sugar': estimated_sugar})
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "_main_":
    print("Starting Python Flask Server For Blood Sugar Prediction...")
    util.load_saved_artifacts()
    app.run()