import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit


url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'

df = pd.read_csv(url, on_bad_lines='skip')

country = df.loc[df['Country/Region']=="Denmark"].index
country = country[len(country)-1]
n = int(input('angiv antal dage vi ser tilbage: '))
m = int(input('angiv antal dage vi ser frem: '))
d = int(input('angiv antal dage som regressionen skal se bort fra: '))
#
data = df.to_numpy()
nyeSmittede = np.diff(data[country,-n:])
dage = np.array(range(0,len(nyeSmittede)))


df = pd.DataFrame({"dage" : dage, "nye smittede" : nyeSmittede})
df.to_csv("data15december.csv", index=False)

def func(x,a,b,c):
  return a/(1+b*np.exp(c*x))

nyeSmittedeReg = nyeSmittede[:-d]
dageReg = dage[:-d]
popt, pcov = curve_fit(func,dageReg, nyeSmittedeReg,[7000,20,0.01])

print(f"a = {popt[0]:.2e}, b = {popt[1]:.2e}, c = {popt[2]:.2e},")
print(f"dagens tal er {nyeSmittede[-1]}")
#print(pcov)

x = np.arange(0,n+m)
plt.plot(x-n,func(x,*popt),'r-')
plt.plot(dage-n,nyeSmittede, "o")
plt.grid()
plt.show()
