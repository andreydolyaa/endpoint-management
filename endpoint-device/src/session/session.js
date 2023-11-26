class Session {
  constructor() {
    this.sessionId = null;
  }
  static set store(sessionId) {
    this.sessionId = sessionId;
  }
  static get retrieve() {
    return this.sessionId;
  }
}

export default Session;
