/*
Contains information about each patients prescription

Usage example:
  const myPrescription = new Prescription(
    "1",
    "Ibuprofen",
    "200mg",
    "Every 4-6 hours",
    "10 days",
    "Take with food",
    "https://example.com/image.jpg",
    { name: "Dr. Smith", phone: "123-456-7890", email: "drsmith@example.com" }
  );
  
  // Update doctor's contact information
  myPrescription.updateDoctorContact({ name: "Dr. Jane", phone: "987-654-3210", email: "drjane@example.com" });
  */
class Prescription {
    constructor(id, medicationName, dosage, frequency, duration, instructions, image, doctorContact) {
      // Basic Validation
      if (!id || !medicationName || !dosage || !frequency || !duration) {
        throw new Error("ID, medication name, dosage, frequency, and duration are required");
      }
  
      if (!doctorContact || typeof doctorContact !== 'object' || !doctorContact.name || !doctorContact.phone) {
        throw new Error("Doctor's name and contact phone are required");
      }
  
      this.id = id;  // Unique identifier for the prescription
      this.medicationName = medicationName;  // Name of the medication
      this.dosage = dosage;  // Dosage amount, could be in mg, ml, etc.
      this.frequency = frequency;  // How often the medication should be taken
      this.duration = duration;  // For how many days the medication should be taken
      this.instructions = instructions || 'N/A';  // Any special instructions
      this.image = image || null;  // Optional image URL or data
      this.doctorContact = doctorContact;  // Doctor's contact information
    }
  
    // Method to set the image if not set in the constructor
    setImage(image) {
      this.image = image;
    }
  
    // Method to remove the image
    removeImage() {
      this.image = null;
    }
  
    // Method to update special instructions
    updateInstructions(newInstructions) {
      this.instructions = newInstructions;
    }
  
    // Method to update doctor's contact information
    updateDoctorContact(newContact) {
      if (typeof newContact === 'object' && newContact.name && newContact.phone) {
        this.doctorContact = newContact;
      } else {
        throw new Error("Invalid doctor contact information");
      }
    }
  }
