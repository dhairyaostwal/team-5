import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
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
    
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response="Whatever you wish too return"
    return response


# flask_cors.CORS(app, expose_headers='Authorization')

@app.route('/pdf-extract')
def extract_pdf():
    with open('Profile.pdf','rb') as f:
        extracted_text = slate.PDF(f)
    print(extracted_text)
    all_details_in_file = extracted_text[0]
    all_details_with_separater = all_details_in_file.split(sep='\n')
    # all_details_with_separater.remove("")
    all_details_with_separater = list(filter(lambda element: element != "", all_details_with_separater))
    return {"text": all_details_with_separater}

