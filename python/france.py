import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import numpy as np
from numpy import convolve
import pandas as pd
from datetime import date
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

def movingaverage (values, window):
    weights = np.repeat(1.0, window)/window
    sma = np.convolve(values, weights, 'valid')
    return sma

def lin(x,a,b):
    return a*x+b

url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'

df = pd.read_csv(url, error_bad_lines=False)

#print(df.head(10))
country = "France"
country = df.loc[df['Country/Region']==country].index
country = country[len(country)-1]
datoen = df.columns.get_loc('5/1/21')
data = df.to_numpy()
head = df.columns.to_numpy()
#datoen = 475
x = head[datoen:]
y = data[country,datoen:].astype(int)
y = movingaverage(y,7)


y = np.diff(y,n=1)*7/65e6*1e5
for i in range(0,len(y)):
    if y[i]<0:
        y[i]=y[i-1]



dage = np.array(range(0,len(y)))

popt, pcov = curve_fit(lin,dage,y,[1.3,0.5])


plt.plot_date(x[len(x)-len(y):],y)
plt.plot(x[len(x)-len(y):],lin(dage,*popt),'r-')

plt.xticks(np.arange(0, len(x)+1, 4))

print(x[0])
print('datoen {} er der  et incidenstal på {:.2f}'.format(x[-1],y[-1]))
print('datoen {} er der det forventede incidenstal på {:.2f}'.format(x[-1],lin(len(x),*popt)))
print('om en uge forventes den at være incidenstal på {:.2f}'.format(lin(len(x)+10,*popt)))


plt.xticks(rotation=45)
plt.grid()
plt.show()
