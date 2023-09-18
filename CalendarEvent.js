/*
Contains information about each event on patients Event List
*/
class CalendarEvent {
  constructor(id, title, startTime, endTime, required, image) {
    // Basic validation
    if (!id || !title || !startTime || !endTime) {
      throw new Error("ID, title, startTime, and endTime are required");
    }

    if (new Date(startTime) >= new Date(endTime)) {
      throw new Error("Start time must be before end time");
    }

    this.id = id;
    this.title = title;
    this.startTime = new Date(startTime); // Convert to Date object if not already
    this.endTime = new Date(endTime); // Convert to Date object if not already
    this.image = image || null; // Optional image URL or data
  }

  // Method to set the image if not set in the constructor
  setImage(image) {
    this.image = image;

  // Example: Or set the image later
  // myEvent.setImage("https://example.com/newimage.jpg");
  }

  // Method to remove the image
  removeImage() {
    this.image = null;
  }
}