//Crud create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://localhost:27017";

const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database!");
    }

    const db = client.db(databaseName);

    // delete 1 only

    // db.collection("users")
    //   .deleteOne({
    //     _id: new ObjectID("5f4504e230430e1f30fb1125"),
    //   })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // delete document deleteMany

    // db.collection("users")
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //  update many

    // db.collection("users")
    //   .updateMany(
    //     {
    //       name: "Chaitanya",
    //     },
    //     {
    //       $set: {
    //         age: 30,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   });

    // Update-1 fields of documents of collection

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5f45013bc6eb124c4c74d4f3"),
    //     },
    //     {
    //       $set: {
    //         name: "Mike",
    //       },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // read method only 1 by _id as ObjectID

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f45013bc6eb124c4c74d4f3") },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }
    //     console.log(result);
    //   }
    // );

    // read method all by _id as ObjectID

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // Insert-1 Crud Operation

    // db.collection("users").insertOne(
    //   {
    //     name: "Chaitanya",
    //     age: 25,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //     console.log(result.insertedCount);
    //     console.log(result.insertedId);
    //   }
    // );

    // Insert-all Crud Operation

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Pranav",
    //       age: 27,
    //       bio: "ABX",
    //     },
    //     {
    //       name: "Chaitanya",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
