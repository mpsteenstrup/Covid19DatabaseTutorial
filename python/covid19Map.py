import plotly.express as px
import pandas as pd
import numpy as np

df = pd.read_csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv')

#for cols in df.columns.tolist()[1:]:
#    df = df.loc[df.iloc[:,-1] > 0]
#    df = df.loc[df['Long']!=0]

df.drop(df[df.iloc[:,-1]<=0].index, inplace=True)
df.drop(df.loc[df['Long']==0].index, inplace=True)



sizes = df.iloc[0:,-1].transform(np.log)
print(sizes)
text =df['Country/Region']+ ' ' + df.iloc[:,-1].astype(str)
fig = px.scatter_geo(df, lon = df['Long'], lat = df['Lat'], hover_name=text, size=sizes)

fig.update_geos(
    resolution=50,
    showcountries=True, countrycolor="RebeccaPurple"
)
fig.show()
