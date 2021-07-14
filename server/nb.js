const NaiveBayesClassifier = require('q2-machine-learning/naive-bayes/naive-bayes');
const DataManipulator = require('q2-machine-learning/data-manipulator/data-manipulator');

const got = require('got');

const test = async () => {
  console.log('Naive Bayes Tests');
  const url = 'output.csv';
  const manipulator = new DataManipulator();
  const resp = await got(url);
  await manipulator.loadCsv(resp.body);
console.log('hello12')
  // define config object for categorical columns, label column, etc.
  const config = {
    labelHeading: 'eligible',
    labelType: 'categorical',
    excludeColumns: [],
    categoricalCols: {
      age :{minor:0, middle:1, old:2},
      bloodpressure :{low:0, normal:1, high:2},
      bhdisease :{no:0, yes:1},
      diabetes: {no:0, mild:1, heavy:2},
      pulse: {low:0, normal:1, high:2},
      tatoo: {no:0, yes:1},
      allergy: {no:0, yes:1},

    }
  };
  manipulator.processData(config);
  console.assert(manipulator.X.length > 0, 'no samples read');
  const [features, labels] = manipulator.exportData();
  console.assert(features.shape[0] === labels.shape[0], 'sample size mismatch');

  const naiveBayes = new NaiveBayesClassifier();
  console.assert(Object.keys(naiveBayes.headers).length === 0, 'headers not null');
  console.log('hello31')
  // define which columns are numerical and which are categorical
  const modelConfig = {
    numericalCols: [],
    categoricalCols: ['age', 'bloodpressure', 'bhdisease', 'diabetes', 'pulse', 'tatoo', 'allergy']
  };

  // train naive bayes model with features, labels, column headers, and model config
  naiveBayes.train(features, labels, manipulator.getColumnHeaders(), modelConfig);
  console.assert(Object.keys(naiveBayes.headers).length !== 0, 'headers null');
  console.log('hello41')
  // create sample, predict
  //const x = [0, 0, 100000]; // ['dallas', 'female', 100000]
  const x = [1,1,0,0,1,0,0] // [minor, low, no, no, normal, no, no]
  const pred = naiveBayes.predict(x);
  console.log(pred)
  console.assert(pred === 0 || pred === 1, 'invalid class label');

  console.log('All Tests Passed');
}

test();