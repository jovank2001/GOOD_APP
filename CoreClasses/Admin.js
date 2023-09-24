/*
General Administrative actions
*/
class Admin {
  constructor(username, password, accessLevel) {
    if (!username || !password) {
      throw new Error("Both username and password are required");
    }
    this.username = username;
    this.password = password; // Note: Password should be hashed and not stored in plaintext
    this.accessLevel = accessLevel;
    
  }

  // Method to authenticate the admin user
  //  Will need to communicate with database to check if the users credentials are correct
  authenticate() {
    // Logic to authenticate user
  }

  // CRUD Operations for patient accounts
  
  /* Create new patient account
    Patient Account inforamtion will only contain information necessary for general administrative duties (ex. Event planning, transportaion, etc.)
    Will need to communicate with database to add new patient account information
    Initially patient account info will consist of:
    - patientId
    - Password
    - Name
    - Room number
    - Emergency contact info
    - Phone number, email address
    - Healthcare Professional contact information
    - Disabilities

  */
  createPatientAccount(patientInfo) {
    if (!patientInfo || typeof patientInfo !== "object") {
      throw new Error("Invalid patient information");
    }
    // Logic to create a new patient account

  }

  /* Read patient account information
      Prints out all patient information available
  */
  readPatientAccount(patientId) {
    if (!patientId) {
      throw new Error("Patient ID is required");
    }
    // Logic to read patient information
  }

  /* Update patient account information
      Updates patient account information with new information
  */
  updatePatientAccount(patientId, updatedInfo) {
    if (!patientId || !updatedInfo || typeof updatedInfo !== "object") {
      throw new Error("Invalid input parameters");
    }
    // Logic to update patient information
  }

  // Delete patient account
  deletePatientAccount(patientId) {
    if (!patientId) {
      throw new Error("Patient ID is required");
    }
    // Logic to delete a patient account
  }

  // Create a event and add it to the internaEventList (stored on database)
  createEvent(id, title, startTime, endTime, required, image, description){
    this.event = CalendarEvent(id, title, startTime, endTime, required, image, description);
    //Add this.event to the internaEventList

  }

  // Method to manage staff accounts
  
  /* Create new staff account
    Staff account infomation will consist of:
    - staffId
    - Password
    - Name
    - Phone number, email address

  */
  createStaffAccount(staffInfo) {
    if (!staffInfo || typeof staffInfo !== "object") {
      throw new Error("Invalid staff information");
    }
    // Logic to create a new staff account
  }

  // Update staff account information
  updateStaffAccount(staffId, updatedInfo) {
    if (!staffId || !updatedInfo || typeof updatedInfo !== "object") {
      throw new Error("Invalid input parameters");
    }
    // Logic to update staff account information
  }

  // Delete staff account
  deleteStaffAccount(staffId) {
    if (!staffId) {
      throw new Error("Staff ID is required");
    }
    // Logic to delete a staff account
  }
  // Manage Events for patients

  // Add Event to patient calendar
  addEvent(event, patientId) {
    if (!staffId || !event || typeof event !== "object") {
      throw new Error("Invalid event parameters");
    }
    // Logic to add event to patients calender
  }

  // Audit Logging
  
  // Log an action performed by admin
  logAction(action, details) {
    if (!action || !details) {
      throw new Error("Action and details are required for auditing");
    }
    // Logic to log admin actions for auditing
  }
}

