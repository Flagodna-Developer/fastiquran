from flask import Flask, request
import os

app = Flask(__name__)
DATA_DIR = "data"  # Keep this as "data"


@app.route("/<path:filepath>", methods=["GET"])
def handle_file(filepath):
    full_path = os.path.join(DATA_DIR, filepath)
    full_path = os.path.normpath(full_path)

    print(f"DEBUG - Full Path: {full_path}")  # Log the resolved path

    # Security check (updated)
    if not os.path.abspath(full_path).startswith(os.path.abspath(DATA_DIR) + os.sep):
        return "Invalid path", 400

    if os.path.isfile(full_path):
        with open(full_path, "r") as f:
            return f.read(), 200
    return "Not found", 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
