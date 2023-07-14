import { TouchableOpacity, StyleSheet, Button, Text, View, ImageBackground, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import { qtn, categories } from './questions'
import Result from "../Result/Result";

const Quiz = () => {


  const [questions, setQuestions] = useState(qtn);
  const [prediction, setPrediction] = useState(categories[1]);
  const [result, setResult] = useState(false);
  const [err, setErr] = useState(null);

  const handleOptionPress = ({ title, value }) => {
    const updatedQuestions = questions.map((q) => {
      if (q.title === title) {
        return { ...q, selected: value };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const hasUnansweredQuestion = questions.some((q) => q.selected === '');
    if (hasUnansweredQuestion) {
      setErr('Please select an option for all questions.');
      return;
    }
    else {
      setErr(null);
      setResult(true);
    }
  }

  const resetQuiz = () => {
    setQuestions(qtn);
    setResult(false);
    setErr(null);
  }

  const QuestionCard = ({ question }) => {
    return (
      <View style={styles.card}>
        <ImageBackground source={require('../../images/result-bg.jpg')} style={styles.hospitalItem}>

          {/* Question */}
          <View style={styles.top}>
            <Text style={styles.question}>{question.title}</Text>
          </View>

          {/* Choose Option */}
          <View style={styles.middle}>
            {question.options.map((op) => (
              <TouchableOpacity
                style={[styles.option, question.selected === op && styles.selectedOption]}
                key={op}
                onPress={() => handleOptionPress({ title: question.title, value: op })}
              >
                <Text style={styles.optionText}>{op}</Text>
                {question.selected === op && (
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
      {result ? (
        <Result prediction={prediction} resetQuiz={resetQuiz} />
      ) : (
        <ScrollView style={styles.container}>
          {
            questions.map((question) => (
              <QuestionCard key={question.title} question={question} />
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
  errText: { color: 'red', textAlign: 'center', marginTop: 10, fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' },
  submitBtn: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
  },
});
