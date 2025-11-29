from fastapi import FastAPI
from pydantic import BaseModel
import pickle
from pathlib import Path

app = FastAPI(title="FinanciaX ML")
model_path = Path(__file__).resolve().parent.parent / 'models' / 'model.pkl'
model = None
if model_path.exists():
  with open(model_path, 'rb') as f:
    model = pickle.load(f)

class PredictRequest(BaseModel):
  text: str

class RecommendRequest(BaseModel):
  income: float
  expenses: float

@app.post('/ml/predict/category')
def predict(req: PredictRequest):
  if not model:
    return { 'status': 'error', 'error': 'model_not_loaded' }
  label = model.predict([req.text])[0]
  proba = max(model.predict_proba([req.text])[0])
  return { 'status': 'ok', 'data': { 'label': label, 'confidence': proba } }

@app.post('/ml/recommend/savings-plan')
def recommend(req: RecommendRequest):
  savings = max(req.income - req.expenses, 0)
  return { 'status': 'ok', 'data': { 'recommended_monthly_savings': savings * 0.2 } }

@app.get('/ml/stats')
def stats():
  return { 'status': 'ok', 'data': { 'model_loaded': bool(model) } }
