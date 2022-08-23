## 1. Introducing Data Cleaning ##

# Read the text on the left, and then scroll to the bottom
# to find the instructions for the coding exercise

# Write your answer to the instructions below -- the list of
# lists is stored using the variable name `moma`
num_rows = len(moma) #museum of modern art data (defined in browser exercise)
print(num_rows)

## 2. Reading our MoMA Dataset ##

# import the reader function from the csv module
from csv import reader

# use the python built-in function open()
# to open the children.csv file
opened_file = open('artworks.csv')

# use csv.reader() to parse the data from
# the opened file
read_file = reader(opened_file)

# use list() to convert the read file
# into a list of lists format
moma = list(read_file)

# remove the first row of the data, which
# contains the column names
headers = moma[0]
moma = moma[1:]

# Write your code here

## 3. Replacing Substrings with the Replace Method ##

age1 = "I am thirty-one years old"
age2 = age1.replace('one', 'two')

## 4. Cleaning the Nationality and Gender Columns ##

# Variables you create in previous screens
# are available to you, so you don't need
# to read the CSV again
for row in moma:
    nationality = row[2]
    nationality = nationality.replace('(', '')
    nationality = nationality.replace(')','')
    row[2] = nationality
    # 
    gender = row[5]
    gender = gender.replace('(', '')
    gender = gender.replace(')','')
    row[5] = gender

## 5. String Capitalization ##

for row in moma:
    gender = row[5]
    if gender == '':
        gender = "Gender Unknown/Other"
    else:
        gender = gender.title()
    row[5] = gender
    
    nationality =row[2]
    if nationality == '':
        nationality = "Nationality Unknown"
    else:
        nationality = nationality.title()
    row[2] = nationality

## 6. Errors During Data Cleaning ##

def clean_and_convert(date):
    # check that we don't have an empty string
    if date != "":
        # move the rest of the function inside
        # the if statement
        date = date.replace("(", "")
        date = date.replace(")", "")
        date = int(date)
    return date

for row in moma:
    begin = row[3]
    end = row[4]
    begin = clean_and_convert(begin)
    end = clean_and_convert(end)
    row[3] = begin
    row[4] = end

## 7. Parsing Numbers from Complex Strings, Part One ##

test_data = ["1912", "1929", "1913-1923",
             "(1951)", "1994", "1934",
             "c. 1915", "1995", "c. 1912",
             "(1988)", "2002", "1957-1959",
             "c. 1955.", "c. 1970's", 
             "C. 1990-1999"]

bad_chars = ["(",")","c","C",".","s","'", " "]

def strip_characters(string):
    for char in bad_chars:
        string = string.replace(char, '')
    return string
    
stripped_test_data =[]
for year in test_data:
    year = strip_characters(year)
    stripped_test_data.append(year)
    
print(stripped_test_data)

## 8. Parsing Numbers from Complex Strings, Part Two ##

test_data = ["1912", "1929", "1913-1923",
             "(1951)", "1994", "1934",
             "c. 1915", "1995", "c. 1912",
             "(1988)", "2002", "1957-1959",
             "c. 1955.", "c. 1970's", 
             "C. 1990-1999"]

bad_chars = ["(",")","c","C",".","s","'", " "]

def strip_characters(string):
    for char in bad_chars:
        string = string.replace(char,"")
    return string

stripped_test_data = ['1912', '1929', '1913-1923',
                      '1951', '1994', '1934',
                      '1915', '1995', '1912',
                      '1988', '2002', '1957-1959',
                      '1955', '1970', '1990-1999']

def process_date(date):
    if len(date) > 4:
        date = date.split('-')
        start = int(date[0])
        end = int(date[1])
        avg = round((start + end) / 2)
        date = avg
    else:
        date = int(date)
    return date

processed_test_data =[]
for date in stripped_test_data:
    date = process_date(date)
    processed_test_data.append(date)
    
# print(processed_test_data)

for row in moma:
    date = row[6]
    date = strip_characters(date)
    date = process_date(date)
    row[6] = date