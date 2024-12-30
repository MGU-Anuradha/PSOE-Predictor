import h5py
import numpy as np
import pandas as pd

# Load psoe.mat
psoe_file = h5py.File('psoe.mat', 'r')
psoe_data = psoe_file['psoe'][:]  # Assuming 'psoe' is the key
time_psoe = psoe_data[0, :]  # First row is time
angle = psoe_data[1, :]  # Second row is angle

# Load Vq.mat
vd_file = h5py.File('Vd.mat', 'r')
vd_data = vd_file['Vd'][:]  # Assuming 'Vq' is the key
time_vd = vd_data[0, :]  # First row is time
voltage = vd_data[1, :]  # Second row is voltage

# Print time arrays for inspection
print("Time (PSOE):", time_psoe)
print("Time (Vq):", time_vd)

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
