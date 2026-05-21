#  Questions asked for the user
questions = [
    "What is 5 + 7?",
    "What is the capital of Japan?",
    "How many continents are there?"
]

# correct answers, in the same order as the questions
answers = ["12", "tokyo", "7"]


def run_quiz(question_list, answer_list):
    score = 0

    # go through each question one by one
    for i in range(len(question_list)):
        print(question_list[i])
        user_input = input("Your answer: ")

        # lowercase so "Tokyo" and "tokyo" both are correct
        if user_input.lower() == answer_list[i]:
            print("Correct!")
            score = score + 1
        else:
            print("Wrong. The answer was: " + answer_list[i])

    return score


# run the quiz and save the result
final_score = run_quiz(questions, answers)

print("You got " + str(final_score) + " out of " + str(len(questions)))

# gives the user some feedback based on how they did
if final_score == len(questions):
    print("Perfect score!") 
elif final_score >= 2:
    print("Nice job!")
else:
    print("Keep practicing!")
