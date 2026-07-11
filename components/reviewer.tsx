"use client"

import { useState } from "react"
import { sections, type MultipleChoiceQuestion, type IdentificationQuestion, type TrueFalseQuestion, type Question } from "@/data/questions"

type SectionIndex = 0 | 1 | 2
type AppScreen = "menu" | "quiz" | "results"

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function getQuestionKey(sectionIdx: number, q: Question) {
  return `${sectionIdx}-${q.id}`
}

function isAnswerCorrect(q: Question, ans: string) {
  if (q.type === "multiple-choice") return ans === (q as MultipleChoiceQuestion).answer
  if (q.type === "identification") return ans.trim().toLowerCase() === (q as IdentificationQuestion).answer.trim().toLowerCase()
  if (q.type === "true-false") return (ans === "Tama" && (q as TrueFalseQuestion).isCorrect) || (ans === "Mali" && !(q as TrueFalseQuestion).isCorrect)
  return false
}

export default function Reviewer() {
  const [screen, setScreen] = useState<AppScreen>("menu")
  const [sectionIdx, setSectionIdx] = useState<SectionIndex>(0)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const [questionOrder, setQuestionOrder] = useState<number[]>([])

  const section = sections[sectionIdx]
  const qs = questionOrder.length > 0 ? questionOrder.map(i => section.questions[i]) : section.questions
  const question = qs[currentQ]
  const totalQuestions = qs.length

  const key = getQuestionKey(sectionIdx, question)
  const userAnswer = answers[key] ?? ""

  function startSection(idx: SectionIndex, shuffle: boolean) {
    setSectionIdx(idx)
    setCurrentQ(0)
    setAnswers({})
    setShowAnswer(false)
    setShuffled(shuffle)
    if (shuffle) {
      setQuestionOrder(shuffleArray(sections[idx].questions.map((_, i) => i)))
    } else {
      setQuestionOrder([])
    }
    setScreen("quiz")
  }

  function handleAnswer(value: string) {
    if (showAnswer) return
    setAnswers(prev => ({ ...prev, [getQuestionKey(sectionIdx, question)]: value }))
  }

  function handleNext() {
    if (currentQ < totalQuestions - 1) {
      setCurrentQ(prev => prev + 1)
      setShowAnswer(false)
    } else {
      setScreen("results")
    }
  }

  function goToQuestion(idx: number) {
    setCurrentQ(idx)
    setShowAnswer(false)
  }

  function restart() {
    setScreen("menu")
    setCurrentQ(0)
    setAnswers({})
    setShowAnswer(false)
    setShuffled(false)
    setQuestionOrder([])
  }

  const score = Object.entries(answers).filter(([key, val]) => {
    const [si, qid] = key.split("-")
    const q = sections[Number(si)].questions.find(q => q.id === Number(qid))
    return q ? isAnswerCorrect(q, val) : false
  }).length

  if (screen === "menu") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-emerald-700">RIPH Reviewer</h1>
          <p className="text-lg text-zinc-500">Readings in Philippine History</p>
        </div>

        <div className="grid gap-4 w-full max-w-md">
          <button
            onClick={() => startSection(0, false)}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-left text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative z-10">
              <p className="text-sm font-medium text-emerald-100">PART I</p>
              <p className="text-2xl font-bold mt-1">Multiple Choice</p>
              <p className="text-sm text-emerald-100 mt-2">40 questions — Piliin ang tamang sagot</p>
            </div>
          </button>

          <button
            onClick={() => startSection(1, false)}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-left text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative z-10">
              <p className="text-sm font-medium text-blue-100">PART II</p>
              <p className="text-2xl font-bold mt-1">Identification</p>
              <p className="text-sm text-blue-100 mt-2">40 questions — Isulat ang tamang sagot</p>
            </div>
          </button>

          <button
            onClick={() => startSection(2, false)}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-6 text-left text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative z-10">
              <p className="text-sm font-medium text-amber-100">PART III</p>
              <p className="text-2xl font-bold mt-1">Tama o Mali</p>
              <p className="text-sm text-amber-100 mt-2">20 questions — Tukuyin kung Tama o Mali</p>
            </div>
          </button>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={() => startSection(0, true)}
            className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            Shuffle MC
          </button>
          <button
            onClick={() => startSection(1, true)}
            className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            Shuffle ID
          </button>
          <button
            onClick={() => startSection(2, true)}
            className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            Shuffle TF
          </button>
        </div>
      </div>
    )
  }

  if (screen === "results") {
    const total = totalQuestions
    const pct = Math.round((score / total) * 100)
    let grade: string, gradeColor: string
    if (pct >= 90) { grade = "A — Napakahusay!"; gradeColor = "text-emerald-600" }
    else if (pct >= 80) { grade = "B — Mahusay!"; gradeColor = "text-blue-600" }
    else if (pct >= 70) { grade = "C — Puwede pa"; gradeColor = "text-amber-600" }
    else if (pct >= 60) { grade = "D — Kailangan pang mag-aral"; gradeColor = "text-orange-600" }
    else { grade = "F — Kailangan pang mag-review"; gradeColor = "text-red-600" }

    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-zinc-100 text-5xl font-bold"
            style={{ color: pct >= 70 ? "#059669" : pct >= 50 ? "#d97706" : "#dc2626" }}>
            {pct}%
          </div>

          <div>
            <p className="text-2xl font-bold">{score} / {total}</p>
            <p className={classNames("text-lg font-semibold mt-1", gradeColor)}>{grade}</p>
          </div>

          <div className="space-y-3">
            {sections.map((sec, si) => {
              const secAnswers = Object.entries(answers).filter(([k]) => k.startsWith(`${si}-`))
              const secScore = secAnswers.filter(([k, v]) => {
                const q = sec.questions.find(q => q.id === Number(k.split("-")[1]))
                return q ? isAnswerCorrect(q, v) : false
              }).length
              return (
                <div key={si} className="flex justify-between text-sm px-4 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900">
                  <span className="font-medium">{sec.title}: {sec.subtitle}</span>
                  <span>{secScore} / {sec.questions.length}</span>
                </div>
              )
            })}
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <button
              onClick={restart}
              className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-emerald-500 active:scale-[0.97]"
            >
              Back to Menu
            </button>
            <button
              onClick={() => { setScreen("quiz"); setCurrentQ(0); setShowAnswer(false) }}
              className="rounded-xl border border-zinc-200 px-6 py-3 font-semibold text-zinc-600 transition-all hover:bg-zinc-50 active:scale-[0.97] dark:border-zinc-800 dark:text-zinc-400"
            >
              Review Answers
            </button>
          </div>
        </div>
      </div>
    )
  }

  function renderChoices() {
    if (question.type === "multiple-choice") {
      const mc = question as MultipleChoiceQuestion
      return (
        <div className="grid gap-2.5">
          {mc.choices.map((choice, i) => {
            const letter = String.fromCharCode(97 + i)
            const isSelected = userAnswer === choice
            const isAnswer = showAnswer && choice === mc.answer
            const isWrong = showAnswer && isSelected && choice !== mc.answer
            return (
              <button
                key={choice}
                onClick={() => handleAnswer(choice)}
                className={classNames(
                  "flex items-center gap-3 rounded-xl border-2 px-5 py-3.5 text-left text-sm font-medium transition-all",
                  "hover:border-emerald-300 hover:bg-emerald-50",
                  isSelected && !showAnswer && "border-emerald-500 bg-emerald-50 text-emerald-700",
                  isAnswer && "border-emerald-500 bg-emerald-50 text-emerald-700",
                  isWrong && "border-red-400 bg-red-50 text-red-600",
                  !isSelected && !isAnswer && !isWrong && "border-zinc-200 bg-white text-zinc-700"
                )}
                disabled={showAnswer}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-xs font-bold uppercase">
                  {letter}
                </span>
                {choice}
              </button>
            )
          })}
        </div>
      )
    }

    if (question.type === "identification") {
      return (
        <div className="space-y-3">
          <input
            type="text"
            value={userAnswer}
            onChange={e => handleAnswer(e.target.value)}
            placeholder="I-type ang iyong sagot..."
            className="w-full rounded-xl border-2 border-zinc-200 px-5 py-3.5 text-sm font-medium text-zinc-800 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            disabled={showAnswer}
            onKeyDown={e => { if (e.key === "Enter" && !showAnswer) setShowAnswer(true) }}
          />
          {showAnswer && (
            <p className="text-sm text-emerald-600 font-medium">
              Tamang sagot: {(question as IdentificationQuestion).answer}
            </p>
          )}
        </div>
      )
    }

    if (question.type === "true-false") {
      const tf = question as TrueFalseQuestion
      const options = ["Tama", "Mali"]
      return (
        <div className="flex gap-3">
          {options.map(opt => {
            const isSelected = userAnswer === opt
            const isAnswer = showAnswer && ((opt === "Tama" && tf.isCorrect) || (opt === "Mali" && !tf.isCorrect))
            const isWrong = showAnswer && isSelected && ((opt === "Tama" && !tf.isCorrect) || (opt === "Mali" && tf.isCorrect))
            return (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={classNames(
                  "flex-1 rounded-xl border-2 px-6 py-4 text-center text-lg font-bold transition-all",
                  "hover:border-emerald-300 hover:bg-emerald-50",
                  isSelected && !showAnswer && "border-emerald-500 bg-emerald-50 text-emerald-700",
                  isAnswer && "border-emerald-500 bg-emerald-50 text-emerald-700",
                  isWrong && "border-red-400 bg-red-50 text-red-600",
                  !isSelected && !isAnswer && !isWrong && "border-zinc-200 bg-white text-zinc-700"
                )}
                disabled={showAnswer}
              >
                {opt}
              </button>
            )
          })}
        </div>
      )
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={restart}
          className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-600"
        >
          &larr; Menu
        </button>
        <p className="text-sm font-medium text-zinc-500">
          {section.title}: {section.subtitle}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            {shuffled ? "Shuffled" : "Sequential"}
          </span>
          <span className="text-sm font-medium text-zinc-600">
            {currentQ + 1} / {totalQuestions}
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-zinc-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${((currentQ + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-base leading-relaxed text-zinc-800 mb-6">
          {question.type === "true-false"
            ? (question as TrueFalseQuestion).statement
            : question.question}
        </p>

        {renderChoices()}

        {showAnswer && question.type === "true-false" && !(question as TrueFalseQuestion).isCorrect && (
          <p className="mt-3 text-sm text-amber-600 font-medium">
            Iwasto: {(question as TrueFalseQuestion).correctTerm}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => { if (currentQ > 0) { setCurrentQ(prev => prev - 1); setShowAnswer(false) } }}
          disabled={currentQ === 0}
          className={classNames(
            "rounded-xl px-5 py-2.5 text-sm font-semibold transition-all",
            currentQ === 0
              ? "text-zinc-300 cursor-not-allowed"
              : "text-zinc-600 hover:bg-zinc-100"
          )}
        >
          &larr; Previous
        </button>

        <div className="flex gap-2">
          {!showAnswer && (
            <button
              onClick={() => setShowAnswer(true)}
              className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-600 transition-all hover:bg-zinc-50"
            >
              Reveal
            </button>
          )}

          {!showAnswer && (
            <button
              onClick={handleNext}
              className={classNames(
                "rounded-xl px-5 py-2.5 text-sm font-semibold transition-all",
                userAnswer
                  ? "bg-emerald-600 text-white hover:bg-emerald-500"
                  : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              )}
              disabled={!userAnswer}
            >
              {currentQ < totalQuestions - 1 ? "Next →" : "See Results →"}
            </button>
          )}

          {showAnswer && (
            <button
              onClick={handleNext}
              className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-500 active:scale-[0.97]"
            >
              {currentQ < totalQuestions - 1 ? "Next →" : "See Results →"}
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5 justify-center">
        {qs.map((_, i) => {
          const qk = getQuestionKey(sectionIdx, qs[i])
          const answered = qk in answers
          const correct = answered ? isAnswerCorrect(qs[i], answers[qk]) : false
          return (
            <button
              key={i}
              onClick={() => goToQuestion(i)}
              className={classNames(
                "h-7 w-7 rounded-lg text-xs font-semibold transition-all",
                i === currentQ && "ring-2 ring-emerald-400 ring-offset-1",
                answered && correct && "bg-emerald-500 text-white",
                answered && !correct && "bg-red-400 text-white",
                !answered && "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              )}
            >
              {i + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}
