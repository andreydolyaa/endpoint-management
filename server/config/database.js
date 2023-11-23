import mongoose from "mongoose";

class Database {
  constructor(uri, options) {
    this.uri = uri;
    this.options = options;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log(`Connected to database`);
    } catch (error) {
      throw error;
    }
  }
  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(`Disconnected from database`);
    } catch (error) {
      throw error;
    }
  }
}

export default Database;
