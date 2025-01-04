import h5py
import numpy as np
import pandas as pd

# Load psoe.mat
with h5py.File('psoe.mat', 'r') as psoe_file:
    psoe_data = psoe_file['psoe'][:]  # Extract the dataset
    time_psoe = psoe_data[:, 0]  # First column is time
    angle = psoe_data[:, 1]      # Second column is angle

# Load Vd.mat
with h5py.File('Vd.mat', 'r') as vd_file:
    vd_data = vd_file['Vd'][:]  # Extract the dataset
    time_vd = vd_data[:, 0]     # First column is time
    voltage = vd_data[:, 1]     # Second column is voltage

# Verify if time arrays match
if not np.array_equal(time_psoe, time_vd):
    raise ValueError("Time arrays in the two files do not match!")

# Create a combined DataFrame
data = {
    'Time (s)': time_psoe,
    'PSOE Angle': angle,
    'Voltage (Vd)': voltage
}
df = pd.DataFrame(data)

# Save the combined data to a CSV file for inspection
df.to_csv('combined_data.csv', index=False)
print("Combined data saved to 'combined_data.csv'")

# Inspect the first few rows
print("Preview of combined data:")
print(df.head())
