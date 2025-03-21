const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a course tutorial on following detail with field as  Course Name, Description, Along with chapter name, About, Duration: Category:'Programming', Topic :'Python', Level:'Basic', Duration:1 hour, NoOfChapters: 5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"CourseName\": \"Python for Beginners\",\n  \"Description\": \"A gentle introduction to Python programming, covering fundamental concepts and practical applications. Learn the basics of syntax, data structures, and control flow to start your Python journey.\",\n  \"Category\": \"Programming\",\n  \"Topic\": \"Python\",\n  \"Level\": \"Basic\",\n  \"Duration\": \"1 hour\",\n  \"NoOfChapters\": 5,\n  \"Chapters\": [\n    {\n      \"ChapterName\": \"Chapter 1: Introduction to Python\",\n      \"About\": \"Welcome to Python! This chapter will cover what Python is, why it's popular, and how to install and set up your development environment.\",\n      \"Duration\": \"10 minutes\",\n      \"Topics\": [\n        \"What is Python?\",\n        \"Why learn Python?\",\n        \"Installation and Setup (Python, IDE)\",\n        \"Running your first Python program (Hello, World!)\"\n      ]\n    },\n    {\n      \"ChapterName\": \"Chapter 2: Variables and Data Types\",\n      \"About\": \"Learn about variables, how to assign values to them, and the different data types Python supports, such as integers, floats, strings, and booleans.\",\n      \"Duration\": \"15 minutes\",\n      \"Topics\": [\n        \"Variables: Declaring and Assigning\",\n        \"Data Types: Integers, Floats, Strings, Booleans\",\n        \"Type Conversion\",\n        \"Basic Input and Output\"\n      ]\n    },\n    {\n      \"ChapterName\": \"Chapter 3: Operators and Expressions\",\n      \"About\": \"This chapter explains different types of operators in Python, including arithmetic, comparison, logical, and assignment operators, and how to use them to create expressions.\",\n      \"Duration\": \"15 minutes\",\n      \"Topics\": [\n        \"Arithmetic Operators (+, -, *, /, %, **)\",\n        \"Comparison Operators (==, !=, >, <, >=, <=)\",\n        \"Logical Operators (and, or, not)\",\n        \"Assignment Operators (=, +=, -=, etc.)\",\n        \"Operator Precedence\"\n      ]\n    },\n    {\n      \"ChapterName\": \"Chapter 4: Control Flow (Conditional Statements)\",\n      \"About\": \"Explore conditional statements (if, elif, else) to control the flow of your program based on different conditions.\",\n      \"Duration\": \"10 minutes\",\n      \"Topics\": [\n        \"if statement\",\n        \"if-else statement\",\n        \"if-elif-else statement\",\n        \"Nested if statements\"\n      ]\n    },\n    {\n      \"ChapterName\": \"Chapter 5:  Loops (Iteration)\",\n      \"About\": \"Learn about loops (for and while) to repeat a block of code multiple times.  This is crucial for automating tasks.\",\n      \"Duration\": \"10 minutes\",\n      \"Topics\": [\n        \"for loop\",\n        \"while loop\",\n        \"break and continue statements\",\n        \"Basic example applications of loops\"\n      ]\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
