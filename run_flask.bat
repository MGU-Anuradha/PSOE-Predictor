@echo off
:: Navigate to your project directory 
cd /d "%~dp0\motormind-backend"

:: Activate the virtual environment
call venv\Scripts\activate

:: Run the Flask app
python app.py

:: Pause to keep the window open after the app starts
pause
