class Patient {
    constructor(patientId, username, password) {
      if (!patientId || !username || !password) {
        throw new Error("Patient ID, username, and password are required");
      }
  
      this.patientId = patientId;
      this.username = username;
      this.password = password; // Note: Password should be hashed and not stored in plaintext
      this.calendar = []; // Array to store calendar events
      this.prescriptions = []; // Array to store prescription information
    }
  
    // Add a calendar event
    addCalendarEvent(event) {
      if (!event || typeof event !== "object") {
        throw new Error("Invalid calendar event");
      }
      this.calendar.push(event);
    }
  
    // Remove a calendar event
    removeCalendarEvent(eventId) {
      if (!eventId) {
        throw new Error("Event ID is required");
      }
      this.calendar = this.calendar.filter(event => event.id !== eventId);
    }
  
    // Add a prescription
    addPrescription(prescription) {
      if (!prescription || typeof prescription !== "object") {
        throw new Error("Invalid prescription");
      }
      this.prescriptions.push(prescription);
    }
  
    // Remove a prescription
    removePrescription(prescriptionId) {
      if (!prescriptionId) {
        throw new Error("Prescription ID is required");
      }
      this.prescriptions = this.prescriptions.filter(pres => pres.id !== prescriptionId);
    }
  
    // Authentication (This is a placeholder; actual authentication logic would be more complex)
    authenticate(password) {
      if (password === this.password) { // Passwords should be hashed and compared securely
        return true;
      }
      return false;
    }
  }
  