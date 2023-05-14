import { TouchableOpacity, StyleSheet, Button, Text, View } from "react-native";
import React, { useState } from "react";

const Quiz = () => {
  let qtn = [
    {
      title: "Age",
      options: ["18-20", "21-23", "24-26", "27-29"],
      selected: "",
      required: true,
    },
    {
      title: "Academic Year",
      options: ["1st year", "2nd year", "3rd year", "4th year"],
      selected: "",
      required: true,
    },
    {
      title: "Department",
      options: [
        "Engineering",
        "Medical",
        "Business Administration",
        "Bachelor of Science",
        "Bachelor of Social Sciences",
      ],
      selected: "",
      required: false,
    },
    {
      title: "Are you happy about your academic condition?",
      options: ["Yes", "No"],
      selected: "",
      required: true,
    },
  ];

  const [questions, setQuestions] = useState(qtn);
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(false);

  const optionPress = ({ title, option }) => {
    let updatedQuestions = questions.map((q) => {
      if (q.title === title) q.selected = option;
      return q;
    });
    setQuestions(updatedQuestions);
    setCounter((count) => count + 1);
    
    if (counter === questions.length - 1) {
      setResult(true);
      // Send user answers to server for applying machine learning
      // console.log(questions);
    }
  };

  return (
    <View style={styles.container}>
      {questions.map((question, index) => {
        if (question.selected === "")
          return (
            <View style={styles.card} key={index}>
              {/* Question */}
              <View style={styles.top}>
                <Text style={styles.question}>{question.title}</Text>
              </View>

              {/* Choose Option */}
              <View style={styles.middle}>
                {question.options.map((op) => (
                  <TouchableOpacity
                    style={styles.option}
                    key={op}
                    onPress={() =>
                      optionPress({ title: question.title, option: op })
                    }
                  >
                    <Text style={styles.optionText}>{op}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.bottom}>
                {/* Question Counter */}
                <View>
                  <Text style={styles.counter}>
                    {counter + " / " + questions.length}
                  </Text>
                </View>

                {/* Skip Button - Optional question */}
                {!question.required && (
                  <TouchableOpacity
                    style={styles.skipBtn}
                    onPress={() =>
                      optionPress({ title: question.title, option: " " })
                    }
                  >
                    <Text style={{ color: "#800000", fontWeight: "bold" }}>
                      Skip
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
      })}

      {/* Result */}
      {result && <Text>Result Page</Text>}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  card: {
    marginVertical: "10%",
    marginHorizontal: 10,
    backgroundColor: "#800000",
    borderRadius: 5,
    padding: 20,
    height: "90%",
  },
  top: {
    height: "20%",
    paddingVertical: 5,
  },
  question: {
    marginTop: 10,
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 30,
  },
  middle: {
    height: "60%",
    paddingTop: 50,
  },
  options: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  option: {
    backgroundColor: "white",
    marginVertical: 6,
    paddingVertical: 12,
    borderRadius: 5,
  },
  optionText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#800000",
  },
  bottom: {
    height: "20%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  counter: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  skipBtn: {
    width: "40%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
});
