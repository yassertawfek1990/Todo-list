const today = new Date();
  const getDate = (daysOffset) => {
    const date = new Date(today);
    date.setDate(today.getDate() + daysOffset);
    return date.toISOString().split('T')[0];
  }
export let  tasks = {
    "Finish project report": {"title": "Finish project report", "category": "Work", "description": "Complete the quarterly project report by EOD", "date": getDate(0), "done": false},
    "Team meeting": {"title": "Team meeting", "category": "Work", "description": "Attend the weekly team meeting at 3 PM", "date": getDate(1), "done": false},
    "Organize files": {"title": "Organize files", "category": "Work", "description": "Sort and organize work-related files", "date": getDate(2), "done": true},
    "Plan presentation": {"title": "Plan presentation", "category": "Work", "description": "Prepare slides for the upcoming client presentation", "date": getDate(2), "done": false},
  
    "Revise for math exam": {"title": "Revise for math exam", "category": "Study", "description": "Review algebra and calculus chapters", "date": getDate(0), "done": false},
    "Attend online lecture": {"title": "Attend online lecture", "category": "Study", "description": "Join the Zoom session for data structures", "date": getDate(0), "done": false},
    "Complete assignment": {"title": "Complete assignment", "category": "Study", "description": "Submit the history essay by tonight", "date": getDate(1), "done": true},
    "Library research": {"title": "Library research", "category": "Study", "description": "Find resources for biology research", "date": getDate(8), "done": false},
  
    "Birthday party": {"title": "Birthday party", "category": "Party", "description": "Celebrate Alex's birthday at 7 PM", "date": getDate(0), "done": false},
    "Plan weekend outing": {"title": "Plan weekend outing", "category": "Party", "description": "Decide on a venue and guest list", "date": getDate(1), "done": false},
    "Book karaoke session": {"title": "Book karaoke session", "category": "Party", "description": "Reserve a room for Friday evening", "date": getDate(1), "done": true},
    "Decorate party venue": {"title": "Decorate party venue", "category": "Party", "description": "Set up decorations for the party", "date": getDate(4), "done": false},
  
    "Book flight tickets": {"title": "Book flight tickets", "category": "Travel", "description": "Purchase tickets for the vacation", "date": getDate(2), "done": false},
    "Pack luggage": {"title": "Pack luggage", "category": "Travel", "description": "Prepare clothes and travel essentials", "date": getDate(2), "done": false},
    "Plan itinerary": {"title": "Plan itinerary", "category": "Travel", "description": "Organize sightseeing and activities", "date": getDate(0), "done": true},
    "Check travel documents": {"title": "Check travel documents", "category": "Travel", "description": "Ensure passport and visa are valid", "date": getDate(1), "done": false},
  
    "Build React app": {"title": "Build React app", "category": "Coding", "description": "Work on the front-end component", "date": getDate(1), "done": false},
    "Debug API integration": {"title": "Debug API integration", "category": "Coding", "description": "Fix issues with API calls", "date": getDate(0), "done": false},
    "Learn TypeScript": {"title": "Learn TypeScript", "category": "Coding", "description": "Follow the online course on TypeScript basics", "date": getDate(6), "done": false},
    "Code review": {"title": "Code review", "category": "Coding", "description": "Review the team's latest pull requests", "date": getDate(7), "done": false},
    "Learn React": {"title": "Learn React", "category": "Coding", "description": "Fix issues with API calls", "date": getDate(3), "done": false},

    "Go to Gym": {"title": "Go to Gym", "category": "Sport", "description": "Should go to Gym at 9 PM", "date": getDate(5), "done": false},
    "Morning yoga": {"title": "Morning yoga", "category": "Sport", "description": "Attend the 7 AM yoga class", "date": getDate(2), "done": false},
    "Evening run": {"title": "Evening run", "category": "Sport", "description": "Go for a 5K run in the park", "date": getDate(3), "done": true},
    "Swimming session": {"title": "Swimming session", "category": "Sport", "description": "Practice freestyle and backstroke", "date": getDate(10), "done": false},
  
    "Buy groceries": {"title": "Buy groceries", "category": "Shopping", "description": "Get vegetables, fruits, and dairy", "date": getDate(1), "done": false},
    "Order new laptop": {"title": "Order new laptop", "category": "Shopping", "description": "Purchase the latest model online", "date": getDate(0), "done": false},
    "Shop for clothes": {"title": "Shop for clothes", "category": "Shopping", "description": "Visit the mall for winter wear", "date": getDate(2), "done": false},
    "Buy books": {"title": "Buy books", "category": "Shopping", "description": "Order novels and reference books", "date": getDate(0), "done": false}
  };
  