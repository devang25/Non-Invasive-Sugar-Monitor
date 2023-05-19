import pickle
import json
import numpy as np
import sklearn

__data_columns = None
__model = None


def get_estimated_sugar(age, bmi, acetone, humidity, gender):
    x = np.zeros(len(__data_columns))
    print("value of x is", x)
    x[0] = age
    x[1] = acetone
    x[2] = bmi
    x[3] = gender

    return round(__model.predict([x])[0], 3)


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns

    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']

    global __model
    if __model is None:
        with open('./artifacts/prediction.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")


def get_data_columns():
    return __data_columns


if __name__ == '__main__':
    # load_saved_artifacts()

    # Random Tests
    print(get_estimated_sugar(21, 175, 22, 0))
