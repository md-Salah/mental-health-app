import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      <Text style={styles.about}>
        Welcome to Mindful, a mental health app that helps you improve your well-being and cope with common issues such as stress, anxiety, depression, and more.
        Mindful is based on evidence-based therapies such as cognitive behavioral therapy (CBT), mindfulness-based stress reduction (MBSR), and positive psychology. With Mindful, you can access a variety of features such as:
        {"\n"}{"\n"}
        - Daily guided meditations to help you relax and focus.{"\n"}
        - Mood tracking to monitor your emotions and identify patterns.{"\n"}
        - Personalized goals and activities to improve your mental health.{"\n"}
        - Online chat with licensed therapists and peer support groups.{"\n"}
        - Educational articles and videos to learn more about mental health.{"\n"}
        {"\n"}
        Mindful is easy to use and affordable.
        You can download the app for free and try it for 7 days with no commitment.
        After that, you can choose a subscription plan that suits your needs and budget.
        Whether you want to boost your mood, reduce stress, overcome challenges, or simply live a happier life, Mindful is here to help you achieve your goals and support you along the way.
      </Text>
    </View >
  )
}

export default About

const styles = StyleSheet.create({
  about: {
    padding: 4,
    marginHorizontal: 6,
  }
})