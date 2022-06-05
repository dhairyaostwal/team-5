from distutils.file_util import write_file
import os
import json
from flask_pymongo import PyMongo
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
# from flask_cors import CORS, cross_origin
import logging
import slate3k as slate



app = Flask(__name__)

# mongodb_client = PyMongo(app, uri="mongodb://localhost/linkedin")
# db = mongodb_client.db

app.config["MONGO_URI"] = "mongodb://localhost/linkedin"
mongodb_client = PyMongo(app)
db = mongodb_client.db


# UPLOAD_FOLDER = './'
ALLOWED_EXTENSIONS = set(['pdf'])

# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# @app.route('/extract-from-file', methods=['POST'])
# def extractFromFile():
#     target=os.path.join(UPLOAD_FOLDER,'test_docs')
#     if not os.path.isdir(target):
#         os.mkdir(target)
    
#     file = request.files['myFile'] 
#     filename = secure_filename(file.filename)
#     destination="/".join([target, filename])
#     file.save(destination)
#     session['uploadFilePath']=destination
#     response="Whatever you wish too return"
#     return response


# flask_cors.CORS(app, expose_headers='Authorization')
# def write_json(new_data, filename='..linkedinData.json'):
#     with open(filename,'r+') as file:
#         file_data = json.load(file)
#         file_data["userLinkedIn"].append(new_data)
#         file.seek(0)
#         json.dump(file_data, file, indent = 4)



@app.route('/pdf-extract', methods=['POST'])
def extract_pdf():
    print("Here")
    file = request.files['file'] 
    file.save('Profile.pdf')
    with open('Profile.pdf','rb') as f:
        extracted_text = slate.PDF(f)
    print(extracted_text)
    all_details_in_file = extracted_text[0]
    all_details_with_separater = all_details_in_file.split(sep='\n\n')
    all_details_with_separater = list(filter(lambda element: element != "", all_details_with_separater))
    print(all_details_with_separater)
    fields_in_file = ['Contact', 'Top Skills', 'Summary', 'Experience', 'Education']
    
    response_data = {}
    contact_index = all_details_with_separater.index("Contact")
    all_details_with_separater[contact_index+2] = all_details_with_separater[contact_index+2].replace('\n', '')
    all_details_with_separater[contact_index+2] = all_details_with_separater[contact_index+2].replace('(LinkedIn)', '')
    email = all_details_with_separater[contact_index+1]

    response_data["Contact"] = [
        all_details_with_separater[contact_index+1], 
        all_details_with_separater[contact_index+2]
    ]

    top_skills_index = all_details_with_separater.index("Top Skills")
    response_data["TopSkills"] = [
        all_details_with_separater[top_skills_index+1],
        all_details_with_separater[top_skills_index+2],
        all_details_with_separater[top_skills_index+3]
    ]

    response_with_email = {email: response_data}
    print(response_with_email)
    # db.linkedInData.insert_one(response_with_email)
    # write_file(response_with_email, '..linkedinData.json')
    with open("linkedinData.json", "r+") as file:
        data = json.load(file)
        data.update(response_with_email)
        file.seek(0)
        json.dump(data, file)
    print("here")
    return "Pdf received"
