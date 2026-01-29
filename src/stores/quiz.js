import { defineStore } from "pinia";
import { quizBank } from "../data/quizBank";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: quizBank,
    currentIndex: 0,
  }),
  getters: {
    currentQuestion(state) {
      return state.questions[state.currentIndex] || null;
    },
  },
  actions: {
    resetQuiz() {
      this.currentIndex = 0;
    },
  },
});
