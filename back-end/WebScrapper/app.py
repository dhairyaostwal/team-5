import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
# from flask_cors import CORS, cross_origin
import logging
import slate3k as slate



app = Flask(__name__)


UPLOAD_FOLDER = './'
ALLOWED_EXTENSIONS = set(['pdf'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/extract-from-file', methods=['POST'])
def extractFromFile():
    target=os.path.join(UPLOAD_FOLDER,'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    
    file = request.files['myFile'] 
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response="Whatever you wish too return"
    return response


# flask_cors.CORS(app, expose_headers='Authorization')

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

    # experience_index = all_details_with_separater.index("Experience")
    # response_data["Experience"] = [

    # ]  
    

    return response_data

