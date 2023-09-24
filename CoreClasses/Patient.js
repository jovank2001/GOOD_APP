/*
Holds patient Information
*/
class Patient {
    constructor(patientId, password, name, roomNumber, emergencyContactInfo, phone, email, healthCareContact, disabilities) {
      if (!patientId || !username || !password) {
        throw new Error("Enter all require patient information");
      }
  
      this.patientId = patientId;
      this.password = password;
      this.roomNumber = roomNumber;
      this.emergencyContactInfo = emergencyContactInfo;
      this.phone = phone;
      this.email = email;
      this.healthCareContact = healthCareContact;
      this.disabilities = disabilities;
      this.eventList = []; // Array to store calendar events
      this.prescriptions = []; // Array to store prescription information
    }
  
    // Add a calendar event
    addEvent(event) {
      if (!event || typeof event !== "object") {
        throw new Error("Invalid calendar event");
      }
      this.eventList.push(event);
    }
  
    // Remove a calendar event
    removeEvent(eventId) {
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
  