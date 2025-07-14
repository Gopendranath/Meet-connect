import React, { useState, useCallback } from 'react'
import { ChevronLeft, BookOpen, ArrowRightCircle } from 'lucide-react'
import { QnA } from '@/constants'

// Mock data for demonstration - replace with your actual QnA import

const Practice = () => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  const handleTopicSelect = useCallback((topicIndex : number) => {
    setSelectedTopic(topicIndex)
    setSelectedQuestion(null) // Reset question selection
  }, [])

  const handleQuestionSelect = useCallback((questionIndex : number) => {
    setSelectedQuestion(questionIndex)
  }, [])

  const handleBackToTopics = useCallback(() => {
    setSelectedTopic(null)
    setSelectedQuestion(null)
  }, [])

  const handleBackToQuestions = useCallback(() => {
    setSelectedQuestion(null)
  }, [])

  // Topics grid view
  if (selectedTopic === null) {
    return (
      <div className="min-h-screen p-4">
        <div className="mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {QnA.map((topic, idx) => (
              <button
                key={`topic-${idx}`}
                className="bg-dark-1 rounded-xl shadow-sm p-6 text-left transition-all duration-200 hover:shadow-md hover:border-blue-200 hover:-translate-y-1 focus:outline-none"
                onClick={() => handleTopicSelect(idx)}
                aria-label={`Practice ${topic.topic}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="bg-blue-900 text-xs font-medium px-2 py-1 rounded-full">
                    {topic.qa.length} questions
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                  {topic.topic}
                </h2>
                <p className="text-sm text-gray-500">
                  Click to view questions
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const currentTopic = QnA[selectedTopic]

  // Questions list view
  if (selectedQuestion === null) {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <button 
              className="inline-flex items-center hover:text-blue-400 text-blue-500 font-medium transition-colors focus:outline-none rounded-md px-2 py-1"
              onClick={handleBackToTopics}
              aria-label="Back to topics"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Topics
            </button>
          </nav>

          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{currentTopic.topic}</h1>
            <p className="text-gray-400">{currentTopic.qa.length} questions available</p>
          </header>

          <div className="space-y-4">
            {currentTopic.qa.map((qa, idx) => (
              <button
                key={`question-${idx}`}
                className="w-full rounded-lg bg-dark-1 shadow-sm p-4 text-left transition-all duration-200 hover:shadow-md hover:border-blue-200 focus:outline-none"
                onClick={() => handleQuestionSelect(idx)}
                aria-label={`View question ${idx + 1}`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-medium">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium mb-1">
                      {qa.question}
                    </p>
                    <p className="text-sm text-gray-400">Click to view answer</p>
                  </div>
                  <ArrowRightCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Question and answer view
  const currentQA = currentTopic.qa[selectedQuestion]
  const currentQuestionNumber = selectedQuestion + 1
  const totalQuestions = currentTopic.qa.length

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-6">
          <button 
            className="inline-flex items-center hover:text-blue-400 text-blue-500 font-medium transition-colors focus:outline-none rounded-md px-2 py-1"
            onClick={handleBackToQuestions}
            aria-label="Back to questions"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Questions
          </button>
        </nav>

        <div className=" rounded-xl shadow-sm border border-gray-800 overflow-hidden">
          <div className="bg-gradient-to-b from-blue-600 to-blue-900 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">{currentTopic.topic}</h1>
              <span className="text-blue-100 text-sm">
                Question {currentQuestionNumber} of {totalQuestions}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 leading-relaxed">
                {currentQA.question}
              </h2>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-sm font-medium text-green-500 mb-3 uppercase tracking-wide">
                Answer
              </h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-100 leading-relaxed whitespace-pre-line">
                  {currentQA.answer}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation between questions */}
          <div className="px-6 py-4 border-t border-blue-700 bg-dark-2">
            <div className="flex justify-between items-center">
              <button
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedQuestion > 0
                    ? 'text-blue-500 hover:text-blue-400 focus:outline-none cursor-pointer'
                    : 'text-gray-500 cursor-not-allowed'
                }`}
                onClick={() => selectedQuestion > 0 && handleQuestionSelect(selectedQuestion - 1)}
                disabled={selectedQuestion === 0}
                aria-label="Previous question"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>

              <span className="text-sm text-gray-400">
                {currentQuestionNumber} / {totalQuestions}
              </span>

              <button
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedQuestion < totalQuestions - 1
                    ? 'text-blue-500 hover:text-blue-400 focus:outline-none cursor-pointer'
                    : 'text-gray-500 cursor-not-allowed'
                }`}
                onClick={() => selectedQuestion < totalQuestions - 1 && handleQuestionSelect(selectedQuestion + 1)}
                disabled={selectedQuestion === totalQuestions - 1}
                aria-label="Next question"
              >
                Next
                <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice