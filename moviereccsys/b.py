from bs4 import BeautifulSoup as SOUP
import re
import requests as HTTP
from flask import Flask, request, jsonify, Response, stream_with_context, json
from flask_cors import CORS
import random
from imdb import IMDb
ia = IMDb()  
app = Flask(__name__)
CORS(app)

def scrape_movie_details(movie):
    title = movie.find_all("a")[0].get_text()
    year = movie.find_all("span", class_="lister-item-year")[0].get_text()
    genre = movie.find_all("span", class_="genre")[0].get_text().strip()
    rating = movie.find_all("div", class_="ratings-bar")[0].find_all("strong")[0].get_text()
    director = movie.find_all("p")[2].find_all("a")[0].get_text()
    cast_list = movie.find_all("p")[2].find_all("a")
    cast = [", ".join(a.get_text() for a in cast_list[1:4]) ] 
    imdb_link = "https://www.imdb.com" + movie.find_all("a")[0]["href"]
    movie_id = re.search(r'/title/(\w+)/', imdb_link).group(1)
    name = ia.get_movie(movie_id[2:])
    poster = name.data['cover url']
    return {"title": title, "year": year, "genre": genre, "rating": rating, "cast": cast, "director": director, "imdb_link": imdb_link, "poster":poster}

def main(emotion):
    if (emotion == "Sad"):
        urlhere = 'https://www.imdb.com/search/title/title_type=movie&genres=romance,comedy&sort=num_votes,desc&explore=title_type,genres&count=10'
    elif (emotion == "Happy"):
        urlhere = 'https://www.imdb.com/search/title/?title_type=movie&genres=sci-fi,action&sort=num_votes,desc&explore=title_type,genres&count=10'
    elif (emotion == "Bored"):
        urlhere = 'https://www.imdb.com/search/title/?title_type=movie&genres=mystery,thriller&sort=num_votes,desc&explore=title_type,genres&count=10'
    elif (emotion == "Angry"):
        urlhere = 'https://www.imdb.com/search/title/?title_type=feature&genres=musical&sort=num_votes,desc&count=10'
    elif (emotion == "Stressed"):
        urlhere = 'https://www.imdb.com/search/title/?title_type=movie&genres=fantasy,adventure&sort=num_votes,desc&explore=title_type,genres&count=10'
    response = HTTP.get(urlhere)
    data = response.text
    soup = SOUP(data, "lxml")
    for movie in soup.find_all("div", class_="lister-item-content"):
        # Scrape movie details and send it to the frontend using Flask's stream_with_context
        movie_details = scrape_movie_details(movie)
        yield (json.dumps({'movie': movie_details}) + '\n').encode('utf-8')

@app.route('/movies', methods=['GET'])
def get_recommendations():
 # Get emotion from the request body
 emotion = request.args.get('emotion')
 return Response(stream_with_context(main(emotion)),mimetype='text/event-stream')
