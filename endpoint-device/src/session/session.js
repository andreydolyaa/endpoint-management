class Session {
  constructor() {
    this.sessionId = null;
  }
  static saveSessionId(sessionId) {
    this.sessionId = sessionId;
  }
  static getSessionId() {
    return this.sessionId;
  }
}

export default Session
