import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'

df = pd.read_csv(url, error_bad_lines=False)

country = df.loc[df['Country/Region']=="Denmark"].index
country = country[len(country)-1]

data = df.to_numpy()
nyeSmittede = np.diff(data[country,-80:])
dage = np.array(range(0,len(nyeSmittede)))


df = pd.DataFrame({"dage" : dage, "nye smittede" : nyeSmittede})
df.to_csv("data.csv", index=False)

plt.plot(dage,nyeSmittede, "o")

plt.show()
