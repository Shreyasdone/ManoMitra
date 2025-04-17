// mental-health-app-setup.mongodb.js
// Complete setup script for the Mental Health App database

// Connect to or create the mental-health-app database
const db = db.getSiblingDB('mental-health-app');
print("Connected to database: mental-health-app");

// Drop any existing collections to start fresh
print("\n--- Dropping existing collections ---");
db.users.drop();
db.moods.drop();
db.journals.drop();
db.anonymouses.drop();
db.anonymous.drop();
print("All existing collections dropped.");

// Create collections with proper JSON Schema validators and indexes
print("\n--- Creating collections with validators ---");

// Create users collection with fixed validator (allowing null for bio and profilePicture)
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "name", "password", "username", "gender", "age"],
      properties: {
        email: {
          bsonType: "string",
          pattern: "^\\S+@\\S+\\.\\S+$",
          description: "Email address"
        },
        name: {
          bsonType: "string"
        },
        password: {
          bsonType: "string"
        },
        username: {
          bsonType: "string"
        },
        gender: {
          enum: ["Male", "Female", "Non Binary"],
          description: "Gender must be one of the specified values"
        },
        age: {
          bsonType: ["int", "double", "long"], // Allow multiple number types
          minimum: 0,
          description: "Age must be a positive integer"
        },
        bio: {
          bsonType: ["string", "null"] // Allow null
        },
        profilePicture: {
          bsonType: ["string", "null"] // Allow null
        },
        journals: {
          bsonType: ["array", "null"], // Allow null
          items: {
            bsonType: "objectId"
          }
        },
        createdAt: {
          bsonType: "date"
        },
        updatedAt: {
          bsonType: "date"
        }
      }
    }
  }
});
print("Users collection created with validator schema.");

// Create indexes for users
db.users.createIndex({ "email": 1 }, { unique: true, background: true });
db.users.createIndex({ "username": 1 }, { unique: true, sparse: true, background: true });
print("User indexes created.");

// Create moods collection with validator
db.createCollection('moods', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["user", "date", "mood"],
      properties: {
        user: {
          bsonType: "objectId"
        },
        date: {
          bsonType: "date"
        },
        mood: {
          bsonType: "string"
        },
        createdAt: {
          bsonType: "date"
        },
        updatedAt: {
          bsonType: "date"
        }
      }
    }
  }
});
print("Moods collection created with validator schema.");

// Create anonymouses collection with validator (consolidating anonymous and anonymouses)
db.createCollection('anonymouses', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "article"],
      properties: {
        title: {
          bsonType: "string"
        },
        article: {
          bsonType: "string"
        },
        options: {
          enum: ["happy", "sad", "depression", "adhd", "other", null] // Allow null
        },
        tags: {
          bsonType: ["array", "null"], // Allow null
          items: {
            bsonType: "string"
          }
        },
        createdAt: {
          bsonType: ["date", "null"] // Allow null
        },
        updatedAt: {
          bsonType: ["date", "null"] // Allow null
        }
      }
    }
  }
});
print("Anonymouses collection created with validator schema.");

// Create journals collection with validator
db.createCollection('journals', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "article"],
      properties: {
        title: {
          bsonType: "string"
        },
        article: {
          bsonType: "string"
        },
        coverPicture: {
          bsonType: ["string", "null"] // Allow null
        },
        tags: {
          bsonType: ["array", "null"], // Allow null
          items: {
            bsonType: "string"
          }
        },
        createdAt: {
          bsonType: ["date", "null"] // Allow null
        },
        updatedAt: {
          bsonType: ["date", "null"] // Allow null
        }
      }
    }
  }
});
print("Journals collection created with validator schema.");

// Insert user data from the BSON file
print("\n--- Inserting data from anonymous.bson ---");
try {
  // Insert anonymous data (from the original anonymous collection)
  // Using insertMany bypasses document validation if needed
  db.anonymouses.insertMany([
    {
      _id: ObjectId("67f2399322d4488767664748"),
      title: "Living with ADHD as an Adult",
      article: "I wasn't diagnosed until I was 28. My whole life made so much more sense after the diagnosis. Every day is a bit of a struggle, but structure and therapy have helped.",
      options: "adhd",
      tags: ["ADHD", "adulting", "diagnosis", "therapy"]
    },
    {
      _id: ObjectId("67f2399322d4488767664749"),
      title: "Dealing with Seasonal Depression",
      article: "Every winter, it feels like a dark cloud just won't go away. Light therapy has helped a little, but it's still tough getting out of bed.",
      options: "depression",
      tags: ["SAD", "winter", "light therapy", "coping"]
    },
    {
      _id: ObjectId("67f2399322d488876766474a"),
      title: "Finding Joy in Small Things",
      article: "After years of battling sadness, I've learned to appreciate small wins. A smile from a stranger, a good cup of coffee – they keep me going.",
      options: "happy",
      tags: ["mental health", "positivity", "mindfulness", "recovery"]
    },
    {
      _id: ObjectId("67f2399322d488876766474b"),
      title: "When Anxiety Meets Sadness",
      article: "It's hard to describe how it feels when both anxiety and sadness hit at once. Some days I can't even step outside.",
      options: "sad",
      tags: ["anxiety", "depression", "mental health", "struggle"]
    },
    {
      _id: ObjectId("67f2399322d488876766474c"),
      title: "Not Sure What I'm Feeling",
      article: "Lately I've been feeling numb – not sad, not happy, just... empty. It's confusing and hard to talk about.",
      options: "other",
      tags: ["emotional numbness", "confusion", "mental health", "introspection"]
    }
  ], { ordered: false });
  print("Anonymous data inserted successfully.");
} catch (e) {
  print("Error inserting anonymous data: " + e.message);
  // Continue with the script even if there's an error
}

// Insert user data 
print("\n--- Inserting user data ---");
try {
  db.users.insertOne({
    _id: ObjectId("67f4d02909192f198e94a656"),
    email: "shreyasdone22@vit.edu",
    name: "Shreyas Done",
    password: "$2a$10$.Sbj7RFsCQj7M6t79qaumOIxFiufMsbV/FHJuDH1JY3ZcGqdgJGxq",
    username: "testuser",
    gender: "Non Binary",
    age: NumberInt(0), // Insert a default age if missing in original data
    bio: null, // Allow null
    profilePicture: null, // Allow null
    journals: [], // Empty array for journals
    createdAt: new Date("2025-04-16T00:00:00Z"), // Example date 
    updatedAt: new Date("2025-04-16T00:00:00Z")  // Example date
  });
  print("User data inserted successfully.");
} catch (e) {
  print("Error inserting user data: " + e.message);
}

// Insert mood data
print("\n--- Inserting mood data ---");
try {
  db.moods.insertMany([
    {
      _id: ObjectId("67e75b8a0abb95c58c9a26f1"),
      user: ObjectId("67f4d02909192f198e94a656"), 
      date: new Date("2025-04-10T00:00:00Z"),
      mood: "😄",
      createdAt: new Date("2025-04-16T00:00:00Z"),
      updatedAt: new Date("2025-04-16T00:00:00Z")
    },
    {
      _id: ObjectId("67f94251b158847e5c50f4c2"),
      user: ObjectId("67f4d02909192f198e94a656"),
      date: new Date("2025-04-11T00:00:00Z"),
      mood: "😊",
      createdAt: new Date("2025-04-16T00:00:00Z"),
      updatedAt: new Date("2025-04-16T00:00:00Z")
    },
    {
      _id: ObjectId("67f94256b158847e5c50f4c5"),
      user: ObjectId("67f4d02909192f198e94a656"),
      date: new Date("2025-04-12T00:00:00Z"),
      mood: "😄",
      createdAt: new Date("2025-04-16T00:00:00Z"),
      updatedAt: new Date("2025-04-16T00:00:00Z")
    },
    {
      _id: ObjectId("67f9425bb158847e5c50f4c8"),
      user: ObjectId("67f4d02909192f198e94a656"),
      date: new Date("2025-04-13T00:00:00Z"),
      mood: "😐",
      createdAt: new Date("2025-04-16T00:00:00Z"),
      updatedAt: new Date("2025-04-16T00:00:00Z")
    },
    {
      _id: ObjectId("67f9425fb158847e5c50f4cb"),
      user: ObjectId("67f4d02909192f198e94a656"),
      date: new Date("2025-04-14T00:00:00Z"),
      mood: "😔",
      createdAt: new Date("2025-04-16T00:00:00Z"),
      updatedAt: new Date("2025-04-16T00:00:00Z")
    },
    {
      _id: ObjectId("67f94263b158847e5c50f4ce"),
      user: ObjectId("67f4d02909192f198e94a656"),
      date: new Date("2025-04-15T00:00:00Z"),
      mood: "😢",
      createdAt: new Date("2025-04-16T00:00:00Z"),
      updatedAt: new Date("2025-04-16T00:00:00Z")
    }
  ], { ordered: false });
  print("Mood data inserted successfully.");
} catch (e) {
  print("Error inserting mood data: " + e.message);
}

// Verify all collections have been created
print("\n--- Database Setup Summary ---");
const collections = db.getCollectionNames();
print("Collections created:");
collections.forEach(collection => print(" - " + collection));

// Count records in each collection
collections.forEach(collection => {
  const count = db[collection].countDocuments();
  print(`${collection}: ${count} documents`);
});

print("\nDatabase setup completed successfully!");