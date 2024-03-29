import { TouchableOpacity, StyleSheet, Button, Text, View, ImageBackground, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import { qtn, categories } from './questions'
import Result from "../Result/Result";

const Quiz = () => {

  const getResult = async (features) => {
    try {
      const response = await fetch('http://13.233.2.223:5021/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(features),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  const [questions, setQuestions] = useState(qtn);
  const [prediction, setPrediction] = useState(null);
  const [err, setErr] = useState(null);

  const handleOptionPress = ({ name, value }) => {
    const updatedQuestions = questions.map((q) => {
      if (q.name === name) {
        return { ...q, selected: value };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async() => {
    
    let features = {};
    let isError = false;
    
    questions.forEach((question) => {
      if (question.selected !== null) {
        features[question.name] = question.selected;
      }
      else {
        isError = true;
        setErr(`Please select an option for the question "${question.text}"`);
      }
    });
    
    if (!isError) {
      // Get result
      let data = await getResult(features);
      console.log(data);
      if (data.msg === 'success') {
        setErr(null);
        setPrediction(categories[data.prediction]);
      }
      else{
        setPrediction(null)
        setErr('Having trouble to connect classifier model. Please try again.')
      }
    }

    // console.log(features);
  }

  const resetQuiz = () => {
    setQuestions(qtn);
    setPrediction(null);
    setErr(null);
  }

  const QuestionCard = ({ question }) => {
    return (
      <View style={styles.card}>
        <ImageBackground source={require('../../images/result-bg.jpg')} style={styles.hospitalItem}>

          {/* Question */}
          <View style={styles.top}>
            <Text style={styles.question}>{question.text}</Text>
          </View>

          {/* Choose Option */}
          <View style={styles.middle}>
            {question.options.map((op) => (
              <TouchableOpacity
                style={[styles.option, question.selected === op.value && styles.selectedOption]}
                key={op.text}
                onPress={() => handleOptionPress({ name: question.name, value: op.value })}
              >
                <Text style={styles.optionText}>{op.text}</Text>
                {question.selected === op.value && (
                  <Icon name="check-circle" size={20} color="white" style={styles.checkIcon} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {prediction ? (
        <Result prediction={prediction} resetQuiz={resetQuiz} />
      ) : (
        <ScrollView style={styles.container}>
          {
            questions.map((question) => (
              <QuestionCard key={question.name} question={question} />
            ))
          }
          {/* Error */}
          {err && <Text style={styles.errText}>{err}</Text>}

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleSubmit}
          >
            <Text style={styles.optionText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
  },
  card: {
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  hospitalItem: {
    padding: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  top: {
  },
  question: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  middle: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  options: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  option: {
    backgroundColor: "#FC734D",
    marginVertical: 6,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: "row",
  },
  selectedOption: {
    backgroundColor: "gray",
  },
  optionText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: 'white',
    width: "100%",
  },
  checkIcon: {
    marginLeft: '-15%',
  },
  errText: {
    color: 'red',
    marginHorizontal: 10,
    textAlign: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize'
  },
  submitBtn: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
  },
});
