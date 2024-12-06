from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the ANN Backend!"})

@app.route('/predict', methods=['POST'])
def predict():
    # Example: Handle a POST request and return dummy data
    data = request.json['features']  # Input from frontend
    prediction = sum(data) * 0.5  # Dummy prediction logic
    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)
