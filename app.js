const levels = [
  {
    id: 1,
    emoji: "🟢",
    title: "Level 1: Basics & Patterns",
    problemsPerDay: 8,
    problems: [
      "Sum of Array Elements",
      "Max Element in Array",
      "Reverse Array",
      "Odd and Even Sum",
      "Mean Median Mode",
      "Number Distribution",
      "Print Right Angled Triangle Pattern",
      "Print Hollow Diamond Pattern",
      "Checkerboard Pattern",
      "Trailing Zeros",
      "Trailing Zeros Modified",
      "Binary Representation",
      "Power of 2",
      "Reverse Bits",
      "Swap Bits",
      "Flip Bits",
      "X 1s and Y 0s",
      "X and Y Set Bits",
      "Reverse the Sentence",
      "Arithmetic Operators",
      "Number Reverse",
      "Digit Cubes",
      "Narcissistic Numbers",
      "Natural Numbers Sum",
      "Toggle Case",
      "Odd Even Index",
      "Reverse String",
      "Palindromic Pattern",
      "Floyd Pattern - 1",
      "Floyd Pattern - 2",
      "Triangle Pattern",
      "Pyramid Pattern",
      "Half Diamond",
      "Half Diamond with Numbers",
      "Inverted Pyramid",
      "Rectangle Pattern",
      "Hollow Rectangle",
      "Filled Rectangle",
      "Area of Rectangle",
      "Area of Polygon",
      "Number of Days",
      "Leap Year",
    ],
  },
  {
    id: 2,
    emoji: "🟡",
    title: "Level 2: Arrays & Sorting",
    problemsPerDay: 7,
    problems: [
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "Shell Sort",
      "Merge Sort",
      "Sort Colors (Blind 75)",
      "Find Missing Number",
      "Find Duplicate Number in Array",
      "First and Last",
      "Unique Elements",
      "Merge Two Sorted Arrays",
      "Print Array A Using B",
      "Gauntlets",
      "Max Altitude",
      "Longest Contiguous 1's",
      "Is Bitonic Sequence",
      "Max Min Partition",
      "Left Sum and Right Sum",
      "Alternate Seating",
      "Ternary Array",
      "Three Parts",
      "List Operations",
      "Max Subarray Sum (Blind 75)",
      "Maximum Circular Subarray Sum",
      "Sum of Pairs",
      "Pair with Difference K",
      "Sum of Subarrays",
      "Sum of All Subarrays",
      "Clockwise Rotation of Array",
      "Kth Largest Element (Blind 75)",
      "Product of Array Except Self (Blind 75)",
      "Contains Duplicate (Blind 75)",
      "Merge Intervals (Blind 75)",
      "Insert Interval (Grind 75)",
      "Minimum Subtraction",
      "Number of Multiples",
    ],
  },
  {
    id: 3,
    emoji: "🟠",
    title: "Level 3: Strings & Bit Manipulation",
    problemsPerDay: 6,
    problems: [
      "Reverse String",
      "Valid Anagram (Blind 75)",
      "Check the Square String",
      "Compress String",
      "Strings Rotation",
      "String Hashing",
      "Prefix Suffix Equality",
      "Longest Prefix Suffix",
      "Morse Codes",
      "Long Pressed Keys",
      "String GCD",
      "Basic Calculator",
      "Letter Coverage",
      "Digit String",
      "Digits Sum",
      "Number of Rectangles",
      "Point Location",
      "Toggle 01",
      "Vowels and Consonants",
      "Anagram Basic",
      "Check Bit",
      "Count Set Bits",
      "XOR of Sum of Pairs",
      "Product of XOR of Pairs",
      "Two Set Bits",
      "Converting Binary Strings",
      "Count Equal XOR Pairs",
      "Number of Anagramic Groups",
      "Longest Substring Without Repeating Characters (Blind 75)",
      "Longest Palindromic Substring",
      "Longest Substring with Max K Vowels",
      "String Permutations",
      "Rank of String",
      "KMP / Rabin Karp",
      "Substring Matching",
      "Valid Palindrome (Blind 75)",
      "Longest Repeating Character Replacement (Blind 75)",
      "Group Anagrams (Blind 75)",
      "Decode Ways (Blind 75)",
    ],
  },
  {
    id: 4,
    emoji: "🔵",
    title: "Level 4: 2D Arrays & Matrices",
    problemsPerDay: 5,
    problems: [
      "Rotation of Matrix",
      "Diagonal Traversal",
      "Spiral Traversal",
      "Spiral Pattern",
      "Product of 2 Matrices",
      "Smart Matrix Path",
      "Collect Apples",
      "Largest Submatrix Sum",
      "Max Square Submatrix (All 1s)",
      "Max Submatrix with All 1s",
      "Matrix Row Sum",
      "Matrix Column Sum",
      "Submatrix Sum",
      "Lower Triangle",
      "Sum of Two Matrices",
      "Interchange Diagonals",
      "Count the Elements - Matrix in Array",
      "Matrix Zig-Zag Traversal",
      "Transpose Matrix",
      "Sparse Matrix",
      "Image Flip",
      "Local Max in Matrix",
      "Zero Row and Zero Column",
      "Set Matrix Zeroes (Blind 75)",
      "Word Search (Blind 75)",
      "Search 2D Matrix (Blind 75)",
    ],
  },
  {
    id: 5,
    emoji: "🟣",
    title: "Level 5: Math & Combinatorics",
    problemsPerDay: 4,
    problems: [
      "LCM and HCF",
      "Compute Factorial",
      "Factorial Hard",
      "NcR Basic",
      "Compute nCr",
      "Catalan Number",
      "Express as A^B",
      "Express as Power Sum",
      "Prime Love",
      "Two Primes",
      "Check isPrime",
      "Large Range Primes",
      "Prime Coins",
      "Optimal Prime Game",
      "Applying Modulus",
      "Compute A power B",
      "Super One",
      "Minimum Subtraction",
      "Number of Multiples",
      "A B and X",
      "Arithmetic Progression",
      "Nth Term of GP",
    ],
  },
  {
    id: 6,
    emoji: "🟤",
    title: "Level 6: Stacks & Queues",
    problemsPerDay: 3,
    problems: [
      "Implement Stack",
      "Implement Queue",
      "Implement Deque",
      "Reverse the Sentence",
      "Balanced Parentheses",
      "Stock Span",
      "Valid Parentheses (Blind 75)",
      "Min Stack (Blind 75)",
      "Evaluate Reverse Polish Notation (Blind 75)",
      "Daily Temperatures (Blind 75)",
      "Implement Queue using Stacks (Blind 75)",
      "Implement Stack using Queues (Blind 75)",
      "Remove K Digits (Grind 75)",
    ],
  },
  {
    id: 7,
    emoji: "🟢",
    title: "Level 7: Linked Lists",
    problemsPerDay: 3,
    problems: [
      "Reverse Linked List",
      "Merge Two Sorted Lists",
      "Find Middle of Linked List",
      "Cycle Detection in Linked List",
      "Remove Nth Node From End",
      "Add Two Numbers as Linked Lists",
      "Intersection of Two Linked Lists",
      "Odd Even Linked List",
      "Merge K Sorted Lists",
      "Copy List with Random Pointer",
      "Reverse Nodes in K-Group",
      "LRU Cache",
      "Rotate Linked List",
      "Partition Linked List",
      "Reorder Linked List",
      "Flatten Multilevel Doubly Linked List",
      "Split Linked List to Parts"
    ],
  },
  {
    id: 8,
    emoji: "🔶",
    title: "Level 8: Recursion & Backtracking",
    problemsPerDay: 2,
    problems: [
      "Tower of Hanoi",
      "Tower of Hanoi Modified",
      "N-Queens",
      "String Partitioning",
      "Subsets of an Array",
      "Interleavings",
      "Palindrome Partitioning",
      "Permutations",
      "Express as Power Sum",
      "Letter Combinations of Phone Number (Blind 75)",
      "Generate Parentheses (Blind 75)",
      "Subsets (Blind 75)",
      "Word Break (Blind 75)",
    ],
  },
  {
    id: 9,
    emoji: "🔺",
    title: "Level 9: Greedy + Sliding Window + Hashing",
    problemsPerDay: 2,
    problems: [
      "Non Divisible Subsets",
      "Smart Square",
      "Smaller Elements",
      "Non-Decreasing Subarrays",
      "Count Equal Pairs",
      "Distinct Elements in Window",
      "Window Maximum",
      "Longest Arithmetic Subsequence",
      "Best Time to Buy and Sell Stock (Blind 75)",
      "Longest Subarray with Sum ≤ K (Grind 75)",
      "Minimum Window Substring (Blind 75)",
      "Jump Game (Blind 75)",
      "Candy (Grind 75)",
    ],
  },
  {
    id: 10,
    emoji: "🟩",
    title: "Level 10: Trees",
    problemsPerDay: 1,
    problems: [
      "Tree Traversals",
      "Full Binary Tree",
      "Height / Depth of Tree",
      "Level Order / Zig-Zag / Bottom-Up",
      "Left / Right / Top View",
      "Least Common Ancestor",
      "Check BST",
      "Trim BST",
      "Max Path Sum",
      "Diameter of Tree",
      "Vertical / Diagonal Order",
      "Nodes at Distance K",
      "BST Operations",
      "Binary Tree Inorder Traversal (Blind 75)",
      "Binary Tree Level Order Traversal (Blind 75)",
      "Validate Binary Search Tree (Blind 75)",
      "Serialize and Deserialize Binary Tree (Blind 75)",
      "Subtree of Another Tree (Blind 75)",
      "Lowest Common Ancestor of BST (Blind 75)",
      "Construct Binary Tree from Preorder/Inorder (Blind 75)",
    ],
  },
  {
    id: 11,
    emoji: "🟥",
    title: "Level 11: Graphs",
    problemsPerDay: 1,
    problems: [
      "Path in a Graph",
      "Detect Cycle (Directed/Undirected)",
      "Number of Islands (Blind 75)",
      "Shortest Path (Weighted/Unweighted)",
      "Topological Sort",
      "Minimum Spanning Tree",
      "Knight on Chessboard",
      "Bipartite Graph",
      "Number of Connected Components",
      "Rotting Oranges",
      "Clone Graph (Blind 75)",
      "Course Schedule (Blind 75)",
      "Pacific Atlantic Water Flow (Blind 75)",
      "Word Ladder (Blind 75)",
    ],
  },
  {
    id: 12,
    emoji: "🟦",
    title: "Level 12: DP (Dynamic Programming)",
    problemsPerDay: 1,
    problems: [
      "Subset Sum",
      "Count Subset Sums = K",
      "Longest Increasing Subsequence (Blind 75)",
      "Bitonic Sequence",
      "Edit Distance",
      "Longest Common Subsequence",
      "Longest Palindromic Subsequence",
      "Matrix Chain Multiplication",
      "Boolean Parenthesization",
      "Maximum Non-adjacent Subsequence Sum",
      "Maximum Alternate Nodes Sum",
      "House Robber (Blind 75)",
      "Coin Change (Blind 75)",
      "Longest Palindromic Substring (Blind 75)",
      "Decode Ways (Blind 75)",
      "Unique Paths (Blind 75)",
      "Climbing Stairs (Blind 75)",
    ],
  },
  {
    id: 13,
    emoji: "🟥",
    title: "Level 13: Advanced / Hardcore Logic",
    problemsPerDay: 1,
    problems: [
      "Next Palindrome",
      "Arranging Bricks",
      "Optimal Sort",
      "Mixed Prime Game",
      "Shifting Stones",
      "Palindrome Queries",
      "Smart Problem Solving",
      "Two Array Sums",
      "Game of Stones",
      "Library Books",
      "Painting Buildings",
      "Tower of Shattered Eggs",
      "Maximum XOR",
      "Max Pair Sums from 2 Arrays",
      "Median of Two Sorted Arrays (Blind 75)",
      "Trapping Rain Water (Blind 75)",
      "Regular Expression Matching (Blind 75)",
      "Hardest Question of the Grind (Grind 75)",
    ],
  },
];



let progressData = {};
let totalProblems = 0;


levels.forEach((level) => {
  totalProblems += level.problems.length;
});

function saveProgress() {
  localStorage.setItem("progressData", JSON.stringify(progressData));
}

function initializeProgress() {
  const stored = localStorage.getItem("progressData");
  if (stored) {
    progressData = JSON.parse(stored);
  } 


  levels.forEach((level) => {
    level.problems.forEach((problem, index) => {
      const problemId = `${level.id}-${index}`;
      if (!(problemId in progressData)) {
        progressData[problemId] = false;
      }
    });
  });

  saveProgress();
}


function updateProgressStats() {
  const completed = Object.values(progressData).filter(Boolean).length;
  const percentage = Math.round((completed / totalProblems) * 100);

  document.getElementById("totalCompleted").textContent = completed;
  document.getElementById("totalProblems").textContent = totalProblems;
  document.getElementById("progressPercent").textContent = `${percentage}%`;
}


function toggleProblem(levelId, problemIndex) {
  const problemId = `${levelId}-${problemIndex}`;
  progressData[problemId] = !progressData[problemId];
  saveProgress();

  updateProgressStats();
  updateLevelProgress(levelId);

  const checkbox = document.getElementById(`checkbox-${problemId}`);
  const problemItem = document.getElementById(`problem-${problemId}`);

  if (progressData[problemId]) {
    checkbox.checked = true;
    problemItem.classList.add("completed");
  } else {
    checkbox.checked = false;
    problemItem.classList.remove("completed");
  }
}


function updateLevelProgress(levelId) {
  const level = levels.find((l) => l.id === levelId);
  let completed = 0;

  level.problems.forEach((problem, index) => {
    const problemId = `${levelId}-${index}`;
    if (progressData[problemId]) completed++;
  });

  const progressElement = document.getElementById(`level-progress-${levelId}`);
  progressElement.textContent = `${completed}/${level.problems.length} completed`;
}


function toggleLevel(levelId) {
  const content = document.getElementById(`level-content-${levelId}`);
  const button = document.getElementById(`toggle-btn-${levelId}`);

  if (content.classList.contains("collapsed-content")) {
    content.classList.remove("collapsed-content");
    content.classList.add("expanded-content");
    button.classList.remove("collapsed");
  } else {
    content.classList.add("collapsed-content");
    content.classList.remove("expanded-content");
    button.classList.add("collapsed");
  }
}

function createProblemBadge(problemName) {
  if (problemName.includes("(Blind 75)")) {
    return '<span class="blind-75">Blind 75</span>';
  } else if (problemName.includes("(Grind 75)")) {
    return '<span class="grind-75">Grind 75</span>';
  }
  return "";
}


function renderLevels() {
  const container = document.getElementById("levelsContainer");
  let currentProblemNumber = 1;

  levels.forEach((level) => {
    const levelProblems = level.problems;
    const daysNeeded = Math.ceil(levelProblems.length / level.problemsPerDay);

    let levelHTML = `
      <div class="level-section">
        <div class="level-header" onclick="toggleLevel(${level.id})">
          <div>
            <span class="level-emoji">${level.emoji}</span>
            <span class="level-title">${level.title}</span>
            <span style="color: #ccc; margin-left: 10px;">(${level.problemsPerDay} problems/day)</span>
          </div>
          <div>
            <span class="level-progress" id="level-progress-${level.id}">0/${levelProblems.length} completed</span>
            <button class="toggle-btn" id="toggle-btn-${level.id}">▼</button>
          </div>
        </div>
        <div class="collapsible-content expanded-content" id="level-content-${level.id}">
          <div class="day-container">
    `;

 
    for (let day = 0; day < daysNeeded; day++) {
      const startIdx = day * level.problemsPerDay;
      const endIdx = Math.min(startIdx + level.problemsPerDay, levelProblems.length);
      const dayProblems = levelProblems.slice(startIdx, endIdx);

      levelHTML += `
        <div class="day-card">
          <div class="day-title">Day ${day + 1}</div>
      `;

      dayProblems.forEach((problem, idx) => {
        const problemIndex = startIdx + idx;
        const problemId = `${level.id}-${problemIndex}`;
        const cleanProblemName = problem.replace(/\s*\((Blind|Grind) 75\)/, "");
        const badge = createProblemBadge(problem);
        const isChecked = progressData[problemId] ? "checked" : "";

        levelHTML += `
          <div class="problem-item ${progressData[problemId] ? 'completed' : ''}" id="problem-${problemId}">
            <input type="checkbox" class="checkbox" id="checkbox-${problemId}" ${isChecked} 
              onchange="toggleProblem(${level.id}, ${problemIndex})">
            <span class="problem-number">#${currentProblemNumber}</span>
            <span class="problem-name">${cleanProblemName}</span>
            ${badge}
          </div>
        `;
        currentProblemNumber++;
      });

      levelHTML += `</div>`;
    }

    levelHTML += `
          </div>
        </div>
      </div>
    `;

    container.innerHTML += levelHTML;
  });
}


function init() {
  initializeProgress();
  renderLevels();
  updateProgressStats();

  levels.forEach((level) => {
    updateLevelProgress(level.id);
  });
}


init();