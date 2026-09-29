import { useState } from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import StoryBrain from "@/models/StoryBrain";

export default function HomeScreen() {
  const [storyBrain] = useState(() => new StoryBrain());
  const [currentStep, setCurrentStep] = useState(0);

  const handleChoice = (choiceNumber: 1 | 2) => {
    setCurrentStep(storyBrain.nextStory(choiceNumber, currentStep));
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar style="light" />
        <View key={currentStep} style={styles.container}>
          <View style={styles.storySection}>
            <Text style={styles.storyText}>
              {storyBrain.getStory(currentStep)}
            </Text>
          </View>

          <View style={styles.buttonSection}>
            <StoryButton
              backgroundColor="#e64a38"
              label={storyBrain.getChoice1(currentStep)}
              onPress={() => handleChoice(1)}
              style={[styles.button, styles.choice1Button]}
            />

            {storyBrain.buttonShouldBeVisible(currentStep) && (
              <StoryButton
                backgroundColor="#2196f3"
                label={storyBrain.getChoice2(currentStep)}
                onPress={() => handleChoice(2)}
                style={[styles.button, styles.choice2Button]}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

type StoryButtonProps = {
  backgroundColor: string;
  label: string;
  onPress: () => void;
  style: object;
};

function StoryButton({
  backgroundColor,
  label,
  onPress,
  style,
}: StoryButtonProps) {
  if (Platform.OS === "web") {
    return (
      <button
        type="button"
        aria-label={label}
        onClick={onPress}
        style={{
          alignItems: "center",
          backgroundColor,
          border: "none",
          borderRadius: 30,
          color: "#ffffff",
          display: "flex",
          fontFamily: "inherit",
          justifyContent: "center",
          minHeight: 60,
          padding: "12px 20px",
          width: "100%",
        }}
      >
        <span>{label}</span>
      </button>
    );
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={onPress}
      style={style}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
  },
  safeContainer: {
    flex: 1,
  },
  storySection: {
    alignItems: "center",
    flex: 6,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  storyText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 34,
    textAlign: "left",
  },
  buttonSection: {
    flex: 2,
    gap: 16,
    justifyContent: "flex-end",
    marginBottom: 12,
  },
  button: {
    alignItems: "center",
    borderRadius: 30,
    elevation: 3,
    justifyContent: "center",
    minHeight: 60,
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  pressedButton: {
    opacity: 0.78,
  },
  choice1Button: {
    backgroundColor: "#e64a38",
  },
  choice2Button: {
    backgroundColor: "#2196f3",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    textAlign: "center",
  },
});
