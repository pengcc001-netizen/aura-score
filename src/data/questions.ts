export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
    category: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You walk into a room and everyone looks up. What do you do?",
    options: [
      { text: "Make eye contact with a few people and smile", points: 3000, category: "social" },
      { text: "Wave at everyone and say hi loudly", points: 1500, category: "social" },
      { text: "Pretend you did not notice and find a seat", points: -500, category: "social" },
      { text: "Check your phone to avoid the attention", points: -1000, category: "social" },
    ],
  },
  {
    id: 2,
    question: "Someone drops their wallet in front of you. You...",
    options: [
      { text: "Pick it up and chase them down to return it", points: 5000, category: "social" },
      { text: "Call out to them so they can pick it up", points: 2000, category: "social" },
      { text: "Pick it up and look for ID to return later", points: 3000, category: "social" },
      { text: "Walk past it — not your problem", points: -5000, category: "social" },
    ],
  },
  {
    id: 3,
    question: "Your friend is telling a story and nobody is listening. You...",
    options: [
      { text: "Ask a follow-up question to draw attention back", points: 4000, category: "social" },
      { text: "Tell everyone to shut up and listen", points: 2000, category: "social" },
      { text: "Listen intently yourself", points: 1500, category: "social" },
      { text: "Start your own conversation with someone else", points: -2000, category: "social" },
    ],
  },
  {
    id: 4,
    question: "You are at karaoke. Someone dares you to sing. You...",
    options: [
      { text: "Grab the mic and absolutely nail it", points: 77000, category: "talent" },
      { text: "Sing with confidence even if you are off-key", points: 5000, category: "talent" },
      { text: "Politely decline — not your thing", points: 500, category: "talent" },
      { text: "Hide in the bathroom until they pick someone else", points: -2000, category: "talent" },
    ],
  },
  {
    id: 5,
    question: "You send a text to your crush and they leave you on read for 3 hours. You...",
    options: [
      { text: "Wait patiently — they are probably busy", points: 2000, category: "romance" },
      { text: "Send a follow-up meme to break the silence", points: 500, category: "romance" },
      { text: "Stare at your phone and spiral", points: -2000, category: "romance" },
      { text: "Double text asking if they are ignoring you", points: -5000, category: "romance" },
    ],
  },
  {
    id: 6,
    question: "A glass falls off the table. You...",
    options: [
      { text: "Catch it mid-air before it hits the ground", points: 10000, category: "talent" },
      { text: "Grab for it but miss", points: 500, category: "talent" },
      { text: "Watch it fall and then pick up the pieces", points: -500, category: "talent" },
      { text: "Flinch and knock something else over too", points: -2000, category: "fail" },
    ],
  },
  {
    id: 7,
    question: "You are walking down the street and see someone waving in your direction. You...",
    options: [
      { text: "Wave back confidently", points: 1500, category: "social" },
      { text: "Half-wave and then realize they were waving at someone behind you", points: -3000, category: "fail" },
      { text: "Look behind you to check first", points: 500, category: "social" },
      { text: "Pretend to adjust your hair to avoid the situation", points: -1000, category: "social" },
    ],
  },
  {
    id: 8,
    question: "Your boss starts a meeting by asking for volunteers for a tough project. You...",
    options: [
      { text: "Raise your hand immediately", points: 5000, category: "work" },
      { text: "Wait to see if anyone else volunteers first", points: 500, category: "work" },
      { text: "Make eye contact with your boss and nod", points: 3000, category: "work" },
      { text: "Suddenly become very interested in your notebook", points: -1500, category: "work" },
    ],
  },
  {
    id: 9,
    question: "You are playing a game and losing badly. You...",
    options: [
      { text: "Laugh it off and compliment the winner", points: 3000, category: "gaming" },
      { text: "Get quietly competitive for next round", points: 1000, category: "gaming" },
      { text: "Say the game is stupid", points: -3000, category: "gaming" },
      { text: "Accuse the game of being rigged", points: -4000, category: "gaming" },
    ],
  },
  {
    id: 10,
    question: "Someone posts a photo of the group and you look terrible in it. You...",
    options: [
      { text: "Joke about it and ask them to tag you", points: 2000, category: "internet" },
      { text: "Ask them politely to take it down", points: 1000, category: "internet" },
      { text: "Untag yourself and say nothing", points: -500, category: "internet" },
      { text: "Report the photo and block the person", points: -3000, category: "internet" },
    ],
  },
  {
    id: 11,
    question: "You see someone sitting alone at a party looking uncomfortable. You...",
    options: [
      { text: "Walk over and start a conversation", points: 7000, category: "social" },
      { text: "Bring them a drink and say hi", points: 5000, category: "social" },
      { text: "Feel bad for them but do nothing", points: -1000, category: "social" },
      { text: "Avoid eye contact so they do not feel observed", points: -500, category: "social" },
    ],
  },
  {
    id: 12,
    question: "You accidentally call your teacher 'mom' in class. You...",
    options: [
      { text: "Laugh and say 'sorry, mom' to make everyone laugh", points: 2000, category: "fail" },
      { text: "Quickly correct yourself and move on", points: -1000, category: "fail" },
      { text: "Turn red and stare at your desk", points: -5000, category: "fail" },
      { text: "Deny it ever happened when people bring it up later", points: -3000, category: "fail" },
    ],
  },
]
