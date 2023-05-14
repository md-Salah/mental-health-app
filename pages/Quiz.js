import { TouchableOpacity, StyleSheet, Button, Text, View } from "react-native";
import React, { useState } from "react";

const Quiz = () => {
  let questions = [
    {
      title: "Age",
      option: ["18-20", "21-23", "24-26", "27-29"],
      selected: "",
      required: true,
    },
    {
      title: "Academic Year",
      option: ["1st", "2nd", "3rd", "4th"],
      selected: "",
      required: true,
    },
    {
      title: "Department",
      option: [
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
      option: ["Yes", "No"],
      selected: "",
      required: true,
    },
  ];

  const [unselectedQuestions, setUnselectedQuestions] = useState(questions);
  const [result, setResult] = useState(false);

  const optionPress = ({ title, option }) => {
    setUnselectedQuestions(
      unselectedQuestions.filter((q) => q.title !== title)
    );
    questions = questions.map((q) => {
      if (q.title === title) {
        q.selected = option;
      }
      return q;
    });

    // End of questions, Show result
    if (unselectedQuestions.length === 1) {
      setResult(true);
      console.log(questions)
    }
  };

  return (
    <View style={styles.container}>
      {unselectedQuestions.map((question, index) => (
        <View style={styles.card} key={index}>
          {/* Question */}
          <View style={styles.top}>
            <Text style={styles.question}>{question.title}</Text>
          </View>

          {/* Choose Option */}
          <View style={styles.middle}>
            {question.option.map((op) => (
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
                {questions.length -
                  unselectedQuestions.length +
                  " / " +
                  questions.length}
              </Text>
            </View>

            {/* Skip Optional */}
            {question.required === false && (
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
      ))}

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
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 10,
    backgroundColor: "#800000",
    borderRadius: 5,
    padding: 20,
    margin: 0.5,
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
    fontWeight: "semibold",
  },
  middle: {
    height: "60%",
    paddingVertical: 30,
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
