import time
from flask import Flask, request, jsonify, Response
import requests
import json
import base64
from flask_cors import CORS


app = Flask(__name__)

CORS(app)


@app.route('/')
def hello():
    #count = get_hit_count()
    #return 'Hello World! I have been seen {} times.\n'.format(count)
    return "Hi! Alas theres nothing here, but hopefully soon! "

@app.route('/api/')
def base_query():
    return Response(status=204)


@app.route('/api/genes')
def gene_search():
    symbol = request.args.get('symbol')

    if symbol != None:
        uri = '''https://www.metabolomicsworkbench.org/rest/gene/gene_symbol/{}/all'''.format(symbol)
        response = requests.get(uri)
        if response.status_code == 200 and response.text != '[]':
            return json.loads(response.text)
        return Response(status=204)
    else:
        return Response(status = 204)


@app.route('/api/metabolites')
def metabolite_search():
    name = request.args.get('name')
    if name != None:
        uri = '''https://www.metabolomicsworkbench.org/rest/refmet/name/{}/all/'''.format(name)
        response = requests.get(uri)
        if response.status_code == 200 and response.text != '[]':
            # Data
            #obj = json.loads(response.text)
            obj = response.json()

            #  Find Image
            img_uri = '''https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{}/PNG'''.format(name)
            img_response = requests.get(img_uri)
            if img_response.status_code == 200:
                img_data = img_response.text
                #return base64.b64encode(bytes(img_data, 'utf-8'))

                #obj['img'] = base64.b64encode(bytes(img_data, 'utf-8'))
                #obj['img'] = base64.b64encode(bytes(img_data, 'utf-8'))
                #obj['img'] = base64.b64encode(img_data.read())
                obj['img'] = img_response.text

            else:
                obj['img'] = ''
            return obj
        return Response(status=204)
    else:
        return Response(status = 204)      

@app.route('/api/metabolites/image')
def metabolite_img_search():
    name = request.args.get('name')
    if name != None:
        uri = '''https://www.metabolomicsworkbench.org/rest/refmet/name/{}/all/'''.format(name)
        response = requests.get(uri)
        if response.status_code == 200 and response.text != '[]':
            return json.loads(response.text)
        return Response(status=204)
    else:
        return Response(status = 204)  

#  SAve Results to PostGres
@app.route('/results/save')
def save_results():
    response = requests.get("https://www.metabolomicsworkbench.org/rest/study/study_id/ST00001/summary")
    return str(response.status_code)  

@app.route('/results/update')
def update_results():
    response = requests.get("https://www.metabolomicsworkbench.org/rest/study/study_id/ST00001/summary")
    return str(response.status_code)    

@app.route('/results/delete')
def delete_results():
    response = requests.get("https://www.metabolomicsworkbench.org/rest/study/study_id/ST00001/summary")
    return str(response.status_code)
