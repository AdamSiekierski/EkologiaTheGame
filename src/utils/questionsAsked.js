import questions from '../assets/questions'

class QuestionsAsked {
  constructor() {
    this.asked = []

    this.add = this.add.bind(this);
  }

  add(question) {
    this.asked.push(question)

    if (this.asked.length === questions.length) {
      this.asked = [];
    }
  }
}

export default new QuestionsAsked()
