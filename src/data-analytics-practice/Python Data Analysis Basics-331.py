## 1. Reading the MoMA Dataset ##

from csv import reader

# Read the `artworks_clean.csv` file
opened_file = open('artworks_clean.csv')
read_file = reader(opened_file)
moma = list(read_file)
moma = moma[1:]

# Convert the birthdate values
for row in moma:
    birth_date = row[3]
    if birth_date != "":
        birth_date = int(birth_date)
    row[3] = birth_date
    
# Convert the death date values
for row in moma:
    death_date = row[4]
    if death_date != "":
        death_date = int(death_date)
    row[4] = death_date

# Write your code below
for row in moma:
    date = row[6]
    if date != "":
        date = int(date)
    row[6] = date

## 2. Calculating Artist Ages ##

ages =[]
for row in moma:
    date = row[6]
    birth = row[3]
    if type(birth) == int:
        age = date - birth
    else:
        age = 0
    ages.append(age)
    
final_ages = []

for age in ages:
    if age > 20:
        final_age = age
    else:
        final_age = "Unknown"
    final_ages.append(final_age)
print(final_ages)

## 3. Converting Ages to Decades ##

# The final_ages variable is available
# from the previous screen
decades = []
for age in final_ages:
    if age == "Unknown":
        decade = age
    else:
        decade = str(age)
        decade = decade[:-1] + '0s'
    decades.append(decade)
print(decades)

## 4. Summarizing the Decade Data ##

# The decades variable is available
# from the previous screen
decade_frequency = {}
for decade in decades:
    if decade not in decade_frequency:
        decade_frequency[decade] = 1
    else:
        decade_frequency[decade] += 1
        
print(decade_frequency)

## 5. Inserting Variables into Strings ##

artist = "Pablo Picasso"
birth_year = 1881

template = "{artist_name}'s birth year is {year}."
sentence = template.format(artist_name = artist, year = birth_year)
print(sentence)

## 6. Creating an Artist Frequency Table ##

artist_freq = {}
for row in moma:
    name = row[1]
    if name not in artist_freq:
        artist_freq[name] = 1
    else:
        artist_freq[name] += 1

## 7. Creating an Artist Summary Function ##

def artist_summary(name):
    works_count = artist_freq[name]
    template = "There are {count} artworks by {artist} in the data set"
    message = template.format(count = works_count, artist = name)
    print(message)
    
artist_summary("Henri Matisse")

## 8. Formatting Numbers Inside Strings ##
# practice with the format function and the specifications for displaying numbers
pop_millions = [
    ["China", 1379.302771],
    ["India", 1281.935991],
    ["USA",  326.625791],
    ["Indonesia",  260.580739],
    ["Brazil",  207.353391],
]
template = "The population of {name} is {pop:,.2f} million" # { <variable_name> : <colon separator> , <comma for big numners> .2f <float number precision> }
for country in pop_millions:
    name = country[0]
    pop = country[1]
    pop_statement = template.format(name = name, pop = pop)
    print(pop_statement)

## 9. Challenge: Summarizing Artwork Gender Data ##

# create a frequency table for number of artworks by each gender
gender_freq = {}
for row in moma:
    gender = row[5]
    if gender not in gender_freq:
        gender_freq[gender] = 1
    else:
        gender_freq[gender] += 1

#  dicplay the formatted data
for gender, count in gender_freq.items():
    template = "There are {count:,} artworks by {gender} artists"
    print(template.format(count = count, gender = gender))