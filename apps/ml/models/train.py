import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

def train(texts, labels):
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer()),
        ('clf', LogisticRegression(max_iter=200)),
    ])
    pipeline.fit(texts, labels)
    return pipeline

if __name__ == '__main__':
    sample_texts = ['grocery store', 'salary payment', 'electric bill']
    sample_labels = ['food', 'income', 'utilities']
    model = train(sample_texts, sample_labels)
    with open('model.pkl', 'wb') as f:
        pickle.dump(model, f)
    print('model saved')
