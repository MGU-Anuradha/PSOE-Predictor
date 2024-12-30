from flask import Flask, jsonify
import os
import h5py  # For reading MATLAB v7.3 files

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Welcome to the .MAT File Viewer</h1><p>Visit <a href="/view-mat">/view-mat</a> to view the .mat file contents.</p>'

@app.route('/view-mat', methods=['GET'])
def view_mat():
    # Specify the .mat file path
    mat_file_path = os.path.join(os.path.dirname(__file__), 'psoe.mat')

    # Check if the file exists
    if not os.path.exists(mat_file_path):
        return jsonify({'error': 'File not found'}), 404

    try:
        # Open the MATLAB v7.3 file
        with h5py.File(mat_file_path, 'r') as mat_file:
            # Extract keys and their datasets
            mat_data = {}
            for key in mat_file.keys():
                mat_data[key] = mat_file[key][:].tolist()  # Convert to list for JSON serialization

        return jsonify(mat_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
