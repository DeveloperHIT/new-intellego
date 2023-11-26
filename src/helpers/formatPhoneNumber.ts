export function formatPhoneNumber(phoneNumber?: string): string {
  // Check if the input is valid
  if (!phoneNumber || phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
    throw new Error("Invalid phone number. Must be a 10 digit number.");
  }

  // Format the phone number
  const areaCode = phoneNumber.slice(0, 3);
  const middleThree = phoneNumber.slice(3, 6);
  const lastFour = phoneNumber.slice(6, 10);

  return `(${areaCode}) ${middleThree}-${lastFour}`;
}
