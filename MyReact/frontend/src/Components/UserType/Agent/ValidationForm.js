// ValidationForm.js

function Validation(values) {
    let errors = {};
  
    // Regular expressions for validation
    const usernamePattern = /^[a-zA-Z ]*$/; // Only alphabets and spaces
    const productPattern = /^[a-zA-Z ]*$/;  // Only alphabets and spaces
    const msiNumberPattern = /^[0-9]+$/;    // Only digits
    const serialNumberPattern = /^[0-9]+$/; // Only digits
    const costPattern = /^[0-9]+$/;         // Only digits
  
    // Check for empty fields
    if (!values.username.trim()) {
      errors.username = "Username is required";
    } else if (!usernamePattern.test(values.username)) {
      errors.username = "Username should contain only alphabets";
    }
  
    if (!values.product.trim()) {
      errors.product = "Product name is required";
    } else if (!productPattern.test(values.product)) {
      errors.product = "Product name should contain only alphabets";
    }
  
    if (!values.msi_number.trim()) {
      errors.msi_number = "MSI Number is required";
    } else if (!msiNumberPattern.test(values.msi_number)) {
      errors.msi_number = "MSI Number should contain only digits";
    }
  
    if (!values.serial_Number.trim()) {
      errors.serial_Number = "Serial Number is required";
    } else if (!serialNumberPattern.test(values.serial_Number)) {
      errors.serial_Number = "Serial Number should contain only digits";
    }
  
    if (!values.cost.trim()) {
      errors.cost = "Cost is required";
    } else if (!costPattern.test(values.cost)) {
      errors.cost = "Cost should contain only digits";
    }
  
    return errors;
  }
  
  export default Validation;
  