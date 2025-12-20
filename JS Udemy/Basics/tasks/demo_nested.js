// Simplified example of a Reddit JSON response for a post
const redditData = {
  "kind": "Listing",
  "data": {
    "children": [ // Array of post/comment objects
      {
        "kind": "t3", // "t3" indicates a post
        "data": {
          "title": "Nested arrays in JS are cool",
          "author": "user123",
          "ups": 1500,
          "replies": { // Nested object for comments
            "kind": "Listing",
            "data": {
              "children": [ // Array of nested comment objects
                {
                  "kind": "t1", // "t1" indicates a comment
                  "data": {
                    "body": "I agree!",
                    "author": "replyUser"
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
};
